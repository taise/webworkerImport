// to depend on a bower installed component:
// define(['component/componentName/file'])

define(["jquery"], function($) {
    $('body').append('<br />');
    $('body').append('<input type="button" id="killWorker" value="worker kill" />');
    $('body').append('<input type="button" id="shareWorker" value="run share" />');

    var shareWorker = new Worker("/app/worker.js");

    $('#shareWorker').click(function() {
        shareWorker.postMessage('requirejs test');
        shareWorker.onmessage = function(event) {
            console.log(event.data + "by shareWorker");
        };
    });

    $('#killWorker').click(function() {
        console.log("Killing worker");
        shareWorker.terminate();
    });
});
