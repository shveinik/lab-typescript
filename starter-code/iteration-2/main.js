"use strict";
exports.__esModule = true;
// 1. Create a class Todo that implements the Interface created before.
var Todo = (function () {
    function Todo(tasks) {
        this.tasks = tasks;
    }
    Todo.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("=========== NEW INSERTION =========== Task " + task + " inserted in the list");
        return this.tasks.length;
    };
    ;
    Todo.prototype.listAllTasks = function () {
        for (var i = 0; i < this.tasks.length; i++) {
            console.log(this.tasks[i]);
        }
        ;
    };
    ;
    Todo.prototype.deleteTask = function (task) {
        for (var i = 0; i < this.tasks.length; i++) {
            if (task == this.tasks[i]) {
                this.tasks.splice(i, 1);
                console.log("=========== NEW DELETION =========== Task " + this.tasks[i] + " removed from the list");
                return this.tasks.length;
            }
        }
    };
    return Todo;
}());
// Execution
var myTodos = new Todo([]);
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
