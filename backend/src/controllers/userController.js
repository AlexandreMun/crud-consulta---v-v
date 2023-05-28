const bcrypt = require('bcrypt');
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "clinica",
});

module.exports = {
  async add(req, res) {
    const { login, password } = req.body;
    const saltRounds = 10;
    const command = 'INSERT INTO user (login, password) VALUES(?, ?)';

    const passwordHash = await bcrypt.hash(password, saltRounds);

    db.query(command, [login, passwordHash], (err, result) => {
      if (err)
        console.log(err);
      else
        res.status(201).send();
    });
  },

  login(req, res) {
    const { login, password } = req.body;
    const command = 'SELECT password FROM user WHERE login = ?';

    db.query(command, [login], async (err, result) => {
      if (result.length === 0) {
        res.status(400).send();
        return;
      }

      const isMatch = await bcrypt.compare(password, result[0].password);

      if (isMatch)
        res.status(200).send();
      else
        res.status(400).send();
    });
  }
};