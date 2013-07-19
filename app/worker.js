'use strict';
importScripts('lib.js');

onmessage = function(event) {
    var msg = "Testing " + event.data;
    postMessage(msg);
}
