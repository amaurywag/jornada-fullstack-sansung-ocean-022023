const express = require("express");
const app = express();

//O que vier no body da requisição, está em JSON
app.use(express.json());

// Endpoint / -> Hello World
app.get("/", function (req, res) {
  res.send("Hello World");
});

// Endpoint /oi -> Olá, mundo!
app.get("/oi", function (req, res) {
  res.send("Olá, mundo!");
});

//Lista de informações
const itens = ["Rick Sancges", "Morty Smith", "Summer Smith"];
//                0                 1                2

// CRUD -> Lista de informações

// Endpoint Readl All 
app.get("/item", function (req, res){
  const id = req.params.id;
  const item = itens[id - 1];
  res.send(item);
});

//Endpoint Read Single Get by ID 
app.get("/item/:id", function (req, res) {
  res.send("Read by ID");
});

//Endpoint Creat -> [POST] /item
app.post("item/", function (req, res){
  console.log(req.body);
  res.send("Create")
});


app.listen(3001);