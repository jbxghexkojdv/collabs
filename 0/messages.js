function test()
{
  let r = new XMLHttRequest();
  r.addEventListener("load", function(){
    document.getElementById("test").innerHTML = 0;
  });
  r.open("GET", "./messages.js");
  r.send();
}
