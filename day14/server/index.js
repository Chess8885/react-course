const express = require("express");
var cors = require("cors");
const app = express();
const port = 8081;

var corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
        res.send("Hello World!");
    }
)

app.get("/user", (req, res) => {
    res.send("Hello World!");
    }
)

app.listen(port, () => {
    console.log(`this app is listening at http://localhost:${port}`);
});