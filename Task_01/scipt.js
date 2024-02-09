function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value === "") {
        alert("Please enter a task!");
        return;
    }

    var newTask = document.createElement("li");
    newTask.textContent = taskInput.value;

    newTask.onclick = function () {
        this.remove();
    };

    taskList.appendChild(newTask);
    taskInput.value = "";
}
