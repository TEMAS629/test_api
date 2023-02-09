require("dotenv").config();
const express = require("express");
const path = require("path");
const http = require("http");
const { response } = require("express");
const { error } = require("console");
const routerCar = require("./routes/car.route");
const morgan = require("morgan");

// console.log((process.env.PORT));

const app = express();
const server = http.createServer(app);

const port = process.env.PORT || 3003;

app.use(morgan('dev'))
app.use(express.json());
// работа с форматом json
app.use(express.urlencoded({ extended: true }));
// что бы мы могли передавать параметры в строке

app.use(express.static("public"));
// подключаем статичные файлы

app.use((err, request, response, next) => {
  // midleware - промежуточный обработчик
  console.log(err);
  response.status(500).send("server crash");
  next();
});

app.use("/api/car", routerCar);

app.use("/",(req, res) => {
    res.status(200).json("Hello world! ваш сервер работает!")
});


server.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});

module.exports = app;
