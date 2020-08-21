const todoDb = require('../data/todo');

function index(req, res, next) {
    res.render('todos/index.ejs', {
        todos: todoDb.getAll()
    })
}

function show(req, res) {
    res.render('todos/show', {
        todo: todoDb.getOne(req.params.id)
    });
}

function create(req, res) {
    console.log(req.body.AddToDo)

    let objTodos = {
        todo: req.body.AddToDo,
        done: false
    };
    console.log(objTodos)
    todoDb.todos.push(objTodos)
    res.send("Thank you for the submition")
}

module.exports = {
    index: index,
    show: show,
    create: create
};