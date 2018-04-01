var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
    res.render('login', { title: 'Login' });
});

// POST http://localhost:8080/api/users
// parameters sent with
router.post('/register', function(req, res) {
    var user_id = req.body.id;
    var token = req.body.token;
    res.send(user_id + ' ' + token);

});

module.exports = router;
