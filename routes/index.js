var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { cuenta: 1521199500098 });

});

module.exports = router;
