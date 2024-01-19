const taskForm = document.querySelector(".task-form");
const deleteBtn = document.querySelector(".delete-btn");
const taskLists = document.querySelector(".tasks-list");
const Progress = document.querySelector(".progress");
const addTaskBtn = document.querySelector(".add-task");

// display task input form
const showForm = () => {
  taskForm.classList.toggle("hidden");
};
// display tasks list
const displayTasks = () => {
  //  fetch and display tasks
  let TaskStr = localStorage.getItem("tasks");
  let Tasks = JSON.parse(TaskStr);
  Tasks.length>0 ? (Tasks.forEach((task) => {
    const taskLi = document.createElement("li");
    taskLi.classList.add("task-item");
    taskLi.setAttribute("key", task.id);
    taskLi.innerHTML += `
    <label class="checkbox">
        <input type="checkbox" class="checkbox-input" ${task.progress === "done" ? "checked" : ""}/>
        <span class="checkbox-inner"></span>
        <span class="task-name ${task.progress === "done" ? "checked" : ""}">${
      task.name
    }</span>
    </label>
    <button class="delete-btn">
        <i
        class="fa fa-trash"
        style="font-size: 24px; color: red"
        class="delete-icon"
        ></i>
    </button>
    `;
    taskLists.appendChild(taskLi);
  })):(taskLists.innerHTML+= '<p>Not Task Added!</p>')
};
//
const AddTask = (e) => {
  let form = e.target;
  let input = form.elements[0];
  let taskID = Math.random().toString(36).substr(2, 9);
  let StoredTask = localStorage.getItem("tasks");
  StoredTask = JSON.parse(StoredTask) || [];
  StoredTask.push({
    id: taskID,
    name: input.value,
    progress: "todo",
  });

  // clear form
  input.value = "";

  // store in local storage
  let TaskStr = JSON.stringify(StoredTask);
  localStorage.setItem("tasks", TaskStr);
};

const markCompleted = (e) => {
  let Tasks = JSON.parse(localStorage.getItem("tasks"));
  const taskId = e.target.parentElement.parentElement.getAttribute("key");
  const taskIndex = Tasks.findIndex((task) => task.id === taskId);
    
    if (taskIndex !== -1) {
        Tasks[taskIndex].progress = Tasks[taskIndex].progress === 'todo'? 'done' : 'todo';
        localStorage.setItem("tasks", JSON.stringify(Tasks));
        location.reload()
    }
   
};

window.addEventListener("load", displayTasks);
addTaskBtn.addEventListener("click", showForm);
taskForm.addEventListener("submit", AddTask);
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("checkbox-input")) {
    markCompleted(e);
  }
});
