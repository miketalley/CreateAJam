define(['plugins/router', 'modal'], function (router) {

  function Shell(){
    var self = this;

    self.router = router;

    self.activate = function(){
      self.router.map([
        { route: '', title:'Home', moduleId: 'sections/home', nav: true },
        { route:'instruments*splat', title:'Instruments', moduleId:'sections/instruments/index', nav:true },
        { route:'jamSessions*splat', title:'Jam Sessions', moduleId:'sections/jamSessions/index', nav:true },
        { route:'musicians*splat', title:'Musicians', moduleId:'sections/musicians/index', nav:true }

      ]).buildNavigationModel();

      return self.router.activate();
    };

    self.login = function(){
      console.log("Login");
      $.get("http://jamsync.herokuapp.com/users/sign_in", function(html) {
        $(html).appendTo('#login-modal');
        $('#login-modal').modal();
      });
    };

    self.signUp = function(){
      console.log("Sign Up");
      $.get("http://jamsync.herokuapp.com/users/sign_up", function(html) {
        $(html).closest("form").attr("data-bind", "submit: function(){ alert('Success!')}").appendTo('#signUp-modal');
        $('#signUp-modal').modal();
      });
    };

    self.signedIn = false;

  }

  return Shell;

});
