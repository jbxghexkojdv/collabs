let cr = document.createElement("script");
cr.src = "../../cookieReader.js";
document.getElementsByTagName("body")[0].insertBefore(cr, document.getElementsByTagName("script")[0]);

let tasks = document.cookie && (typeof JSON.parse(document.cookie.substring(6).match(/[^;]+/g)[0]) == 'array') ? JSON.parse(document.cookie.substring(6).match(/[^;]+/g)[0]) : [];

function updateCookie()
{
  document.cookie = "tasks=" + JSON.stringify(tasks) + ";";
}

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


function createTask()
{
  let value = document.getElementsByTagName("input")[0];
  if(!value.value.match(/;/))
  {
    if(value.value) {
      tasks.push(newTask(value.value));
    }
  }
  else
  {
    value.value = "Illegal character (semicolon)";
  }

  if(!value.value)
  {
    value.value = "Please enter something";
  }
 updateCookie();
}

for(let i of tasks)
{
  newTask(i);
}

function clearCookie()
{
  document.cookie = "tasks=[]";
  document.getElementsByTagName("input")[0].value = JSON.stringify(cookieReader());
}
