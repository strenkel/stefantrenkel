var insignien = document.getElementById("insignien-root").children;
var insignienLength = insignien.length;
var i = 0;
show();

function next() {
  hide();
  pointToNext();
  show();
}

function hide() {
  insignien[i].style.display = "none";
}

function show() {
  insignien[i].style.display = "block";
}

function pointToNext() {
  i++;
  if (i >= insignienLength) {
    i = 0;
  }
}