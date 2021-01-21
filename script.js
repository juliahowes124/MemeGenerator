let form = document.getElementById("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  createMeme();
});

function createMeme() {
  let img = document.getElementById("url").value;
  let top = document.getElementById("top").value;
  let bottom = document.getElementById("bottom").value;
  let div = document.createElement("div");
  div.innerText = img;
  let body = document.getElementsByTagName("body")[0];
  body.appendChild(div);
}
