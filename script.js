const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');


function addTask(taskText) {
    const taskItem = document.createElement('li');

    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete-btn');
    deleteButton.onclick = () => taskItem.remove();

    taskItem.appendChild(taskContent);
    taskItem.appendChild(deleteButton);


    taskItem.onclick = () => taskItem.classList.toggle('completed');

    taskList.appendChild(taskItem);
}


addButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        addTask(taskText);
        taskInput.value = '';
    }
});

taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const taskText = taskInput.value.trim();
        if (taskText) {
            addTask(taskText);
            taskInput.value = '';
        }
    }
});
