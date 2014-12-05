define(['plugins/router'], function (router) {

  function Sessions(){
    var self = this;

    self.router = router;

    self.activate = function(){
      self.router
        .createChildRouter()
        .makeRelative({ 
          moduleId: 'sessions',
          fromParent: true
        })
        .map([
          { route: '',        title:'Sessions',      moduleId: 'all',    nav: true,    hash: '#sessions' },
          { route: '/new',     title:'New Instrument',   moduleId:'new',     nav: true }

        ])
        .buildNavigationModel()
        .mapUnknownRoutes('#sessions');

      return self.router.activate();
    };

  }

  return Sessions;

});
