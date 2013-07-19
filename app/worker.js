'use strict';
importScripts('../components/jquery/jquery.js');

onmessage = function(event) {
    var msg = "Testing " + event.data;
    postMessage(msg);
}
