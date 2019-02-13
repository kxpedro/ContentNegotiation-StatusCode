module.exports = function(application){
	application.get('/', function(req, res){
		// Para forçar o erro 500 descomente a linha abaixo
		// res.render('StatusCode500');
		res.format({
			html: function(){
				res.send('Bem vindo a sua app NodeJS! </br> <a href="StatusCode404">Status Code 404</a>');
			},
			json: function(){
				var retorno = {
					body: 'Bem vindo a sua app NodeJS!'
				};
				res.json(retorno);
			}
		});
	});
	application.post('/', function(req, res){
		var dados = req.body;

		res.send(dados);

	});
}