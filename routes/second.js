var express = require('express');
var router = express.Router();

/* GET second page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/date', function(req, res, next) {
  const date = new Date().toString();
  res.json(date);
});

module.exports = router;
