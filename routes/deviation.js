var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('deviation', {
     title: 'deviation route'
 });
});

module.exports = router;