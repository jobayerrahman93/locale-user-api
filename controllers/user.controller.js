const path = require('path');
const userDb= require('../user.json')
const getAllUser=(req,res)=>{
    res.sendFile(path.join(__dirname, "../user.json"));
}

const getRandomUser=(req,res)=>{
    const id= parseInt(req.params.id);
    const {users}=userDb;
    const randomUser = users.filter(user=>user.Id===id);
    res.send(randomUser);
}

module.exports={
    getAllUser,
    getRandomUser
}