let form = document.getElementById("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  processForm();
  form.reset();
});

function processForm() {
  let url = document.getElementById("url").value;
  let top = document.getElementById("top").value;
  let bottom = document.getElementById("bottom").value;
  let fit = document.getElementById("image-fit").value;
  let test = new Image();
  test.addEventListener("load", () => createMeme(url, top, bottom, fit));
  test.addEventListener("error", imageNotFound);
  test.src = url;
}

function createMeme(url, top, bottom, fit) {
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
  btn.innerHTML = '<i class="fa fa-trash fa-3x"></i>';
  btn.addEventListener("click", function () {
    div.remove();
  });

  let mobileBtn = document.createElement("button");
  mobileBtn.className = "mobile-delete-btn";
  mobileBtn.innerHTML = '<i class="fa fa-times fa-2x"></i>';
  mobileBtn.addEventListener("click", function () {
    div.remove();
  });

  div.appendChild(topText);
  div.appendChild(bottomText);
  div.appendChild(mobileBtn);
  div.appendChild(overlay);
  overlay.appendChild(btn);

  let memes = document.getElementsByClassName("meme-section")[0];
  memes.appendChild(div);
}

function imageNotFound() {
  alert("Please enter a valid image url.");
}
