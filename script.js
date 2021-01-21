// https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1027&q=80

let form = document.getElementById("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  createMeme();
});

function createMeme() {
  let url = document.getElementById("url").value;
  let top = document.getElementById("top").value;
  let bottom = document.getElementById("bottom").value;
  let div = document.createElement("div");
  div.style.backgroundImage = `url(${url})`;
  let topText = document.createElement("p");
  topText.innerText = top;
  let bottomText = document.createElement("p");
  bottomText.innerText = bottom;
  div.appendChild(topText);
  div.appendChild(bottomText);

  let body = document.getElementsByTagName("body")[0];
  body.appendChild(div);
}
