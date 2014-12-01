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
      $.get("http://jamsync.herokuapp.com/users/sign_in", function(html) {
        var modalHTML = $("<div>").addClass("login modal").append(html);
        $(modalHTML).appendTo('body').modal();
      });
    };

    self.signUp = function(){
      console.log("Sign Up");
      $.get("http://jamsync.herokuapp.com/users/sign_up", function(html) {
        var modalHTML = $("<div>").addClass("signUp modal").append(html);
        $(modalHTML).appendTo('body').modal();
      });
    };

    self.signedIn = false;

  }

  return Shell;

});
