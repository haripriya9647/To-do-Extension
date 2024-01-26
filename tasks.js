// tasks.js

// Save tasks to local storage
function saveTasks(tasks) {
    chrome.storage.local.set({ tasks: tasks }, function () {
        console.log('Tasks saved:', tasks);
    });
}

// Load tasks from local storage
function loadTasks(callback) {
    chrome.storage.local.get('tasks', function (result) {
        const tasks = result.tasks || [];
        console.log('Tasks loaded:', tasks);
        callback(tasks);
    });
}

// Add a new task
function addNewTask(task) {
    loadTasks(function (tasks) {
        tasks.push(task);
        saveTasks(tasks);
        // Update UI or perform any additional actions
    });
}

// Delete a task by index
function deleteTask(index) {
    loadTasks(function (tasks) {
        tasks.splice(index, 1);
        saveTasks(tasks);
        // Update UI or perform any additional actions
    });
}

// Event listener for the New Task button
document.getElementById('newTaskButton').addEventListener('click', function () {
    // Get the task from the input element
    const taskInput = document.getElementById('taskInput');
    const taskData = taskInput.value.trim(); // trim removes leading and trailing whitespaces

    // Check if the task is not empty
    if (taskData) {
        addNewTask(taskData);
        // Clear the input field after adding the task
        taskInput.value = '';
    }
});

// Example: Delete task by index (replace with actual logic when you have delete buttons)
// deleteTask(0);
