var body = document.querySelector("body");

var element = document.createElement("div");

var container = document.createElement("div.container");

body.append(container);

container.style.display = "flex";
container.style.flexWrap = "wrap";

// element.style.width;

// container.style.display = "grid";

// element.style.display = "inline-block";

var index = 1;

for (var j = 0; j < 8; j++) {
  index++;
  for (var i = 0; i < 8; i++) {
    index++;
    container.append(element);
    var element = document.createElement("div");
    element.style.width = "50px";
    element.style.height = "50px";
    element.style.borderWidth = "1px";
    element.style.borderStyle = "solid";
    element.style.borderColor = "black";
    if (index % 2 === 0) element.style.backgroundColor = "black";
    else element.style.backgroundColor = "white";
  }
}
