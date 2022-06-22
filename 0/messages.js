function amogd()
{
  document.getElementById("result").innerHTML = this.status;
}

function test()
{
  let r = new XMLHttpRequest();
  r.addEventListener("load", amogd);
  r.open("GET", "./messages.js");
  r.send();
}
