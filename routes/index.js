var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET about page. */
router.get('/contact', function(req, res, next) {
  res.render('contact');
});

router.get('/test', function(req, res, next) {
  res.render('test');
});

module.exports = router;


