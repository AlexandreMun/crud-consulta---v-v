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
        res.send(result);
    });
  }
};