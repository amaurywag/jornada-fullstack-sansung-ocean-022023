const express = require("express");
const { MongoClient } = require("mongodb");

const DB_URL = "";
const DB_NAME = "ocean-sansung-fullstack";

async function main() {

//Conexão com o banco de dados
console.log("Conectando com o banco de dados...");
const client = await MongoClient.connect(DB_URL);
const db = client.db(DB_NAME);
const collection = db.collection("itens");
console.log("Banco de dados conectado com sucesso!");

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
app.get("/item",async function (req, res){
  const documentos = collection.find().toArray();
  //const id = req.params.id;
  //const item = itens[id - 1];
  res.send(documentos);
});

//Endpoint Read Single Get by ID 
app.get("/item/:id", function (req, res) {
  res.send("Read by ID");
});

//Endpoint Creat -> [POST] /item
app.post("item/", function (req, res){
 // console.log(req.body);
  const item = req.body;
  itens.push(item.nome);
  res.send("Item criado com sucesso!")
});


app.listen(3000);

}

main();