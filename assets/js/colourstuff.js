function chbg(color) {
    document.getElementById('#gymLink').style.Color = color;
}

var i = 0;
var j = 0;
var k = 0;
var l = 0;
var m = 0;
function change() {
  var doc = document.getElementById("headCon1");
  var color = ["yellow", "blue", "brown", "green"];
  doc.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
}

function change2() {
  var doc = document.getElementById("headCon2");
  var color = ["blue", "brown", "green", "yellow"];
  doc.style.backgroundColor = color[j];
  j = (j + 1) % color.length;
}

function change3() {
  var doc = document.getElementById("headCon3");
  var color = ["brown", "green", "yellow", "blue"];
  doc.style.backgroundColor = color[k];
  k = (k + 1) % color.length;
}
function change4() {
  var doc = document.getElementById("headCon4");
  var color = ["green", "yellow", "blue", "brown"];
  doc.style.backgroundColor = color[l];
  l = (l + 1) % color.length;
}

//setInterval(change, 2000);
//setInterval(change2, 2000);
//setInterval(change3, 2000);
//setInterval(change4, 2000);