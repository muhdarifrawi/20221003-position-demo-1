window.onload = () => {
  addFunctionToElements();
};

function addFunctionToElements() {
  console.log("added");
  // add on change event to select element
  document.getElementById("render").addEventListener("click", calculate);
  document.getElementById("reset").addEventListener("click", reset);
}

function calculate() {
  let positionType = document.getElementById("position-type").value;
  let top = document.getElementById("top").value;
  let left = document.getElementById("left").value;
  let bottom = document.getElementById("bottom").value;
  let right = document.getElementById("right").value;
  let width = document.getElementById("width").value;
  let height = document.getElementById("height").value;

  document.getElementById("box").style.position = positionType;
  document.getElementById("position-name").innerText = positionType;
  document.getElementById("box").style.top = `${top}px`;
  document.getElementById("box").style.left = `${left}px`;
  document.getElementById("box").style.bottom = `${bottom}px`;
  document.getElementById("box").style.right = `${right}px`;
  document.getElementById("box").style.width = `${width}px`;
  document.getElementById("box").style.height = `${height}px`;

  console.log(positionType, top, left, bottom, right);
}

function reset() {
  document.getElementById("position-type").value = "static";
  document.getElementById("position-name").innerText = "static";
  document.getElementById("box").style.position = "static";
  document.getElementById("box").style.top = "0px";
  document.getElementById("box").style.left = "0px";
  document.getElementById("box").style.bottom = "0px";
  document.getElementById("box").style.right = "0px";
  document.getElementById("box").style.width = "200px";
  document.getElementById("box").style.height = "200px";
}
