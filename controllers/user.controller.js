const { writeFile } = require('fs');
const path = require('path');
const userDb= require('../user.json');


const {users}=userDb;

const getAllUser=(req,res)=>{
    res.sendFile(path.join(__dirname, "../user.json"));
}

const getRandomUser=(req,res)=>{
    const id= parseInt(req.params.id);
  
    const randomUser = users.filter(user=>user.Id===id);
    res.send(randomUser);
}


const saveUser=(req,res)=>{

    const info = req.body;
    const newUser = {users:[...users,info]};
    writeFile(path.join(__dirname,"../user.json") ,JSON.stringify(newUser),(err)=>{
            res.send(err)
    })
    res.send(newUser)
}

const updateUser=(req,res)=>{

        const body = req.body;
        // console.log(body);
        const id = parseInt(req.params.id);

        // first option

//     let index =  users.findIndex(user => user.Id === id);
//     singleUser = body;
//     const updatedUser = {users:[
//     ...users,
//     users[index].name=body.name,
//     users[index].address=body.address,
//     users[index].contact=body.contact,
//     users[index].gender=body.gender,
//     users[index].photUrl=body.photUrl,
//      ]};

        // 2nd option


        const restUser = users.filter(user=>user.Id !== id);

        restUser.push({
        Id:id,
        gender: body.gender,
        name: body.name,
        contact: body.contact,
        address: body.address,
        photUrl: body.photUrl});
        const modifyUser = {users:restUser}


    writeFile(path.join(__dirname,"../user.json") ,JSON.stringify(modifyUser),(err)=>{
        res.send(err)
});
//    console.log(updatedUser);
   res.send(modifyUser)

}


module.exports={

    getAllUser,
    getRandomUser,
    saveUser,
    updateUser
}