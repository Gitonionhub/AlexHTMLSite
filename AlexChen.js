
/** This is a prompt*/
alert("Water Polution! In this website, you will learn about SDG goals, and how Water Pollution affects us. Press the ok button to start visiting my website!")
/** 2nd prompt with input*/
var name = prompt ('What is your name?','');
document.write("<br>")
/** Uses input to write a sentence involving that name*/
document.write("<CENTER><FONT FACE=ARIAdL,VERDANA SIZE=5>Welcome "+name+". I hope you can learn something from my webpage!</FONT><HR NOSHADE WIDTH=450></CENTER>")
/** Function to open one of the 5 pages*/
function openPage(pageName, elmnt, color) {
  var i, tabcontent, tablinks;
  /** Which page to open?*/
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  document.getElementById(pageName).style.display = "block";

  elmnt.style.backgroundColor = color;
}

document.getElementById("defaultOpen").click();