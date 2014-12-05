define(['plugins/router'], function (router) {

  function Instruments(){
    var self = this;

    self.router = router;

    self.activate = function(){
      self.router.
        .createChildRouter()
        .makeRelative({ 
          moduleId: 'instruments/index',
          fromParent: true
        })
        .map([
          { route: '', title:'Instruments', moduleId: 'all', nav: true },
          { route:'new', title:'New Instrument', moduleId:'new', nav:true }
        ]).buildNavigationModel();

      return self.router.activate();
    };

  }

  return Instruments;

});
