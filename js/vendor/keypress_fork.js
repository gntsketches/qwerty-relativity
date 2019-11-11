/* FORK v0.1

still need to:

- validate combo for excludes
    relevant for control vs ctrl, etc.
- excludes on key up

*/



/*
 * decaffeinate suggestions:
 * DS101: Remove unnecessary use of Array.from
 * DS102: Remove unnecessary code created because of implicit returns
 * DS104: Avoid inline assignments
 * DS202: Simplify dynamic range loops
 * DS203: Remove `|| {}` from converted for-own loops
 * DS204: Change includes calls to have a more natural evaluation order
 * DS205: Consider reworking code to avoid use of IIFEs
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
/*
Copyright 2014 David Mauro
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
Keypress is a robust keyboard input capturing Javascript utility
focused on input for games.
version 2.1.5
*/

/*
Combo options available and their defaults:
    keys                  : []            - An array of the keys pressed together to activate combo.
    count                 : 0             - The number of times a counting combo has been pressed. Reset on release.
    is_unordered          : false         - Unless this is set to true, the keys can be pressed down in any order.
    is_counting           : false         - Makes this a counting combo (see documentation).
    is_exclusive          : false         - This combo will replace other exclusive combos when true.
    is_solitary           : false         - This combo will only fire if ONLY it's keys are pressed down.
    is_sequence           : false         - Rather than a key combo, this is an ordered key sequence.
    prevent_default       : false         - Prevent default behavior for all component key keypresses.
    prevent_repeat        : false         - Prevent the combo from repeating when keydown is held.
    normalize_caps_lock   : false         - Do not allow turning caps lock on to prevent combos from being activated.
    on_keydown            : null          - A function that is called when the combo is pressed.
    on_keyup              : null          - A function that is called when the combo is released.
    on_release            : null          - A function that is called when all keys in the combo are released.
    this                  : undefined     - Defines the scope for your callback functions.
*/

//##########
// Constants
//##########

const _factory_defaults = {
    is_unordered        : false,
    is_counting         : false,
    is_exclusive        : false,
    is_solitary         : false,
    prevent_default     : false,
    prevent_repeat      : false,
    normalize_caps_lock : false,
    excludes			      : []
};

const _modifier_keys = ["meta", "alt", "option", "ctrl", "shift", "cmd"];

let _metakey = "ctrl";

//##########################
// Public object and Classes
//##########################

const keypress = {};

keypress.debug = false;

class Combo {
    constructor(dictionary) {
        // Copy over any non-false values
        for (let property of Object.keys(dictionary || {})) {
            const value = dictionary[property];
            if (value !== false) { this[property] = value; }
        }

        // Standard Defaults
        this.keys = this.keys || [];
        this.count = this.count || 0;
    }

    allows_key_repeat() {
        // Combos with keydown functions should be able to rapid fire
        // when holding down the key for an extended period
        return !this.prevent_repeat && (typeof this.on_keydown === "function");
    }

    reset() {
        this.count = 0;
        return this.keyup_fired = null;
    }
}

keypress.Listener = class Listener {
    constructor(element, defaults) {
        // jQuery proofing
        if ((typeof jQuery !== 'undefined' && jQuery !== null) && element instanceof jQuery) {
            if (element.length !== 1) {
                _log_error("Warning: your jQuery selector should have exactly one object.");
            }
            element = element[0];
        }

        // Public properties
        this.should_suppress_event_defaults = false;
        this.should_force_event_defaults = false;
        this.sequence_delay = 800;

        // Private properties
        this._registered_combos = [];
        this._keys_down = [];
        this._active_combos = [];
        this._sequence = [];
        this._sequence_timer = null;
        this._prevent_capture = false;
        this._defaults = defaults || {};
        for (let property of Object.keys(_factory_defaults || {})) {
            const value = _factory_defaults[property];
            this._defaults[property] = this._defaults[property] || value;
        }

        // Attach handlers to element
        this.element = element || document.body;

        const attach_handler = function(target, event, handler) {
            if (target.addEventListener) {
                target.addEventListener(event, handler);
            } else if (target.attachEvent) {
                target.attachEvent(`on${event}`, handler);
            }

            return handler;
        };

        this.keydown_event = attach_handler(this.element, "keydown", e => {
            e = e || window.event;
            this._receive_input(e, true);
            return this._bug_catcher(e);
        });

        this.keyup_event = attach_handler(this.element, "keyup", e => {
            e = e || window.event;
            return this._receive_input(e, false);
        });

        this.blur_event = attach_handler(window, "blur", () => {
            // Assume all keys are released when we can't catch key events
            // This prevents alt+tab conflicts
            for (let key of Array.from(this._keys_down)) {
                this._key_up(key, {});
            }
            return this._keys_down = [];
    });
    }

    destroy() {
        const remove_handler = function(target, event, handler) {
            if (target.removeEventListener != null) {
                return target.removeEventListener(event, handler);
            } else if (target.removeEvent != null) {
                return target.removeEvent(`on${event}`, handler);
            }
        };

        remove_handler(this.element, "keydown", this.keydown_event);
        remove_handler(this.element, "keyup", this.keyup_event);
        return remove_handler(window, "blur", this.blur_event);
    }

    // Helper Methods

    _bug_catcher(e) {
        // This seems to be Mac specific weirdness, so we'll target "cmd" as metaKey
        // Force a keyup for non-modifier keys when command is held because they don't fire
        let needle;
        if ((_metakey === "cmd") && Array.from(this._keys_down).includes("cmd") && (needle = _convert_key_to_readable(e.keyCode != null ? e.keyCode : e.key), !["cmd", "shift", "alt", "caps", "tab"].includes(needle))) {
            return this._receive_input(e, false);
        }
    }
        // Note: we're currently ignoring the fact that this doesn't catch the bug that a keyup
        // will not fire if you keydown a combo, then press and hold cmd, then keyup the combo.
        // Perhaps we should fire keyup on all active combos when we press cmd?

    _cmd_bug_check(combo_keys) {
        // We don't want to allow combos to activate if the cmd key
        // is pressed, but cmd isn't in them. This is so they don't
        // accidentally rapid fire due to our hack-around for the cmd
        // key bug and having to fake keyups.
        if ((_metakey === "cmd") && Array.from(this._keys_down).includes("cmd") && !Array.from(combo_keys).includes("cmd")) {
            return false;
        }
        return true;
    }

    _prevent_default(e, should_prevent) {
        // If we've pressed a combo, or if we are working towards
        // one, we should prevent the default keydown event.
        if ((should_prevent || this.should_suppress_event_defaults) && !this.should_force_event_defaults) {
            if (e.preventDefault) { e.preventDefault(); } else { e.returnValue = false; }
            if (e.stopPropagation) { return e.stopPropagation(); }
        }
    }

    // Tracking Combos

    _get_active_combos(key) {
        // Based on the keys_down and the key just pressed or released
        // (which should not be in keys_down), we determine if any
        // combo in registered_combos could be considered active.
        // This will return an array of active combos

        const active_combos = [];

        // First check that every key in keys_down maps to a combo
        const keys_down = _filter_array(this._keys_down, down_key => down_key !== key);
        keys_down.push(key);

        // Get perfect matches
        this._match_combo_arrays(keys_down, match => {
            if (this._cmd_bug_check(match.keys)) { return active_combos.push(match); }
        });

        // Get fuzzy matches
        this._fuzzy_match_combo_arrays(keys_down, match => {
            if (Array.from(active_combos).includes(match)) { return; }
            if (!match.is_solitary && !!this._cmd_bug_check(match.keys)) { return active_combos.push(match); }
        });

        return active_combos;
    }

    _get_potential_combos(key) {
        // Check if we are working towards pressing a combo.
        // Used for preventing default on keys that might match
        // to a combo in the future.
        const potentials = [];
        for (let combo of Array.from(this._registered_combos)) {
            if (combo.is_sequence) { continue; }
            if (Array.from(combo.keys).includes(key) && this._cmd_bug_check(combo.keys)) { potentials.push(combo); }
        }
        return potentials;
    }

    _add_to_active_combos(combo) {
        let should_replace = false;
        let should_prepend = true;
        let already_replaced = false;
        // An active combo is any combo which the user has already entered.
        // We use this to track when a user has released the last key of a
        // combo for on_release, and to keep combos from 'overlapping'.
        if (Array.from(this._active_combos).includes(combo)) {
            return true;
        } else if (this._active_combos.length) {
            // We have to check if we're replacing another active combo
            // So compare the combo.keys to all active combos' keys.
            for (let i = 0, end = this._active_combos.length, asc = 0 <= end; asc ? i < end : i > end; asc ? i++ : i--) {
                let active_combo = this._active_combos[i];
                if (!active_combo || !active_combo.is_exclusive || !combo.is_exclusive) { continue; }
                const active_keys = active_combo.keys;
                if (!should_replace) {
                    for (let active_key of Array.from(active_keys)) {
                        should_replace = true;
                        if (!Array.from(combo.keys).includes(active_key)) {
                            should_replace = false;
                            break;
                        }
                    }
                }

                if (should_prepend && !should_replace) {
                    for (let combo_key of Array.from(combo.keys)) {
                        should_prepend = false;
                        if (!Array.from(active_keys).includes(combo_key)) {
                            should_prepend = true;
                            break;
                        }
                    }
                }

                if (should_replace) {
                    if (already_replaced) {
                        active_combo = this._active_combos.splice(i, 1)[0];
                        if (active_combo != null) { active_combo.reset(); }
                    } else {
                        active_combo =  this._active_combos.splice(i, 1, combo)[0];
                        if (active_combo != null) { active_combo.reset(); }
                        already_replaced = true;
                    }
                    should_prepend = false;
                }
            }
        }
        if (should_prepend) {
            this._active_combos.unshift(combo);
        }

        return should_replace || should_prepend;
    }

    _remove_from_active_combos(combo) {
        for (let i = 0, end = this._active_combos.length, asc = 0 <= end; asc ? i < end : i > end; asc ? i++ : i--) {
            const active_combo = this._active_combos[i];
            if (active_combo === combo) {
                combo = this._active_combos.splice(i, 1)[0];
                combo.reset();
                break;
            }
        }
    }

    // Sequence Methods

    _get_possible_sequences() {
        // Determine what if any sequences we're working towards.
        // We will consider any which any part of the end of the sequence
        // matches and return all of them.
        const matches = [];
        for (let combo of Array.from(this._registered_combos)) {
            for (let j = 1, end = this._sequence.length, asc = 1 <= end; asc ? j <= end : j >= end; asc ? j++ : j--) {
                var match;
                let sequence = this._sequence.slice(-j);
                if (!combo.is_sequence) { continue; }
                if (!Array.from(combo.keys).includes("shift")) {
                    sequence = _filter_array(sequence, key => key !== "shift");
                    if (!sequence.length) { continue; }
                }
                for (let i = 0, end1 = sequence.length, asc1 = 0 <= end1; asc1 ? i < end1 : i > end1; asc1 ? i++ : i--) {
                    if (combo.keys[i] === sequence[i]) {
                        match = true;
                    } else {
                        match = false;
                        break;
                    }
                }
                if (match) { matches.push(combo); }
            }
        }
        return matches;
    }

    _add_key_to_sequence(key, e) {
        this._sequence.push(key);
        // Now check if they're working towards a sequence
        const sequence_combos = this._get_possible_sequences();
        if (sequence_combos.length) {
            for (let combo of Array.from(sequence_combos)) {
                this._prevent_default(e, combo.prevent_default);
            }
            // If we're working towards one, give them more time to keep going
            if (this._sequence_timer) { clearTimeout(this._sequence_timer); }
            if (this.sequence_delay > -1) {
                this._sequence_timer = setTimeout(() => {
                    return this._sequence = [];
                }
                , this.sequence_delay);
            }
        } else {
            // If we're not working towards something, just clear it out
            this._sequence = [];
        }
    }

    _get_sequence(key) {
        // Compare _sequence to all combos
        for (var combo of Array.from(this._registered_combos)) {
            var match;
            if (!combo.is_sequence) { continue; }
            for (let j = 1, end = this._sequence.length, asc = 1 <= end; asc ? j <= end : j >= end; asc ? j++ : j--) {
                // As we are traversing backwards through the sequence keys,
                // Take out any shift keys, unless shift is in the combo.
                const sequence = (_filter_array(this._sequence, function(seq_key) {
                    if (Array.from(combo.keys).includes("shift")) { return true; }
                    return seq_key !== "shift";
                })).slice(-j);
                if (combo.keys.length !== sequence.length) { continue; }
                for (let i = 0, end1 = sequence.length, asc1 = 0 <= end1; asc1 ? i < end1 : i > end1; asc1 ? i++ : i--) {
                    const seq_key = sequence[i];
                    // Special case for shift. Ignore shift keys, unless the sequence explicitly uses them
                    if (!Array.from(combo.keys).includes("shift")) { if (seq_key === "shift") { continue; } }
                    // Don't select this combo if we're pressing shift and shift isn't in it
                    if ((key === "shift") && !Array.from(combo.keys).includes("shift")) { continue; }
                    if (combo.keys[i] === seq_key) {
                        match = true;
                    } else {
                        match = false;
                        break;
                    }
                }
            }
            if (match) {
                if (combo.is_exclusive) {
                    this._sequence = [];
                }
                return combo;
            }
        }
        return false;
    }

    // Catching Combos

    _receive_input(e, is_keydown) {
        // If we're not capturing input, we should
        // clear out _keys_down for good measure
        if (this._prevent_capture) {
            if (this._keys_down.length) { this._keys_down = []; }
            return;
        }
        const key = _convert_key_to_readable((e.keyCode != null ? e.keyCode : e.key));
        // Catch tabbing out of a non-capturing state
        if (!is_keydown && !this._keys_down.length && ["alt", _metakey].includes(key)) {
            return;
        }
        if (!key) { return; }
        if (is_keydown) {
            return this._key_down(key, e);
        } else {
            return this._key_up(key, e);
        }
    }

    _fire(event, combo, key_event, is_autorepeat) {
        // Only fire this event if the function is defined
        if (typeof combo["on_" + event] === "function") {
            this._prevent_default(key_event, (combo["on_" + event].call(combo.this, key_event, combo.count, is_autorepeat) !== true));
        }
        // We need to mark that keyup has already happened
        if (event === "release") {
            combo.count = 0;
        }
        if (event === "keyup") {
            return combo.keyup_fired = true;
        }
    }

    _match_combo_arrays(potential_match, match_handler) {
        // This will return all combos that match
        for (let source_combo of Array.from(this._registered_combos)) {
            const combo_potential_match = potential_match.slice(0);
            if (source_combo.normalize_caps_lock && Array.from(combo_potential_match).includes("caps")) {
                combo_potential_match.splice(combo_potential_match.indexOf("caps"), 1);
            }
            if ((!source_combo.is_unordered && _compare_arrays_sorted(combo_potential_match, source_combo.keys)) || (source_combo.is_unordered && _compare_arrays(combo_potential_match, source_combo.keys))) {
                match_handler(source_combo);
            }
        }
    }

    _fuzzy_match_combo_arrays(potential_match, match_handler) {
        // This will return combos that match even if other keys are pressed
        for (let source_combo of Array.from(this._registered_combos)) {
            if ((!source_combo.is_unordered && _is_array_in_array_sorted(source_combo.keys, potential_match)) || (source_combo.is_unordered && _is_array_in_array(source_combo.keys, potential_match))) {
                match_handler(source_combo);
            }
        }
    }

    _keys_remain(combo) {
        let keys_remain;
        for (let key of Array.from(combo.keys)) {
            if (Array.from(this._keys_down).includes(key)) {
                keys_remain = true;
                break;
            }
        }
        return keys_remain;
    }

    _key_down(key, e) {
        // Check if we're holding shift
        let event_mod, mod;
        const shifted_key = _convert_to_shifted_key(key, e);
        if (shifted_key) { key = shifted_key; }

        // Add the key to sequences
        this._add_key_to_sequence(key, e);
        const sequence_combo = this._get_sequence(key);
        if (sequence_combo) { this._fire("keydown", sequence_combo, e); }

        // We might have modifier keys down when coming back to
        // this window and they might not be in _keys_down, so
        // we're doing a check to make sure we put it back in.
        // This only works for explicit modifier keys.
        for (mod in _modifier_event_mapping) {
            event_mod = _modifier_event_mapping[mod];
            if (!e[event_mod]) { continue; }
            if ((mod === key) || Array.from(this._keys_down).includes(mod)) { continue; }
            this._keys_down.push(mod);
        }
        // Alternatively, we might not have modifier keys down
        // that we think are, so we should catch those too
        for (mod in _modifier_event_mapping) {
            event_mod = _modifier_event_mapping[mod];
            if (mod === key) { continue; }
            if (Array.from(this._keys_down).includes(mod) && !e[event_mod]) {
                // The Windows key will think it is the cmd key, but won't trigger the event mod
                if ((mod === "cmd") && (_metakey !== "cmd")) { continue; }
                for (let i = 0, end = this._keys_down.length, asc = 0 <= end; asc ? i < end : i > end; asc ? i++ : i--) {
                    if (this._keys_down[i] === mod) { this._keys_down.splice(i, 1); }
                }
            }
        }

        // Find which combos we have pressed or might be working towards, and prevent default
        const combos = this._get_active_combos(key);
        const potential_combos = this._get_potential_combos(key);
        for (let combo of Array.from(combos)) {
            this._handle_combo_down(combo, potential_combos, key, e);
        }
        if (potential_combos.length) {
            for (let potential of Array.from(potential_combos)) {
                this._prevent_default(e, potential.prevent_default);
            }
        }

        if (!Array.from(this._keys_down).includes(key)) {
            this._keys_down.push(key);
        }

		// console.log('down', this._keys_down)
    }

    _handle_combo_down(combo, potential_combos, key, e) {
        // Make sure we're not trying to fire for a combo that already fired
        if (!Array.from(combo.keys).includes(key)) { return false; }

        this._prevent_default(e, (combo && combo.prevent_default));

        let is_autorepeat = false;
        // If we've already pressed this key, check that we want to fire
        // again, otherwise just add it to the keys_down list.
        if (Array.from(this._keys_down).includes(key)) {
            is_autorepeat = true;
            if (!combo.allows_key_repeat()) { return false; }
        }

        // Now we add this combo or replace it in _active_combos
        const result = this._add_to_active_combos(combo, key);

        // We reset the keyup_fired property because you should be
        // able to fire that again, if you've pressed the key down again
        combo.keyup_fired = false;

        // Now we fire the keydown event unless there is a larger exclusive potential combo
        let is_other_exclusive = false;
        if (combo.is_exclusive) {
            for (let potential_combo of Array.from(potential_combos)) {
                if (potential_combo.is_exclusive && (potential_combo.keys.length > combo.keys.length)) {
                    is_other_exclusive = true;
                    break;
                }
            }
        }

// *************************************************************************************************
// *************************************************************************************************
// *************************************************************************************************

		let excluded_down = false;
		if (combo.excludes.length > 0) {
			for (let i=0; i < this._keys_down.length; i++) {
				if (combo.excludes.includes(this._keys_down[i])) {
					excluded_down = true;
					// break;
				}
			}
		}

        if (!is_other_exclusive && !excluded_down) {
// ************************************************************************************************
// ************************************************************************************************
// ************************************************************************************************
            if (combo.is_counting && (typeof combo.on_keydown === "function")) {
                combo.count += 1;
            }

            // Only fire keydown if we added it
            if (result) {
                return this._fire("keydown", combo, e, is_autorepeat);
            }
        }
    }

    _key_up(key, e) {
        // Check if we're holding shift
        let active_combo;
        const unshifted_key = key;
        let shifted_key = _convert_to_shifted_key(key, e);
        if (shifted_key) { key = shifted_key; }
        shifted_key = _keycode_shifted_keys[unshifted_key];
        // We have to make sure the key matches to what we had in _keys_down
        if (e.shiftKey) {
            if (!shifted_key || !Array.from(this._keys_down).includes(shifted_key)) { key = unshifted_key; }
        } else {
            if (!unshifted_key || !Array.from(this._keys_down).includes(unshifted_key)) { key = shifted_key; }
        }

        // Check if we have a keyup firing
        const sequence_combo = this._get_sequence(key);
        if (sequence_combo) { this._fire("keyup", sequence_combo, e); }

        // Remove from the list
        if (!Array.from(this._keys_down).includes(key)) { return false; }
        for (let i = 0, end = this._keys_down.length, asc = 0 <= end; asc ? i < end : i > end; asc ? i++ : i--) {
            if ([key, shifted_key, unshifted_key].includes(this._keys_down[i])) {
                this._keys_down.splice(i, 1);
                break;
            }
        }

        // Store this for later cleanup
        const active_combos_length = this._active_combos.length;

        // When releasing we should only check if we
        // match from _active_combos so that we don't
        // accidentally fire for a combo that was a
        // smaller part of the one we actually wanted.
        const combos = [];
        for (active_combo of Array.from(this._active_combos)) {
            if (Array.from(active_combo.keys).includes(key)) {
                combos.push(active_combo);
            }
        }
        for (let combo of Array.from(combos)) {
            this._handle_combo_up(combo, e, key);
        }

        // We also need to check other combos that might still be in active_combos
        // and needs to be removed from it.
        if (active_combos_length > 1) {
            for (active_combo of Array.from(this._active_combos)) {
                if ((active_combo === undefined) || Array.from(combos).includes(active_combo)) { continue; }
                if (!this._keys_remain(active_combo)) {
                    this._remove_from_active_combos(active_combo);
                }
            }
        }
    }

    _handle_combo_up(combo, e, key) {
        this._prevent_default(e, (combo && combo.prevent_default));

        // Check if any keys from this combo are still being held.
        const keys_remaining = this._keys_remain(combo);

        // Any unactivated combos will fire
        if (!combo.keyup_fired) {
            // And we should not fire it if it is a solitary combo and something else is pressed
            const keys_down = this._keys_down.slice();
            keys_down.push(key);
            if (!combo.is_solitary || _compare_arrays(keys_down, combo.keys)) {
                this._fire("keyup", combo, e);
                // Dont' add to the count unless we only have a keyup callback
                if (combo.is_counting && (typeof combo.on_keyup === "function") && (typeof combo.on_keydown !== "function")) {
                    combo.count += 1;
                }
            }
        }

        // If this was the last key released of the combo, clean up.
        if (!keys_remaining) {
            this._fire("release", combo, e);
            this._remove_from_active_combos(combo);
        }
    }

    // Public Registration Methods

    simple_combo(keys, callback) {
        // Shortcut for simple combos.
        return this.register_combo({
            keys,
            on_keydown      : callback
        });
    }

    counting_combo(keys, count_callback) {
        // Shortcut for counting combos
        return this.register_combo({
            keys,
            is_counting     : true,
            is_unordered    : false,
            on_keydown      : count_callback
        });
    }

    sequence_combo(keys, callback) {
        return this.register_combo({
            keys,
            on_keydown      : callback,
            is_sequence     : true,
            is_exclusive    : true
        });
    }

    register_combo(combo_dictionary) {
        // Allow space dilineated strings instead of arrays
        if (typeof combo_dictionary["keys"] === "string") {
            combo_dictionary["keys"] = combo_dictionary["keys"].split(" ");
        }
        if (typeof combo_dictionary["excludes"] === "string") {
            combo_dictionary["excludes"] = combo_dictionary["excludes"].split(" ");
        }
        // console.log("excludes", combo_dictionary["excludes"])

        for (let property of Object.keys(this._defaults || {})) {
            const value = this._defaults[property];
            if (combo_dictionary[property] === undefined) {
                combo_dictionary[property] = value;
            }
        }
        const combo = new Combo(combo_dictionary);

        if (_validate_combo(combo)) {
            this._registered_combos.push(combo);
            return combo;
        }
    }

    register_many(combo_array) {
        // Will return an array of the combos actually registered
        return Array.from(combo_array).map((combo) => this.register_combo(combo));
    }

    unregister_combo(keys_or_combo) {
        if (!keys_or_combo) { return false; }

        const unregister_combo = combo => {
            return (() => {
                const result = [];
                for (let i = 0, end = this._registered_combos.length, asc = 0 <= end; asc ? i < end : i > end; asc ? i++ : i--) {
                    if (combo === this._registered_combos[i]) {
                        this._registered_combos.splice(i, 1);
                        break;
                    } else {
                        result.push(undefined);
                    }
                }
                return result;
            })();
        };

        if (keys_or_combo instanceof Combo) {
            return unregister_combo(keys_or_combo);
        } else {
            if (typeof keys_or_combo === "string") {
                keys_or_combo = keys_or_combo.split(" ");
                for (let i = 0, end = keys_or_combo.length, asc = 0 <= end; asc ? i < end : i > end; asc ? i++ : i--) {
                    if (keys_or_combo[i] === "meta") {
                        keys_or_combo[i] = _metakey;
                    }
                }
            }
            return (() => {
                const result = [];
                for (let combo of Array.from(this._registered_combos)) {
                    if (combo == null) { continue; }
                    if ((combo.is_unordered && _compare_arrays(keys_or_combo, combo.keys)) || (!combo.is_unordered && _compare_arrays_sorted(keys_or_combo, combo.keys))) {
                        result.push(unregister_combo(combo));
                    } else {
                        result.push(undefined);
                    }
                }
                return result;
            })();
        }
    }

    unregister_many(combo_array) {
        return Array.from(combo_array).map((combo) =>
            this.unregister_combo(combo));
    }

    // Other public methods

    get_registered_combos() {
        return this._registered_combos;
    }

    reset() {
        return this._registered_combos = [];
    }

    listen() {
        return this._prevent_capture = false;
    }

    stop_listening() {
        return this._prevent_capture = true;
    }

    get_meta_key() {
        // Helpful for debugging purposes
        return _metakey;
    }
};

//#################
// Helper Functions
//#################

const _decide_meta_key = function() {
    // If the useragent reports Mac OS X, assume cmd is metakey
    if (navigator.userAgent.indexOf("Mac OS X") !== -1) {
        _metakey = "cmd";
    }
};

const _change_keycodes_by_browser = function() {
    if (navigator.userAgent.indexOf("Opera") !== -1) {
        // Opera does weird stuff with command and control keys, let's fix that.
        // Note: Opera cannot override meta + s browser default of save page.
        // Note: Opera does some really strange stuff when cmd+alt+shift
        // are held and a non-modifier key is pressed.
        _keycode_dictionary["17"] = "cmd";
    }
};

var _convert_key_to_readable = k => _keycode_dictionary[k];

var _filter_array = function(array, callback) {
	if (array.filter) {
		return array.filter(callback);
	} else {
	// For browsers without Array.prototype.filter like IE<9:
		return (() => {
			const result = [];
			for (let element of Array.from(array)) {
				if (callback(element)) {
					result.push(element);
				}
			}
			return result;
		})();
	}
};

var _compare_arrays = function(a1, a2) {
    // This will ignore the ordering of the arrays
    // and simply check if they have the same contents.
    if (a1.length !== a2.length) { return false; }
    for (let item of Array.from(a1)) {
        if (Array.from(a2).includes(item)) { continue; }
        return false;
    }
    return true;
};

var _compare_arrays_sorted = function(a1, a2) {
    if (a1.length !== a2.length) { return false; }
    for (let i = 0, end = a1.length, asc = 0 <= end; asc ? i < end : i > end; asc ? i++ : i--) {
        if (a1[i] !== a2[i]) { return false; }
    }
    return true;
};

var _is_array_in_array = function(a1, a2) {
    // Returns true only if all of the contents of
    // a1 are included in a2
    for (let item of Array.from(a1)) {
        if (!Array.from(a2).includes(item)) { return false; }
    }
    return true;
};

const _index_of_in_array = Array.prototype.indexOf || function(a, item) {
    for (let i = 0, end = a.length, asc = 0 <= end; asc ? i <= end : i >= end; asc ? i++ : i--) {
        if (a[i] === item) { return i; }
    }
    return -1;
};

var _is_array_in_array_sorted = function(a1, a2) {
    // Return true only if all of the contents of
    // a1 are include in a2 and they appear in the
    // same order in both.
    let prev = 0;
    for (let item of Array.from(a1)) {
        const index = _index_of_in_array.call(a2, item);
        if (index >= prev) {
            prev = index;
        } else {
            return false;
        }
    }
    return true;
};

var _log_error = function() {
    if (keypress.debug) { return console.log(...arguments); }
};

const _key_is_valid = function(key) {
    let _, valid_key;
    let valid = false;
    for (_ in _keycode_dictionary) {
        valid_key = _keycode_dictionary[_];
        if (key === valid_key) {
            valid = true;
            break;
        }
    }
    if (!valid) {
        for (_ in _keycode_shifted_keys) {
            valid_key = _keycode_shifted_keys[_];
            if (key === valid_key) {
                valid = true;
                break;
            }
        }
    }
    return valid;
};

var _validate_combo = function(combo) {
    let i, key;
    let asc, end;
    let validated = true;

    // Warn for lack of keys
    if (!combo.keys.length) {
        _log_error("You're trying to bind a combo with no keys:", combo);
    }

    // Convert "meta" to either "ctrl" or "cmd"
    // Don't explicity use the command key, it breaks
    // because it is the windows key in Windows, and
    // cannot be hijacked.
    for (i = 0, end = combo.keys.length, asc = 0 <= end; asc ? i < end : i > end; asc ? i++ : i--) {
        key = combo.keys[i];
        // Check the name and replace if needed
        const alt_name = _keycode_alternate_names[key];
        if (alt_name) { key = (combo.keys[i] = alt_name); }
        if (key === "meta") {
            combo.keys.splice(i, 1, _metakey);
        }
        if (key === "cmd") {
            _log_error("Warning: use the \"meta\" key rather than \"cmd\" for Windows compatibility");
        }
    }

    // Check that all keys in the combo are valid
    for (key of Array.from(combo.keys)) {
        if (!_key_is_valid(key)) {
            _log_error(`Do not recognize the key \"${key}\"`);
            validated = false;
        }
    }

    // We can only allow a single non-modifier key
    // in combos that include the command key (this
    // includes 'meta') because of the keyup bug.
    if (Array.from(combo.keys).includes("meta") || Array.from(combo.keys).includes("cmd")) {
        const non_modifier_keys = combo.keys.slice();
        for (let mod_key of Array.from(_modifier_keys)) {
            if ((i = _index_of_in_array.call(non_modifier_keys, mod_key)) > -1) {
                non_modifier_keys.splice(i, 1);
            }
        }
        if (non_modifier_keys.length > 1) {
            _log_error("META and CMD key combos cannot have more than 1 non-modifier keys", combo, non_modifier_keys);
            validated = false;
        }
    }

    // Tell the user if they are trying to use any
    // combo properties that don't actually exist,
    // but allow the combo
    for (let property in combo) {
        const value = combo[property];
        if (_factory_defaults[property] === "undefined") {
            _log_error(`The property ${property} is not a valid combo property. Your combo has still been registered.`);
        }
    }

    return validated;
};

var _convert_to_shifted_key = function(key, e) {
    if (!e.shiftKey) { return false; }
    const k = _keycode_shifted_keys[key];
    if (k != null) { return k; }
    return false;
};

//#########################
// Key Mapping Dictionaries
//#########################

var _modifier_event_mapping = {
    "cmd"   : "metaKey",
    "ctrl"  : "ctrlKey",
    "shift" : "shiftKey",
    "alt"   : "altKey"
};

var _keycode_alternate_names = {
    "escape"        : "esc",
    "control"       : "ctrl",
    "command"       : "cmd",
    "break"         : "pause",
    "windows"       : "cmd",
    "option"        : "alt",
    "caps_lock"     : "caps",
    "apostrophe"    : "\'",
    "semicolon"     : ";",
    "tilde"         : "~",
    "accent"        : "`",
    "scroll_lock"   : "scroll",
    "num_lock"      : "num"
};

var _keycode_shifted_keys = {
    "/"     : "?",
    "."     : ">",
    ","     : "<",
    "\'"    : "\"",
    ";"     : ":",
    "["     : "{",
    "]"     : "}",
    "\\"    : "|",
    "`"     : "~",
    "="     : "+",
    "-"     : "_",
    "1"     : "!",
    "2"     : "@",
    "3"     : "#",
    "4"     : "$",
    "5"     : "%",
    "6"     : "^",
    "7"     : "&",
    "8"     : "*",
    "9"     : "(",
    "0"     : ")"
};

var _keycode_dictionary = {
    0   : "\\",          // Firefox reports this keyCode when shift is held
    8   : "backspace",
    9   : "tab",
    12  : "num",
    13  : "enter",
    16  : "shift",
    17  : "ctrl",
    18  : "alt",
    19  : "pause",
    20  : "caps",
    27  : "esc",
    32  : "space",
    33  : "pageup",
    34  : "pagedown",
    35  : "end",
    36  : "home",
    37  : "left",
    38  : "up",
    39  : "right",
    40  : "down",
    44  : "print",
    45  : "insert",
    46  : "delete",
    48  : "0",
    49  : "1",
    50  : "2",
    51  : "3",
    52  : "4",
    53  : "5",
    54  : "6",
    55  : "7",
    56  : "8",
    57  : "9",
    65  : "a",
    66  : "b",
    67  : "c",
    68  : "d",
    69  : "e",
    70  : "f",
    71  : "g",
    72  : "h",
    73  : "i",
    74  : "j",
    75  : "k",
    76  : "l",
    77  : "m",
    78  : "n",
    79  : "o",
    80  : "p",
    81  : "q",
    82  : "r",
    83  : "s",
    84  : "t",
    85  : "u",
    86  : "v",
    87  : "w",
    88  : "x",
    89  : "y",
    90  : "z",
    91  : "cmd",
    92  : "cmd",
    93  : "cmd",
    96  : "num_0",
    97  : "num_1",
    98  : "num_2",
    99  : "num_3",
    100 : "num_4",
    101 : "num_5",
    102 : "num_6",
    103 : "num_7",
    104 : "num_8",
    105 : "num_9",
    106 : "num_multiply",
    107 : "num_add",
    108 : "num_enter",
    109 : "num_subtract",
    110 : "num_decimal",
    111 : "num_divide",
    112 : "f1",
    113 : "f2",
    114 : "f3",
    115 : "f4",
    116 : "f5",
    117 : "f6",
    118 : "f7",
    119 : "f8",
    120 : "f9",
    121 : "f10",
    122 : "f11",
    123 : "f12",
    124 : "print",
    144 : "num",
    145 : "scroll",
    186 : ";",
    187 : "=",
    188 : ",",
    189 : "-",
    190 : ".",
    191 : "/",
    192 : "`",
    219 : "[",
    220 : "\\",
    221 : "]",
    222 : "\'",
    223 : "`",
    224 : "cmd",
    225 : "alt",
    // Opera weirdness
    57392   : "ctrl",
    63289   : "num",
    // Firefox weirdness
    59 : ";",
    61 : "=",
    173 : "-"
};

// For testing only:
keypress._keycode_dictionary = _keycode_dictionary;
keypress._is_array_in_array_sorted = _is_array_in_array_sorted;

//###########
// Initialize
//###########

_decide_meta_key();
_change_keycodes_by_browser();

// Anonymous Module Definition
if ((typeof define === "function") && define.amd) {
    define([], () => keypress);
} else if (typeof exports !== 'undefined' && exports !== null) {
    exports.keypress = keypress;
} else {
    window.keypress = keypress;
}




/* NOTES ***************************************************************

Need to convert 'excludes' string or arr (in constructor?)
	may need to convert case
	and/or check against the accepted key-references used internally in general


Build this in _handle_combo_up too?

*/


