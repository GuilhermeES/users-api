const express = require('express');

const app = express();
const router = require('./routes/router');

app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);

app.listen(4000);