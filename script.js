// responsive navbar

function openNav() {
    document.getElementById("myNav").style.height = "100%";
    document.getElementById("bar1").style.transform = "rotate(45deg) translate(5px, 5px)";
    document.getElementById("bar3").style.transform = "rotate(-45deg) translate(5px, -5px)";
    document.getElementById("bar2").style.backgroundColor = "transparent";
    document.getElementById("barBar").style.position = "fixed";
    document.getElementById("closebtn").style.display = "block";
  
  
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
    document.getElementById("bar1").style.transform = "rotate(0deg)";
    document.getElementById("bar3").style.transform = "rotate(0deg)";
    document.getElementById("bar2").style.backgroundColor = "white";
    document.getElementById("barBar").style.position = "absolute";
    document.getElementById("closebtn").style.display = "none";
  }