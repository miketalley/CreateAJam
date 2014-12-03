requirejs.config({
  paths: {
    'text': '../lib/require/text',
    'durandal':'../lib/durandal/js',
    'plugins' : '../lib/durandal/js/plugins',
    'transitions' : '../lib/durandal/js/transitions',
    'knockout': '../lib/knockout/knockout-3.2.0',
    'jquery': '../lib/jquery/jquery-2.1.1',
    'jquery.modal': '../lib/jquery-modal/jquery.modal.min'
    }
});

define(function (require) {
  var system = require('durandal/system'),
    app = require('durandal/app');

  system.debug(true);

  app.title = 'Global Jamspace';

  app.configurePlugins({
    router: true,
    dialog: true
  });

  app.start().then(function() {
    app.setRoot('shell');
  });
});
