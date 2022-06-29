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
    document.deleteElement(elem);
  }
  completeButton.onclick = () => 
  {
    document.deleteElement(elem);
    // I need to put a congratulations here eventually
  }

  taskText.innerHTML = text;
  cancelButton.innerHTML = "Cancel task";
  completeButton.innerHTML = "This task has been completed";

  return text;
}

let tasks = document.cookie ? JSON.parse(document.cookie.substring(6).match(/[^;]+/g)[0]) : [];

function createTask()
{
  tasks.push(newTask(document.getElementsByTagName("input")[0].value));
  document.cookie = "tasks=" + JSON.stringify(tasks) + ";";
}

for(let i of tasks)
{
  newTask(i);
}
