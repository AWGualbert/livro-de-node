var express = require('express')
, load = require('express-load')
, app = express()
;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// APAGAR: app.get('/', routes.index);
// APAGAR: app.get('/usuarios', routes.user.index);

load('models')
.then('controllers')
.then('routes')
.into(app);

app.listen(3000, function(){
    console.log("Indicadores e Metas online.");
});

module.exports = app;