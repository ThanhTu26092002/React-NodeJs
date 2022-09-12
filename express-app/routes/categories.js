var express = require('express');
var router = express.Router();

router.get('/categories', function (req, res, next) {
  const { username, password } = req.body;
  if (username === 'tungnt@softech.vn' && password === '123456789') {
    res.json({
        user :[{
              "id": 1,
              "name": "CPU",
              "description": "Cac loai CPU cho may tinh"
            },
            {
              "id": 2,
              "name": "HDD",
              "description":"Cac loai dia cung cho may tinh"
            }],
            access_token: '...',
        });
  return;
    }
  res.status(401).json({
    statusCode: 401,
    message: 'Unauthorized',
  })
});
module.exports = router;