// Dependencies
const express = require("express");
const path = require("path")

const port = 4321;
const app = express();


//Apis
app.use("/api", require("./api"));

// Angular routes
app.use(express.static( "./dist/userinterface"));

app.get("*", (req,res)=>{
    res.sendfile(path.join('./dist/userinterface/index.html'));
})

app.listen(port, ()=>console.log("working at http://localhost:"+port));