const User = require("../models/User");
const bcrypt = require('bcrypt');


class UserController{
    async create(req,res){
        try{
            let {name, email, password, number, money, status} = req.body

            // hash password
            let hash = await bcrypt.hash(password,10)

            if(email == undefined){
                res.status(400);
                res.json({err: "O email não é válido"})
                return
            }
            const user = await User.create({name, email, password: hash, number, money, status})
            res.json(user);
            res.status(200)
        }
        catch(error){
            console.log(error)
            return []
        }
    }

    async findAll(req,res){
        try{
            const users = await User.findAll({raw: true})
            res.json(users)
            res.status(200)
        }
        catch(error){
            console.log(error)
            return []
        } 
    }

    async findById( req ,res){
        try{
            let id = req.params.id
            const user = await User.findOne({where: {id: id}})
            if(user == undefined){
                res.json({err: "Usuario não encontrado"})
                res.status(404)
            }
            res.json(user)
            res.status(200)
        }
        catch(error){
            console.log(error)
            return []
        } 
    }
}

module.exports = new UserController()