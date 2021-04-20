class UserController{
    async index(req,res){
        res.send("App")
    }
}

module.exports = new UserController()