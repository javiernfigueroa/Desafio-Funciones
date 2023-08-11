const cuadrado_a = document.getElementById("colores_a");
const cuadrado_b = document.getElementById("colores_b");
const cuadrado_c = document.getElementById("colores_c");
const cuadrado_d = document.getElementById("colores_d");
const key = document.getElementById("key");
const container = document.querySelector(".container");

cuadrado_a.style.backgroundColor = "blue";
cuadrado_b.style.backgroundColor = "red";
cuadrado_c.style.backgroundColor = "green";
cuadrado_d.style.backgroundColor = "yellow";

function cambiarColor(event) {
  const cuadrado = event.target;

  if (cuadrado.style.backgroundColor === "black") {
    cuadrado.style.backgroundColor = cuadrado.dataset.colorOriginal || "";
  } else {
    cuadrado.dataset.colorOriginal = cuadrado.style.backgroundColor;
    cuadrado.style.backgroundColor = "black";
  }
}

document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "a":
      key.style.backgroundColor = "pink";
      break;
    case "s":
      key.style.backgroundColor = "orange";
      break;
    case "d":
      key.style.backgroundColor = "cyan";
      break;
    case "q":
      const nuevoCuadradoQ = document.createElement("div");
      nuevoCuadradoQ.classList.add("colores");
      nuevoCuadradoQ.style.backgroundColor = "purple";
      container.appendChild(nuevoCuadradoQ);
      break;
    case "w":
      const nuevoCuadradoW = document.createElement("div");
      nuevoCuadradoW.classList.add("colores");
      nuevoCuadradoW.style.backgroundColor = "gray";
      container.appendChild(nuevoCuadradoW);
      break;
    case "e":
      const nuevoCuadradoE = document.createElement("div");
      nuevoCuadradoE.classList.add("colores");
      nuevoCuadradoE.style.backgroundColor = "brown";
      container.appendChild(nuevoCuadradoE);
      break;
  }
});

cuadrado_a.addEventListener("click", cambiarColor);
cuadrado_b.addEventListener("click", cambiarColor);
cuadrado_c.addEventListener("click", cambiarColor);
cuadrado_d.addEventListener("click", cambiarColor);
