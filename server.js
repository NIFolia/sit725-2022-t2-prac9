require("dotenv").config();
var express = require("express");
var app = express();
var cors = require("cors");
let Routes = require("./routes");
require("./dbConnect");

app.use(express.static(__dirname + "/public"));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api", Routes);

var port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("App listening to: " + port);
});
