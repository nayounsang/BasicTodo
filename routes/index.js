var express = require('express');
var path = require('path')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, 'reactapp/build/index.html'))
});

module.exports = router;
