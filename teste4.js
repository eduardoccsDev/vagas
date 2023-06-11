var data = require("./fakeData");
var permissionMiddleware = require("./teste6");

module.exports = function (req, res) {
  var id = req.query.id;
  var updatedUser = req.body;

  var userIndex = data.findIndex((user) => user.id === id);

  if (userIndex !== -1) {
    // Validar permissões antes de atualizar
    req.permission = "update";
    permissionMiddleware(req, res, function () {
      data[userIndex] = { ...data[userIndex], ...updatedUser };
      res.send(data[userIndex]);
    });
  } else {
    res.status(404).send("Usuário não localizado!");
  }
};