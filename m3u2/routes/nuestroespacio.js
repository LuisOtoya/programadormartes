var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('esta es la pagina de nuestro espacio');
});

module.exports = router;