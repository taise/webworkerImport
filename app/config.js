require.config({
  // make components more sensible
  // expose jquery 
  paths: {
    "components": "../components",
    "jquery": "../components/jquery/jquery",
    "worker": "./worker"
  }
});

if (!window.requireTestMode) {
  require(['main', 'shareMain'], function(){ });
}
