class HomeController{
    async index(req,res){
        res.send("App")
    }
}

module.exports = new HomeController()