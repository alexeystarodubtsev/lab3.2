const queries = require('./queries');


module.exports = {
    display: function (req, res) {
        queries.getAllDocuments(req, res);
    },
    helloworld: function(req, res)
    {
        queries.startpage(req, res);
    }
}
