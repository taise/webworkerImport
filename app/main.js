// to depend on a bower installed component:
// define(['component/componentName/file'])

define(["jquery"], function($) {
    $('body').append('<br />');
    $('body').append('<input type="button" id="worker" value="run" />');

    $('#worker').click(function() {
        var worker = new Worker("/app/worker.js");
        worker.postMessage('requirejs test');
        worker.onmessage = function(event) {
            console.log(event.data);
        };
    });
});
