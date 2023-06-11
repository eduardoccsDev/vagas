var data =  require("./fakeData");

const getUser = (req, res, next) => {
    const name = req.query.name;
    const user = data.find((user) => user.name === name);
  
    if (user) {
      res.send(user);
    } else {
      res.status(404).send('Usuário não encontrado!');
    }
  };

  const getUsers = (req, res, next) => {
    res.json(data);
  };

module.exports = {
    getUser,
    getUsers
};