/* This is the accordion/drop down menu */

var collumn = document.getElementsByClassName("accordion1");
var i;

for (i = 0; i < collumn.length; i++) {
  collumn[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

var collumn = document.getElementsByClassName("accordion2");
var i;

for (i = 0; i < collumn.length; i++) {
  collumn[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

var collumn = document.getElementsByClassName("accordion3");
var i;

for (i = 0; i < collumn.length; i++) {
  collumn[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

var collumn = document.getElementsByClassName("accordion4");
var i;

for (i = 0; i < collumn.length; i++) {
  collumn[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

var collumn = document.getElementsByClassName("accordion5");
var i;

for (i = 0; i < collumn.length; i++) {
  collumn[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
