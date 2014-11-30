define(['plugins/router', 'jquery.modal'], function (router) {

  function Shell(){
    var self = this;

    self.router = router;

    self.activate = function(){
      self.router.map([
        { route: '', title:'Home', moduleId: 'sections/home', nav: true },
        { route:'instruments', title:'Instruments', moduleId:'sections/instruments', nav:true },
        { route:'jamSessions', title:'Jam Sessions', moduleId:'sections/jamSessions', nav:true },
        { route:'musicians', title:'Musicians', moduleId:'sections/musicians', nav:true }

      ]).buildNavigationModel();

      return self.router.activate();
    };

    self.login = function(){
      console.log("Login");
    };

    self.signUp = function(){
      console.log("Sign Up");
    };

    self.signedIn = false;

  }

  return Shell;

});
