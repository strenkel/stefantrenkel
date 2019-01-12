var isMit = true;

function toggle() {
  if (isMit) {
    ohne();
    isMit = false;
  } else {
    mit();
    isMit = true;
  }
}

function ohne() {
  document.getElementById("Klopstock").innerHTML = "Es regnet!";
  document.getElementById("mitohne").innerHTML = "ohne";

}

function mit() {
  document.getElementById("Klopstock").innerHTML = "Klopstock!";
  document.getElementById("mitohne").innerHTML = "mit";
}