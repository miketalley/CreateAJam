define(['jquery', 'knockout'], function($, ko){

  function JamSessions(){
    var self = this;

    self.allJamSessions = ko.observable();

    self.activate = function(){
      $.get('http://jamsync.herokuapp.com/jam_sessions.json')
        .done(function(resp){
          if(resp && resp.success){
            self.allJamSessions(resp);
          }
        });
    };
  }

  return JamSessions;

});
