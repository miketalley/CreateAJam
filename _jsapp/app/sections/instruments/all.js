define(['jquery', 'knockout', 'datatables', 'knockout.punches', 'dropzone', 'datatables.foundation'], function ($, ko) {

  function AllInstruments(){
    var self = this;

    self.allInstruments = ko.observable();

    self.activate = function(){
      // initializeInstrumentsDataTable();
      $.get('http://jamsync.herokuapp.com/instruments.json')
        .done(function(resp){
          if(resp && resp.success){
            self.allInstruments(resp);
          }
          initializeInstrumentsDataTable();
        });
    };

    self.createNewInstrument = function(){

    };

    function initializeInstrumentsDataTable(){
      console.log('DT init');
      $('#instrumentsTable').dataTable({
        ajax: {
          url: 'http://jamsync.herokuapp.com/instruments.json',
          dataSrc: ''
        },
        columns: [
          { title: 'Name', data: null},
          { title: 'Owner', data: null},
          { title: 'Type', data: null},
          { title: 'Class', data: null},
          { title: 'Year Manufactured', data: null},
          { title: 'Year Acquired', data: null},
          { title: 'Make', data: null},
          { title: 'Model', data: null},
          { title: 'Description', data: null}
        ],
        dom: 'lftipr'
      });
    }

  }

  return AllInstruments;
});
