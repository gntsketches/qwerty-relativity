# Qwerty Relativity

QWERTY Relativity is an experimental instrument which changes pitch by interval 
rather than fixed note placement. It is available online here:
[relativity.toneflow.io](https://relativity.toneflow.io)

Pitches are controlled by keys of a computer (qwerty) keyboard. 
There are two synthesizers, and a "split keyboard" layout 
allows each hand to control a different synth. 
When the app first loads up, the layout is as follow:

### Left-Hand

| Key | Interval       | Key | Interval       | Key | Interval       | Key | Interval      |
|-----|----------------|-----|----------------|-----|----------------|-----|---------------|
| 2   | -tritone      | 3   | -perfect 5th  | 4   | +perfect 4th  | 5   | +tritone     |
| q   | -major 3rd    | w   | -minor 3rd    | e   | +minor 3rd    | r   | +major 3rd   |
| a   | -whole-step   | s   | -half-step    | d   | +half-step    | f   | +whole-step  |
| z   | -octave       | x   | -perfect 5th  | c   | +perfect 5th  | v   | +octave      |

### Left-Hand Combos
in combination with "t" or the tab button:  

| Key | Interval      | Key | Interval      | Key | Interval      | Key | Interval      |
|-----|---------------|-----|---------------|-----|---------------|-----|---------------|
| q   | -major 6th   | w   | -minor 6th   | e   | +minor 6th   | r   | +major 6th   |

in combination with "g" or the tab button:  

| Key | Interval      | Key | Interval      | Key | Interval      | Key | Interval      |
|-----|---------------|-----|---------------|-----|---------------|-----|---------------|
| a   | -major 7th   | s   | -minor 7th   | d   | +minor 7th   | f   | +major 7th   |

### Left-Hand current note
The "b" key, or the spacebar, plays the current note.


### Right-Hand

| Key | Interval       | Key | Interval       | Key | Interval       | Key | Interval      |
|-----|----------------|-----|----------------|-----|----------------|-----|---------------|
| 8   | -tritone      | 9   | -perfect 5th  | 0   | +perfect 4th  | -   | +tritone     |
| u   | -major 3rd    | i   | -minor 3rd    | o   | +minor 3rd    | p   | +major 3rd   |
| j   | -whole-step   | k   | -half-step    | l   | +half-step    | ;   | +whole-step  |
| m   | -octave       | ,   | -perfect 5th  | .   | +perfect 5th  | /   | +octave      |

### Right-Hand Combos
in combination with "y" or "["

| Key | Interval      | Key | Interval      | Key | Interval      | Key | Interval      |
|-----|---------------|-----|---------------|-----|---------------|-----|---------------|
| u   | -major 6th   | i   | -minor 6th   | o   | +minor 6th   | p   | +major 6th   |

in combination with "h" or "'"

| Key | Interval      | Key | Interval      | Key | Interval      | Key | Interval      |
|-----|---------------|-----|---------------|-----|---------------|-----|---------------|
| j   | -major 7th   | k   | -minor 7th   | l   | +minor 7th   | ;   | +major 7th   |

### Right-hand current note
The "n" key plays the current note.

## Quiet travel
Using the "shift" key in combination with any of the above 
will change the current note without changing the sound.

## Play Modes
Each synth has three different possible "play modes"
- Pluck: The node plays and fades as a harp string would
- Press: The node sounds until the key is released
- Hold: The node sounds continuously even when released. Press 

The "backtick" key (`) changes the "play mode" for whichever synth is assigned to the left hand
The backspace/delete key changes the "play mode" for whichever synth is assigned to the right hand

## Settings
It is also possible to change the layout, so the spacebar and instruments can be swapped,
or one hand can control pitch which another modulates parameters
(vibrato or portamento "note glide"):

| Combo    | Effect 
|----------|----------------
| ctrl-spacebar| switch which hand the spacebar applies to      |
| ctrl-z       | switch which hand the spacebar applies to      |
| ctrl-z       | switch the instruments between hands    |
| ctrl-x       | switch the synth type for synth1   |
| ctrl-c       | switch the synth type for synth2   |
| ctrl-a       | toggle left-hand between synth1 and synth2   |
| ctrl-s       | toggle left-hand between synth1-params1 and synth2-params2   |
| ctrl-;       | toggle right-hand between synth1-params1 and synth2-params2   |
| ctrl-'       | toggle right-hand between synth1 and synth2   |





## Params

When synth parameters are chosen for a given hand,
you update either vibrato or portamento (note-glide) for the given synth.
(Unlike pitches, parameters correspond to absolute rather than relative values.)

### Left-Hand

| Key    | Effect
|----------|----------------
|  c  |  Adjust vibrato settings for selected left-hand synth      |
|  v  |  Adjust portamento (glide) settings for left-hand synth  |

| Key | Vibrato | Key | Vibrato | Key | Vibrato | Key | Vibrato |
|-----|---------|-----|---------|-----|---------|-----|---------|
| 2   | 15      | 3   | 20 | 4   | 30 | 5   | 40     |
| q   | 5    | w   | 7    | e   | 9    | r   | 11   |
| a   | 0   | s   | 1    | d   | 2    | f   | 3  |

| Key | Glide | Key | Glide | Key | Glide | Key | Glide |
|-----|-------|-----|-------|-----|-------|-----|-------|
| 2   | 1.28  | 3   | 2.5 | 4   | 5 | 5   | 10     |
| q   | 0.08    | w   | 0.16    | e   | 0.32    | r   | 0.64   |
| a   | 0   | s   | 0.01    | d   | 0.02    | f   | 0.04  |

### Right-Hand

| Key    | Effect
|----------|----------------
|  m  |  Adjust vibrato settings for selected left-hand synth      |
|  ,  |  Adjust portamento (glide) settings for left-hand synth  |

| Key | Vibrato | Key | Vibrato | Key | Vibrato | Key | Vibrato |
|-----|---------|-----|---------|-----|---------|-----|---------|
| 8   | 15      | 9   | 20 | 0   | 30 | -   | 40     |
| u   | 5    | i   | 7    | o   | 9    | p   | 11   |
| j   | 0   | k   | 1    | l   | 2    | ;   | 3  |

| Key | Glide | Key | Glide | Key | Glide | Key | Glide |
|-----|-------|-----|-------|-----|-------|-----|-------|
| 8   | 1.28  | 9   | 2.5 | 0   | 5 | -   | 10     |
| u   | 0.08    | i   | 0.16    | o   | 0.32    | p   | 0.64   |
| j   | 0   | k   | 0.01    | k   | 0.02    | l   | 0.04  |
