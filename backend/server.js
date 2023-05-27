const express = require("express");
const routes = require("./routes");
const cors = require('cors')
const app = express();
const port = 3001;

const mysql = require("mysql");


app.use(cors())
app.use(express.json())
app.use(routes);

// app.get('/te', (req, res) => res.send('Hello w!'))




app.listen(port, () => {
  console.log(`Acessar http://localhost:${port}`);
  console.log("Servidor executando na porta 3001");
});
