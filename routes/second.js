var express = require('express');
var router = express.Router();

/* GET second page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express 2.0' });
});

module.exports = router;
