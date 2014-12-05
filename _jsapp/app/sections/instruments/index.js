define(['plugins/router'], function (router) {

  function Instruments(){
    var self = this;

    self.activate = function(){
      self.router = router
        .createChildRouter()
        .makeRelative({ 
          moduleId: 'sections/instruments',
          fromParent: true
        })
        .map([
          { route: '',        title:'Instruments',      moduleId: 'all',    nav: true, hash: '#instruments' },
          { route: 'new',     title:'New Instrument',   moduleId: 'new',     nav: true }

        ])
        .buildNavigationModel();

      return self.router;
    };

  }

  return Instruments;

});
