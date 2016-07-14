var app = require('express')();

var appInit = function(app){
  app.set('view engine', 'pug');
  app.set('views', './app/views');
  app.listen(3000);
  console.log('Now listening on port 3000');
};

var appRoutes = function(app){

    app.get('/', function(req, res){
      res.render('index');
    });

    app.get('/other', function(req, res){
      res.render('other');
    });
};

appInit(app);
appRoutes(app);
