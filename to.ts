document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput') as HTMLInputElement;
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    function addTask(taskText: string) {
        const li = document.createElement('li');
        li.textContent = taskText;

        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        taskList.appendChild(li);
    }
});
