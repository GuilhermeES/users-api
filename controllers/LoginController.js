const jwt = require('jsonwebtoken');
const User = require("../models/User");
const bcrypt = require('bcrypt');


let secret = "asdasdasd"

class LoginController{
    async login(req,res){
        try{
           let {email, password} = req.body;
           let user =  await User.findOne({where:{email}})

           if(user != undefined){
                let match = await bcrypt.compare(password, user.password);
                if(match){
                   let token = jwt.sign({email:user.email}, secret)
                   res.status(200)
                   res.json({toke: token})
                }

           }    
           else{
                res.send({status: false})
           }
        }
        catch(error){
            console.log(error)
        }
    }
}

module.exports = new LoginController()