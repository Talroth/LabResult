var express = require('express');
var db = require('./../../db');
var router = express.Router();


router.get('/customerFile/:id', function(req, res, next) {
    //res.send(req.param('id'));
    var id = req.params.id;    
     var objID = db.getID(id);
    // console.log(objID);
    db.connection.customerfile.findOne({_id: objID}, function(err, result) {
        if (err) {
            res.send(err);
        }

        res.json(result);
    });
    // res.send([{Date: "01/01/2017", Diagnose: "kdfd"}]);
});

router.get('/customerFile/', function(req, res, next) {
    //res.send(req.param('id'));
    db.connection.customerfile.find(function(err, result) {
        if (err) {
            res.send(err);
        }

        console.log(result);
        res.json(result);
    });
});

module.exports = router;