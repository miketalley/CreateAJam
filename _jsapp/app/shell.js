define(function (require) {
  var router = require('plugins/router');

  return {
    router: router,
    activate: function () {
      router.map([
        { route: '', title:'Home', moduleId: 'sections/home', nav: true },
        { route:'instruments', title:'Instruments', moduleId:'sections/instruments', nav:true },
        { route:'jam-sessions', title:'Jam Sessions', moduleId:'sections/jamSessions', nav:true },
        { route:'musicians', title:'Musicians', moduleId:'sections/musicians', nav:true }

      ]).buildNavigationModel();

      return router.activate();
    }
   };
});
