var data = require("./fakeData");

// Array para armazenar a contagem de leituras de cada usuário
var userReadCount = {};

const getUser = (req, res, next) => {
  const name = req.query.name;
  const user = data.find((user) => user.name === name);

  if (user) {
    // Incrementar a contagem de leituras do usuário
    if (userReadCount[name]) {
      userReadCount[name]++;
    } else {
      userReadCount[name] = 1;
    }

    res.send(user);
  } else {
    res.status(404).send('Usuário não encontrado!');
  }
};

const getUserReadCount = (req, res, next) => {
  const name = req.query.name;
  const count = userReadCount[name] || 0;

  res.send("Usuário " + name + " foi lido " + count + " vezes.");
};

module.exports = {
  getUser,
  getUserReadCount
};