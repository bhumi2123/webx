document.addEventListener('DOMContentLoaded', function () {
    var taskInput = document.getElementById('taskInput');
    var addTaskButton = document.getElementById('addTaskButton');
    var taskList = document.getElementById('taskList');
    addTaskButton.addEventListener('click', function () {
        var taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });
    function addTask(taskText) {
        var li = document.createElement('li');
        li.textContent = taskText;
        li.addEventListener('click', function () {
            li.classList.toggle('completed');
        });
        taskList.appendChild(li);
    }
});
