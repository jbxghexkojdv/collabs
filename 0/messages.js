function test()
{
  let r = new XMLHttRequest();
  r.addEventListener("load", function(){
    document.getElementById("test").innerHTML = this.responseText;
  });
  r.open("GET", "./messages.js");
  r.send();
}
