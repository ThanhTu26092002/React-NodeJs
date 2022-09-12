var express = require('express');
var router = express.Router();

router.all('/', (req, res, next) => {
  console.log('Hello ThanhTu Demo again');
  next();
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  const result = [
    {id: '1',
    name: 'iphone 13',
  },
  {
    id: '2',
    name: 'macbook pro'
  }
  ];
  res.json(result);
});
router.post('/', function (req, res, next) {
  const data = req.body;
  console.log(data);
  //Code here..
  const result = [];
  res.json(data);
});


module.exports = router;