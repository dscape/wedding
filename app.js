var environment = require('./env')
  , root        = require('./controllers/root')
  , server      = exports
  ;

server.run = function run() {
  environment.initialize(function initialize(app) {
    environment.start(app, function () {
      app.get("/", function () {
        this.res.writeHead(301, {'Location': '/en'});
        this.res.end();
      });
      app.get("/:lang", root.index);
    });
  });
};

if(require.main === module) {
  server.run();
}