var express = require('express');
var router = express.Router();

router.get('/customerFile/:id', function(req, res, next) {
    res.send(req.param('id'));
});

module.exports = router;