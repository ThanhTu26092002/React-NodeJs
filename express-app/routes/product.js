var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('product');
});


router.post('/', function(req, res, next) {
    const result ={
        id : 1,
        name: 'iPhone 13',
    };
    res.json(result);
  });
  router.post('/search', function(req, res, next) {
    const result =
    {
      id: '1',
      name: 'iphone 13',
    };
    const data = req.body;
    console.log(data);
    res.json(result);
  });
module.exports = router;