var express = require('express');
var router = express.Router();
var mongo = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var url="mongodb://localhost:27017";
/* GET home page. */
router.get('/', function(req, res, next) {
  res.json( {ok : true });
});

router.post('/',function(req, res, next) {
  res.json({ok: true, massage: 'post'});
})
module.exports = router;
