var pubSub = {};

(function(myObject) {

  // Storage for eventTypes that can be broadcast
  // or listened to
  var eventTypes = {};

  // A topic identifier
  var subUid = -1;

  // Publish or broadcast events of interest with a specific topic name and arguments such as the data to pass along
  myObject.publish = function( eventName, args ) {

    if ( !eventTypes[eventName] ) {
      return false;
    }

    var subscribers = eventTypes[eventName],
      len = subscribers ? subscribers.length : 0;

    while (len--) {
      subscribers[len].func(args);
    }

    return this;
  };

  // Subscribe to events of interest with a specific topic name and a
  // callback function, to be executed when the topic/event is observed
  myObject.subscribe = function( topic, func ) {

    if (!eventTypes[topic]) {
      eventTypes[topic] = [];
    }

    var token = ( ++subUid ).toString();
    eventTypes[topic].push({
      token: token,
      func: func
    });
    return token;
  };

  // Unsubscribe from a specific topic, based on a tokenized reference to the subscription
  myObject.unsubscribe = function( token ) {
    for ( var m in eventTypes ) {
      if ( eventTypes[m] ) {
        for ( var i = 0, j = eventTypes[m].length; i < j; i++ ) {
          if ( eventTypes[m][i].token === token ) {
            eventTypes[m].splice( i, 1 );
            return token;
          }
        }
      }
    }
    return this;
  };
})( pubSub )
