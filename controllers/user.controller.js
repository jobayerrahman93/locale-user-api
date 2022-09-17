const { writeFile } = require('fs');
const path = require('path');
const userDb= require('../user.json');


const getAllUser=(req,res)=>{
    res.sendFile(path.join(__dirname, "../user.json"));
}

const getRandomUser=(req,res)=>{
    const id= parseInt(req.params.id);
    const {users}=userDb;
    const randomUser = users.filter(user=>user.Id===id);
    res.send(randomUser);
}


const saveUser=(req,res)=>{
    const {users}=userDb;
    const info = req.body;
    const newUser = {users:[...users,info]};
    writeFile(path.join(__dirname,"../user.json") ,JSON.stringify(newUser),(err)=>{
            res.send(err)
    })
    res.send(newUser)
}



module.exports={
    getAllUser,
    getRandomUser,
    saveUser
}