const carDiv = document.createElement("div");
carDiv.classList.add("div");
carDiv.className = "carDiv";
const img = document.createElement("img");
img.classList.add("img");
img.src = "./img/blogimage.svg";
img.width = 336;
img.height = 200;
img.alt = "blogimage";
const btn = document.createElement("button");
btn.classList.add("btn");
btn.textContent = "Learning";

const subtitle = document.createElement("h4");
subtitle.classList.add("subtitle");
subtitle.textContent = "Published 21 Dec 2023";
const title = document.createElement("h1");
title.classList.add("title");
title.textContent = "HTML & CSS foundations";

const description = document.createElement("p");
description.textContent =
  "These languages are the backbone of every website, defining structure, content, and presentation.";
description;
const userimg = document.createElement("img");
userimg.src = "./img/userpic.png";
userimg.width = 32;
userimg.height = 32;
carDiv.append(img, btn, subtitle, title, description, userimg);
document.body.appendChild(carDiv);
