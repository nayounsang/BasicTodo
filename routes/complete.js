var express = require('express');
var fs = require('fs');
var router = express.Router();


router.post('/', function(req, res, next) {
    fs.readFile('./data/todo_list.json', {
		'encoding': 'utf8'
	}, function (err, data) {
		data = JSON.parse(data);
		data.todos[req.body.index].done = !data.todos[req.body.index].done;
		fs.writeFile('./data/todo_list.json', JSON.stringify(data), function (err) {
			res.json(true);
		});
	});
	
	//res.send('hello world');
});

module.exports = router;