const express = require('express');
const userRouter = require('./routes/v1/user.route');
const app = express();
const port = process.env.port || 5000;
app.use(express.json());

app.use('/user',userRouter);

app.get('/',(req,res)=>{
    res.send('Yay ! server is running')
})

app.all('*',(req,res)=>{
    console.log("Sorry! no route found");
    res.end();
});




app.listen(port,()=>{
    console.log(`server is running on port ${port}`);

})