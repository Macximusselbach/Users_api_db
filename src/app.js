/*
buscar todos usuários
GET /api/users

criar usuário
POST /api/users

buscar um usuário
GET /api/users/:id

PUT /api/users/:id
{}

DELETE /api/users/:id
*/
const express = require("express");
const HttpStatus = require("http-status");
const UsersRepository = require("./users/usersRepository");
const usersRepository = new UsersRepository();
const app = express();

app.use(express.json());

app.get("/api/users", (req, res) => {
  usersRepository.findAll()
    .then(users => {
      res.json({ users: users });
    });
});

app.post("/api/users", (req, res) => {
  const user = req.body;

  usersRepository.create(user)
    .then(() => {
      res.sendStatus(HttpStatus.CREATED);
    });
});

module.exports = app;
