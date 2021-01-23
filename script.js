// https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1027&q=80

let form = document.getElementById("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  createMeme();
  form.reset();
});

function createMeme() {
  let url = document.getElementById("url").value;
  let top = document.getElementById("top").value;
  let bottom = document.getElementById("bottom").value;
  let fit = document.getElementById("image-fit").value;

  if (url) {
    let div = document.createElement("div");
    div.className = "meme-div";
    div.style.backgroundImage = `url(${url})`;
    div.style.backgroundSize = fit;
    let topText = document.createElement("p");
    topText.innerText = top;
    let bottomText = document.createElement("p");
    bottomText.innerText = bottom;
    let overlay = document.createElement("div");
    overlay.className = "overlay";
    let btn = document.createElement("button");
    btn.className = "delete-btn";
    btn.addEventListener("click", function () {
      div.remove();
    });
    div.appendChild(topText);
    div.appendChild(bottomText);
    div.appendChild(overlay);
    overlay.appendChild(btn);
    btn.innerHTML = '<i class="fa fa-trash fa-3x"></i>';

    let memes = document.getElementsByClassName("meme-section")[0];
    memes.appendChild(div);
  } else {
    alert("Please enter an image url.");
  }
}
