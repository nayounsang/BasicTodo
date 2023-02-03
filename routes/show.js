var express = require('express');
var fs = require('fs')

var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    if (fs.existsSync('./data/todo_list.json')) {
        fs.readFile('./data/todo_list.json',{
            'encoding':'utf-8'
        }, function(err,data){
            res.json(data.todos)
        })
      } else {
        var data = {
            'todos':[]
        }
        fs.writeFile('./data/todo_list.json',JSON.stringify(data),function(err){
            res.json(data)
        })
      }
});

module.exports = router;