define(['jquery', 'knockout'], function($, ko){

  function NewUser(){
    var self = this;

    self.activate = function(){

    };

    self.submitSignUp = function(form){
      var user = {
        email: form[0].value,
        password: form[1].value,
        password_confirmation: form[2].value,
        nickname: form[3].value,
        first_name: form[4].value,
        last_name: form[5].value,
        city: form[6].value,
        state: form[7].value,
        zip: form[8].value
      };

      $.post('http://jamsync.herokuapp.com/users', user)
        .done(function(resp){

        });
    };

  }

  return NewUser;

});
