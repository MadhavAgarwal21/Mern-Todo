"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var cors = require('cors');

var app = express();

var jwt = require('jsonwebtoken');

var mongoose = require('mongoose');

var User = require('./models/User');

var bcrypt = require('bcrypt');

var Todo = require('./models/Todo');

mongoose.connect('mongodb+srv://test:MongodbTest@cluster0.072l3.mongodb.net/todo?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  return console.log('MongoDB Connected...');
})["catch"](function (err) {
  return console.log(err);
});
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.post('/signup', function (req, res) {
  var newUser = new User({
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 10)
  });
  newUser.save(function (err) {
    if (err) {
      return res.status(400).json({
        title: 'error',
        error: 'Email already in use'
      });
    }

    return res.status(200).json({
      title: 'user successfully added'
    });
  });
});
app.post('/login', function (req, res) {
  User.findOne({
    username: req.body.username
  }, function (err, user) {
    if (err) return res.status(500).json({
      title: 'server error',
      error: err
    });

    if (!user) {
      return res.status(400).json({
        title: 'user is not found',
        error: 'invalid username or password'
      });
    }

    if (!bcrypt.compareSync(req.body.password, user.password)) {
      return res.status(401).json({
        title: 'login failed',
        error: 'invalid username or password'
      });
    }

    var token = jwt.sign({
      userId: user._id
    }, 'secretkey');
    return res.status(200).json({
      title: 'login successful',
      token: token
    });
  });
});
app.get('/todos', function (req, res) {
  // verify
  jwt.verify(req.headers.token, 'secretkey', function (err, decoded) {
    if (err) return res.status(401).json({
      title: 'not authorized'
    });
    Todo.find({
      author: decoded.userId
    }, function (err, todos) {
      if (err) return res.status(401).json({
        title: 'Author not found'
      });
      return res.status(200).json({
        title: 'success',
        todos: todos
      });
    });
  });
});
app.post('/todo', function (req, res) {
  // verify
  jwt.verify(req.headers.token, 'secretkey', function (err, decoded) {
    if (err) return res.status(401).json({
      title: 'not authorized'
    });
    var newTodo = new Todo({
      title: req.body.title,
      isCompleted: false,
      author: decoded.userId
    });
    newTodo.save(function (error) {
      if (error) return res.status(401).json({
        title: 'error in saving todo'
      });
      return res.status(200).json({
        title: "successfully added",
        todo: newTodo
      });
    });
  });
});
app.put('/todo/:todoId', function (req, res) {
  jwt.verify(req.headers.token, 'secretkey', function (err, decoded) {
    if (err) return res.status(401).json({
      title: 'not authorized'
    });
    Todo.findOne({
      author: decoded.userId,
      _id: req.params.todoId
    }, function (err, todo) {
      if (err) return res.status(401).json({
        title: 'no author'
      });
      todo.isCompleted = true;
      todo.save(function (error) {
        if (error) return res.status(401).json({
          title: 'API error'
        }); //saved

        return res.status(200).json({
          title: 'success',
          todo: todo
        });
      });
    });
  });
});
var port = process.env.PORT || 5000;
app.listen(port, function (err) {
  if (err) {
    return console.log(err);
  }
  console.log('Server running on port: ', port);
});