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
            let user = await User.create({name, email, password: hash, number, money, status})
            res.status(200)
            res.json(user);
        }
        catch(error){
            console.log(error)
            return []
        }
    }
    async update(req, res){
        try{
            let {id, name, email, number, money, status} = req.body
            
            let user_id = await User.findOne({where:{id}})
            if(user_id != undefined){
                let user = await User.update({name, email, number, money, status},{where: {id}})
                if(user != undefined){
                    res.status(200)
                    res.send("ok")
                }
                else{
                    res.status(404)
                    res.send("Error ao alterar")
                }
            }
            else{
                res.status(406)
                res.send("usuario nao encontrado");
            }
            
        }
        catch(error){
            console.log(error)
            return []
        }
    }

    async findAll(req,res){
        try{
            let users = await User.findAll({raw: true})
            res.status(200)
            res.json(users)
        }
        catch(error){
            console.log(error)
            return []
        } 
    }

    async findById( req ,res){
        try{
            let id = req.params.id
            let user = await User.findOne({where: {id: id}})
            if(user == undefined){
                res.json({err: "Usuario não encontrado"})
                res.status(404)
            }
            res.status(200)
            res.json(user)
        }
        catch(error){
            console.log(error)
            return []
        } 
    }

    async delete(req,res){
        try{
            let id = req.params.id
            let user = await User.destroy({where: {id:id}})
            if(user == undefined){
                res.json({err: "Usuario não encontrado"})
                res.status(404)
            }
            res.status(200)
            res.json(user)
        }
        catch(error){
            console.log(error)
            return []
        } 
    }
}

module.exports = new UserController()