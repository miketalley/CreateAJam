define(['plugins/router'], function (router) {

  function Shell(){
    var self = this;

    self.router = router;

    self.activate = function(){
      self.router.map([
        { route: '', title:'Home', moduleId: 'sections/home', nav: true },
        { route:'instruments', title:'Instruments', moduleId:'sections/instruments', nav:true },
        { route:'jam-sessions', title:'Jam Sessions', moduleId:'sections/jamSessions', nav:true },
        { route:'musicians', title:'Musicians', moduleId:'sections/musicians', nav:true }

      ]).buildNavigationModel();

      return self.router.activate();
    };

    self.login = function(){

    };

    self.signUp = function(){

    };

    self.signedIn = false;

  }

  return Shell;

});
