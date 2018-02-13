const Cookies       = require('cookies');
const db            = require('./config');
let ObjectID        = require('mongodb').ObjectId;


module.exports= {
    getAllDocuments: function (req, res)
    {
        let collection = db.collection("documents");
        let cookies = new Cookies(req, res);
        let sort = {};
        
        console.log(req.body);
        //res.writeHead(200, {"Content-Type": "text/plain"});
        //res.write("Some body for projects");
        //let todos = collection.find({}); 
        


    },

    startpage: function(req, res)
    {
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.write("Hello microservice for redmine");
        res.end();
    }
}