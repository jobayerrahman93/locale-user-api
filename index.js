const express = require('express');
const router = require('./routes/v1/user.route');
const app = express();
const port = process.env.port || 5000;

app.use('/api/v1/user',router)


app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})