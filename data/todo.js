const todos = [
    {todo: 'Buy Milk', done: false},
    {todo: 'Learn Python', done: false}
];
  

function getAll() {
    return todos;
    }
    
    function getOne(id) {
        // Use the Array.prototype.find iterator method
        return todos.find(todo => todo.id === parseInt(id));
    }
    
    module.exports = {
        todos: todos,
        getAll: getAll,
        getOne: getOne,
    };



