// It may happen that as we use callback function a lot as the app grows in size we will end up having
// way too many callback functions also known as CallBack Function HELL to not fall into this HELL use PROMISES

const express = require('express');
const { readFile } = require("fs").promises;

const app = express();

app.get('/',async function(request,response) {

    
    response.send(await readFile("./home.html", "utf-8"));

})

app.listen(process.env.PORT || 3000,()=>{
    console.log("USING AWAIT TO AVOID CALLBACK HELL");
})
