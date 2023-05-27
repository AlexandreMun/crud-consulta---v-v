const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "clinica",
});

exports.add = (req, res) => {
  const { title } = req.body;
  const { patient } = req.body;
  const { doctor } = req.body;
  const { date } = req.body;

  let sql =
    "INSERT INTO consulta (title, patient, doctor, date) VALUES (?, ?, ?, ?)";

  db.query(sql, [title, patient, doctor, date], (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
};

exports.read = (req, res) => {
  let sql = "SELECT * FROM consulta";

  db.query(sql, (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
};

exports.edit = (req, res) => {
  const { idconsulta } = req.body;
  const { title } = req.body;
  const { patient } = req.body;
  const { doctor } = req.body;
  const { date } = req.body;

  let sql =
    "UPDATE consulta SET title = ?, patient = ?, doctor = ? WHERE idconsulta = ?";

  db.query(sql, [title, patient, doctor, date, idconsulta], (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
};

exports.delete = (req, res) => {
  const { idconsulta } = req.params;

  let sql = "DELETE from consulta WHERE idconsulta = ?";

  db.query(sql, [idconsulta], (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
};
