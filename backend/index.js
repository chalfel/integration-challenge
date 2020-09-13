const express = require("express");
const cors = require("cors");
const app = express();

const users = [
  {
    name: "Caio",
    age: "21",
    email: "caiohalcsik@gmail.com",
    password: "123456",
  },
  {
    name: "Debora",
    age: "22",
    email: "deboranunesfelix@gmail.com",
    password: "123456",
  },
];

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  return res.json({ message: "Hello World" });
});
app.get("/users", (req, res) => {
  return res.json(users);
});
app.post("/session", (req, res) => {
  const { body } = req;
  const { email, password } = body;
  const userFound = users.find(
    (user) => user.email === email && user.password === password
  );
  if (!userFound) return res.status(401).json({ message: "User not Found" });
  return res.status(201).json({ message: "Logged In" });
});

app.listen(3333, () => console.log("Server is listening at Port 3333"));
