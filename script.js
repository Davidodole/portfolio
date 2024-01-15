const express = require("express");
const ejs = require("ejs");
const pg = require("pg");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
require("dotenv").config();


const app = express();
const PORT = process.env.port || 3000;

//MiddleWalare
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static("Public"));
app.set("view engine", 'ejs');


// Handdling the the post the comes in form the the post request 
app.post("/api/auth/login",(req, res)=>{
    let password = req.body.password;
    const saltRound = 10;
    bcrypt.hash(password, saltRound, function(err, result) {
        console.log(result);
    });
    res.redirect("login");
});


// Setting the Router Path

app.get("/login", (req, res)=>{
    res.render("login");
});

app.get("/", async (req, res)=>{
    res.render("index");
    
});


// port where the server listen too
app.listen(PORT, ()=> console.log("http://127.0.0.1:"+ PORT));