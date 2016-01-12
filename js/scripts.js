$(document).ready(function(){
  $("h1").click(function() {
    alert("This is a header.");
    alert("I said THIS IS A HEADER!");
  });

$("img").click(function() {
    alert("This is a picture.");
  });

$("p").click(function(){
  $(".initially-hidden").fadeToggle();
  $(".initially-showing").toggle();
})

  $("h2").click(function(){
    alert("Goo Goo Go Joob");
  });

  $("ul").dblclick(function() {
    alert("Walrus Lists");
  });
});
