const { writeFile, writeFileSync } = require('fs');
const path = require('path');
const userDb= require('../user.json');


const {users}=userDb;

const getAllUser=(req,res)=>{
    const userLimit =  users.slice(0,3);
    res.send({users:userLimit})
    }

    const getRandomUser=(req,res)=>{
    const id= parseInt(req.params.id);

    const randomUser = users.filter(user=>user.Id===id);
    res.send(randomUser);
}


const saveUser=(req,res)=>{

    const info = req.body;
    if(info.name && info.address && info.contact && info.gender){
        const haveUsers = users.find(user=>user.Id===info.Id);
    if(haveUsers){
        res.send('Provide unique Id');
    }
    else{
        const newUser = {users:[...users,info]};
            writeFileSync(path.join(__dirname,"../user.json") ,JSON.stringify(newUser),(err)=>{
                    res.send(err)
            })
        res.send(newUser)
    }
    }
    else{
        res.send('all data hasnot properly')
    }
 
}

const updateUser=(req,res)=>{

        const body = req.body;
        
        const Id = parseInt(req.params.id);

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
        const haveUsers = users.find(user=>user.Id===Id);
        if(haveUsers){

            const restUser = users.filter(user=>user.Id !== Id);

            restUser.push({
            Id:Id,
            gender: body.gender,
            name: body.name,
            contact: body.contact,
            address: body.address,
            photUrl: body.photUrl});
            const modifyUser = {users:restUser}
    
    
        writeFileSync(path.join(__dirname,"../user.json") ,JSON.stringify(modifyUser),(err)=>{
            res.send(err)
    });
    
       res.send(modifyUser);
        }
        else{
            res.send('Sorry your provide id is wrong')
        }


}


const deleteUser=(req,res)=>{

    const Id = parseInt(req.params.id);

    const haveUsers = users.find(user=>user.Id===Id);
    if(haveUsers){
        const deletedUser = users.filter(user=>user.Id !== Id);
        const restUser = {users:deletedUser};
    
        
        writeFileSync(path.join(__dirname,"../user.json") ,JSON.stringify(restUser),(err)=>{
            res.send(err)
        });
        res.send(restUser);
    }
    else{
        res.send('Sorry your provide id is wrong so cannot deleted')

    }
    



}


module.exports={

    getAllUser,
    getRandomUser,
    saveUser,
    updateUser,
    deleteUser
}