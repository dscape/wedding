var environment = require('./env')
  , root        = require('./controllers/root')
  , server      = exports
  ;

server.run = function run() {
  environment.initialize(function initialize(app) {
    environment.start(app, function () {
      app.get("/", function () {
        res.writeHead(301, {'Location': '/en'});
        res.end();
      });
      app.get("/:lang", root.index);
    });
  });
};

if(require.main === module) {
  server.run();
}