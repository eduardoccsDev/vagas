var data = require("./fakeData");

module.exports = function(req, res) {
  var name = req.body.name;
  var job = req.body.job; // Corrigi a declaração da variável jov para job

  var newUser = {
    name: name,
    job: job
  };

  data.push(newUser);

  res.status(201).json(newUser);   // Utilizei o método json em vez de send para retornar o objeto JSON do novo usuário adicionado.
};