const express = require('express');
const cors = require('cors');
const app = express();

const dotenv = require("dotenv").config();
const routes = require("./routes/index");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//app.use("/uploads", express.static(__dirname + "/uploads"));

app.get("/", (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json({ ok: true });
});

routes(app);

const port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log(`Servidor iniciado`);
});

module.exports = app;