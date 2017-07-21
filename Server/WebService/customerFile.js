var express = require('express');
var router = express.Router();

router.get('/customerFile/:id', function(req, res, next) {
    //res.send(req.param('id'));

    res.send([{Date: "01/01/2017", Diagnose: "kdfd"}]);
});

module.exports = router;