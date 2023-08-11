const ele = document.getElementById("ele1");
ele.style.backgroundColor = "green";
ele.addEventListener("click", function (color) {
  color = "yellow";
  ele.style.backgroundColor = color;
});
