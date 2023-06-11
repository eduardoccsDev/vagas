var data = require("./fakeData");
var permissionMiddleware = require("./teste6");

module.exports = function (req, res) {
  var name = req.query.name;

  var index = data.findIndex((user) => user.name === name);

  if (index !== -1) {
    // Validar permissões antes de deletar
    req.permission = "delete";
    permissionMiddleware(req, res, function () {
      data.splice(index, 1);
      res.send("success");
    });
  } else {
    res.status(404).send("Usuário não encontrado!");
  }
};