var tasks = [];
var addTask = function (task) {
    this.tasks.push(task),
        console.log("=========== NEW INSERTION =========== Task " + task + " inserted in the list");
    return this.tasks.length;
};
var listAllTasks = function () {
    for (var i = 0; i < this.tasks.length; i++) {
        console.log(this.tasks[i]);
    }
};
var deleteTask = function (task) {
    for (var i = 0; i < tasks.length; i++) {
        if (this.task == this.tasks[i]) {
            this.tasks.splice(i, 1);
            console.log("=========== NEW DELETION =========== Task " + this.tasks[i] + " removed from the list");
            return this.tasks.length;
        }
    }
};
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
