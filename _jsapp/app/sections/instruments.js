define(['jquery', 'knockout', 'knockout.punches'], function ($, ko) {

  function Instruments(){
    var self = this;

    self.allInstruments = ko.observable();

    self.test = "Hello!";

    self.activate = function(){
      $.get('http://jamsync.herokuapp.com/instruments.json')
        .done(function(resp){
          debugger;
          if(resp && resp.success){
            self.allInstruments(resp);
          }
        });
    };

    self.createNewInstrument = function(){

    };



  }

  return Instruments;
});
