// Iteration 1
// 1. Create an array of strings
let tasks: Array <string> = [];
// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
let addTask = function(task){
  this.tasks.push(task),
  console.log("=========== NEW INSERTION =========== Task " + task + " inserted in the list")
         return this.tasks.length;
       };
// 3. Create a function to list all tasks, it must show in the console de task.
let listAllTasks = function(){
  for(let i = 0; i < this.tasks.length; i++){
    console.log(this.tasks[i])
  }
}

// 4. Create a function to delete a task, you must find the task inside the array and delete it.
let deleteTask = function(task){
  for(let i = 0; i < tasks.length; i++){
    if(this.task == this.tasks[i]){
      this.tasks.splice(i,1)
      console.log("=========== NEW DELETION =========== Task " + this.tasks[i] + " removed from the list");
      return this.tasks.length
    }
  }
}
// Execution
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
