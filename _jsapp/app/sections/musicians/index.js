define(['plugins/router'], function (router) {

  function Musicians(){
    var self = this;

    self.router = router;

    self.activate = function(){
      self.router
        .createChildRouter()
        .makeRelative({ 
          moduleId: 'musicians',
          fromParent: true
        })
        .map([
          { route: '',        title:'Musicians',      moduleId: 'all',    nav: true,    hash: '#musicians' },
          { route: '/new',     title:'New Instrument',   moduleId:'new',     nav: true }

        ])
        .buildNavigationModel()
        .mapUnknownRoutes('#musicians');

      return self.router;
    };

  }

  return Musicians;

});
