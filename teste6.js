const data = require("./fakeData");

const permissionMiddleware = (req, res, next) => {
  const userId = req.query.userId; 

  // Verificar se o usuário existe
  const user = data.find((user) => user.id === userId);
  if (!user) {
    return res.status(404).send("Usuário não encontrado!");
  }

  // Verificar se o usuário possui a permissão necessária
  const hasPermission = user.permissions.includes(req.permission);
  if (!hasPermission) {
    return res.status(403).send("Acesso não autorizado!");
  }

  next();
};

module.exports = permissionMiddleware;