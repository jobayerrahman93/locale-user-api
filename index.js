const express = require('express');
const router = require('./routes/v1/user.route');
const app = express();
const port = process.env.port || 5000;
app.use(express.json());

app.use('/user',router);


app.all('*',(req,res)=>{
    console.log("Sorry! no route found");
    res.end();
})
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})