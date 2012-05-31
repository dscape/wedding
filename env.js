var flatiron     = require('flatiron')
  , ecstatic     = require('ecstatic')
  , app          = flatiron.app
  , environment  = exports
  ;

environment.initialize = function initialize(callback) {
  app.use(flatiron.plugins.http, 
    { "before" : [ ecstatic(__dirname + '/public', {autoIndex: false}) ] });

  app.get       = app.router.get;
  app.put       = app.router.put;
  app.post      = app.router.post;
  app["delete"] = app.router["delete"];

  callback(app);
};

environment.start = function start(app, cb) {
  app.start(3001, function () {
    console.log({"paulaandnuno": "ok", "port": 3001});
    cb();
  });
};
