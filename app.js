var environment = require('./env')
  , server      = exports
  ;

server.run = function run() {
  environment.initialize(function initialize(app) {
    environment.start(app, function () {

    });
  });
};

if(require.main === module) {
  server.run();
}