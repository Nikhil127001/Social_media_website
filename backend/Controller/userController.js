const express = require('express');
const routes = express.Router();

const fs = require('fs');
const path = require('path')

const filePath = path.join(__dirname,'../DummyData/userData.json');


const getUsers = () => {
    const users = fs.readFileSync(filePath);
    return JSON.parse(users);
}

routes.get('/getUsers',(req,res) => {
    const Users = getUsers();
    res.status(200).send(Users);
})

routes.get('/getUser/:id',(req,res) => {
    const userid = req.params.id;
    const Users = getUsers();

    const user = Users.find(item => item.id == userid);

    if(user){
        res.status(200).send(user);
    }
    else{
        res.status(400).send("user doesn't exists");
    }

})

routes.post('/createUser',(req,res) => {
    const dataToBeInserted = req.body;
    const users  = getUsers(); 

    console.log(dataToBeInserted);
    console.log(users);
    if(users.find(user => user.id != dataToBeInserted.id)){
        dataToBeInserted.id = new Date().getTime();
        users.push(dataToBeInserted)

        fs.writeFileSync(filePath,JSON.stringify(users,null,2));

        res.status(200).send("user created successfully");
    }else{
        res.status(400).send('some errror occured')
    }       
})

routes.post('/updateUser/:id', (req,res) => {
    const users = getUsers();
    const userData = req.body;
    const userid = req.params.id;

    const index = users.findIndex(user => user.id == userid);
    if(users[index]){
        // users[index].name = userData.name || users[index].name;
        // users[index].PhoneNumber = userData.PhoneNumber || users[index].PhoneNumber;
        // users[index].Username = userData.Username || users[index].Username;
        // users[index].password = userData.password || users[index].password;

        // or

        users[index] = {
            ...users[index],
            ...userData
        }

        fs.writeFileSync(filePath,JSON.stringify(users,null,2));

        res.status(200).send("user updated successfully");
    }else{
        res.status(500).send("internal server error");
    }
})

routes.delete('delUser/:id',(req,res) => {
        const users = getUsers();
        const userId = req.params.id;

        const index = users.findIndex(user => user.id == userId);

        if(index !== -1){

            users.splice(index,1);

            fs.writeFileSync(filePath,JSON.stringify(users,null,2))

            res.status(200).send('user deleted successfully');
        }else{
            res.status(400).send("something went wrong");
        }
})

module.exports = routes;
