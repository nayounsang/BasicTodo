var express = require('express');
var fs = require('fs')
var router = express.Router();


/* GET home page. */
router.post('/', function(req, res, next) {
  var each = {
    'value':'',
    'done':false
  };
  each.value = req.body.value;
  fs.readFile('./data/todo_list.json',{encoding: 'utf-8'},function(err,data){
    data = JSON.parse(data);
    data.todos.push(each);
    fs.writeFile('./data/todo_list.json',JSON.stringify(data),function(err){
        res.json(true)
    })
  })

});

module.exports = router;