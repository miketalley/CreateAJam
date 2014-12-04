define(['jquery', 'knockout'], function ($, ko) {

  function Instruments(){
    var self = this;

    self.allInstruments = ko.observable();

    self.activate = function(){
      $.get('http://jamsync.herokuapp.com/instruments.json')
        .done(function(resp){
          debugger;
          if(resp && resp.success){
            self.allInstruments(resp);
          }
        });
    };



  }

  return Instruments;
});
