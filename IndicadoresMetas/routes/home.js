module.exports = function(app) {
	
  var home = app.controllers.home;

  app.get('/', home.index);
  app.post('/entrar', home.login);
  app.get('/sair', home.logout);
};

module.exports = function(app) {
	var HomeController = {
		index: function(req, res) {
			res.render('home/index');
		},
		login: function(rq, res) {
			var email = req.body.usuario.email
				, nome = req.body.usuario.nome;
			if(email && nome) {
				var usuario = req.body.usuario;
				usuario['contatos'] = [];
				req.session.usuario = usuario;
				res.redirect('/contatos');
			} else {
				res.redirect('/');
			}
		},
		logout: function(req, res) {
			req.session.destroy();
			res.redirect('/');
		}
	};
	return HomeController;
};

