const express = require("express");
const app = express();



app.use(express.static(__dirname + '/public/views'));
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html");
});



const port = process.env.PORT||8000;

app.listen(port);
console.log(`The app is running on http://localhost:${port}`);