const taskForm = document.querySelector(".task-form");
const taskLists = document.querySelector(".tasks-list");
const ProgressBar = document.querySelector(".progress");
const addTaskBtn = document.querySelector(".add-task");
// display task input form
const showForm = () => {
  taskForm.classList.toggle("hidden");
};

// update Task progress
const updateProgressBar = (Tasks) => {
  const TaskCount = Tasks.length;
  const CompletedTask = Tasks.filter((task) => task.progress === "done").length;
  if(TaskCount===0 || CompletedTask==0){
    ProgressBar.style.width = 0;
    ProgressBar.style.background = 'none';
    ProgressBar.innerText = '';
  }else{
    let progress = ((CompletedTask / TaskCount) * 100).toFixed();
    ProgressBar.style.width = `${progress}%`;
    ProgressBar.innerText = `${progress}%`;
  }
};
// display tasks list
const displayTasks = () => {
  //  fetch and display tasks
  let TaskStr = localStorage.getItem("tasks");
  let Tasks = JSON.parse(TaskStr);
  Tasks.length > 0
    ? Tasks.forEach((task) => {
        const taskLi = document.createElement("li");
        taskLi.classList.add("task-item");
        taskLi.setAttribute("key", task.id);
        taskLi.innerHTML += `
        <div class="align-left">
            <label class="checkbox">
            <input type="checkbox" class="checkbox-input" ${
            task.progress === "done" ? "checked" : ""
            }/>
            <span class="checkbox-inner"></span>
            </label>
            <span class="task-name ${task.progress === "done" ? "checked" : ""}">${
            task.name
            }</span>
        </div>
        <button class="delete-btn">
            <i
            class="fa fa-trash delete-icon"
            style="font-size: 24px; color: red"
            ></i>
        </button>
        `;
        taskLists.appendChild(taskLi);
      })
    : (taskLists.innerHTML += "<p style='font-size: 24px;color:red';>No Task Added Yet!</p>");

  //  Update task progress
  updateProgressBar(Tasks);
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
  const taskId = e.target.parentElement.parentElement.parentElement.getAttribute("key");
  const taskIndex = Tasks.findIndex((task) => task.id === taskId);
  if (taskIndex !== -1) {
    Tasks[taskIndex].progress =
      Tasks[taskIndex].progress === "todo" ? "done" : "todo";
    localStorage.setItem("tasks", JSON.stringify(Tasks));
    location.reload();
  }
};

const updateTask = (e) => {
  const selectedTask = e.target;
  selectedTask.contentEditable = true;
  selectedTask.focus();
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const taskIndex = tasks.findIndex(
    (task) => task.name === selectedTask.innerText
  );
  selectedTask.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      if (taskIndex !== -1) {
        tasks[taskIndex].name = selectedTask.innerText;
        localStorage.setItem("tasks", JSON.stringify(tasks));
      }
      selectedTask.contentEditable = false;
      selectedTask.blur();
    }
  });
};

const deleteTask = (e) => {
  const taskId = e.target.parentElement.parentElement.getAttribute("key");
  let Tasks = JSON.parse(localStorage.getItem("tasks"));
  const updatedTasks = Tasks.filter((task) => task.id !== taskId);
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  location.reload();
};

window.addEventListener("load", displayTasks);
addTaskBtn.addEventListener("click", showForm);
taskForm.addEventListener("submit", AddTask);
document.addEventListener("dblclick", function (e) {
  if (e.target.classList.contains("task-name")) {
    updateTask(e);
  }
});
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("checkbox-input")) {
    markCompleted(e);
  }
  if (e.target.classList.contains("delete-icon")) {
    deleteTask(e);
  }
});
