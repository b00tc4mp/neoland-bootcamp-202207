var body = document.querySelector("body");
//Both work the same
//var body = document.getElementsByTagName("body");

var element = document.createElement("div");

const colors = [
  "red",
  "black",
  "blue",
  "orange",
  "yellow",
  "pink",
  "violet",
  "gold",
  "white",
  "green",
];

// body.append(element);
debugger;

for (var i = 0; i < 10; i++) {
  body.append(element);
  var element = document.createElement("div");
  element.style.width = "50px";
  element.style.height = "50px";
  element.style.backgroundColor = colors[i];
  element.style.borderWidth = "1px";
  element.style.borderStyle = "solid";
  element.style.borderColor = "black";
}
