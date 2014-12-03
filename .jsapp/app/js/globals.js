define([], function () {
  
  function Globals(){
    var self = this;

    self.APIRoot = "http://jamsync.herokuapp.com/";





    window.globals = self;
  }

  return Globals;

});