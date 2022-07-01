let tasks = document.cookie ? JSON.parse(document.cookie.substring(6).match(/[^;]+/g)[0]) : [];

function newTask(text = "", parent = document.getElementsByTagName("body")[0])
{
  let elem = document.createElement("div");
  parent.appendChild(elem);

  let taskText = document.createElement("p");
  let cancelButton = document.createElement("button");
  let completeButton = document.createElement("button");

  elem.appendChild(taskText);
  elem.appendChild(cancelButton);
  elem.appendChild(completeButton);

  cancelButton.onclick = () => 
  {
    elem.remove();
    updateCookie();
  }
  completeButton.onclick = () => 
  {
    elem.remove();
    updateCookie();
    // I need to put a congratulations here eventually
  }

  taskText.innerHTML = text;
  cancelButton.innerHTML = "Cancel task";
  completeButton.innerHTML = "This task has been completed";

  return text;
}

function updateCookie()
{
  document.cookie = "tasks=" + JSON.stringify(tasks) + ";";
}

function createTask()
{
  tasks.push(newTask(document.getElementsByTagName("input")[0].value));
  updateCookie();
}

for(let i of tasks)
{
  newTask(i);
}
