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

app.get("/api/users/:userId", (req, res) => {
  const userId = req.params.userId;
  usersRepository.findById(userId)
    .then(user => {
       res.json(user);
    });
});

app.delete("/api/users/:userId", (req, res) => {
  const userId = req.params.userId;
  usersRepository.remove(userId)
    .then(() => {
      res.sendStatus(HttpStatus.OK);
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
