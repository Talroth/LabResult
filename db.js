
var mongojs = require('mongojs');
module.exports =
{
    connection : mongojs('mongodb://admin:123456@ds161032.mlab.com:61032/talmongodb',['labresult']),
    getID : function(id)
    {
        return mongojs.ObjectID(id);
    }
}

// module.exports = blabla;