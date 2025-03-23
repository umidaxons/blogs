const carDiv = document.createElement("div");
carDiv.className = "carDiv";

carDiv.style.width = "100%";
carDiv.style.maxWidth = "384px";
carDiv.style.borderRadius = "20px";
carDiv.style.backgroundColor = "#fff";
carDiv.style.boxShadow = "8px 8px 0px 0px black";
carDiv.style.padding = "24px";
carDiv.style.margin = "auto";
carDiv.style.textAlign = "center";
carDiv.style.display = "block";

// Body fon rangi
document.body.style.backgroundColor = "rgba(244, 208, 78, 1)";

// Shadow effekt
carDiv.addEventListener("mousedown", function () {
  carDiv.style.boxShadow = "16px 16px 0px 0px black";
});

carDiv.addEventListener("mouseup", function () {
  carDiv.style.boxShadow = "8px 8px 0px 0px black";
});

// Rasm
const img = document.createElement("img");
img.className = "img";
img.style.marginBottom = "24px";
img.src = "./img/blogimage.svg";
img.width = 336;
img.height = 200;
img.alt = "Blog Image";

// Tugma
const btn = document.createElement("button");
btn.className = "btn";
btn.textContent = "Read more";
btn.style.backgroundColor = "rgba(244, 208, 78, 1)";
btn.style.borderRadius = "4px";
btn.style.padding = "4px 12px";
btn.style.border = "none";
btn.style.color = "rgba(17, 17, 17, 1)";
btn.style.fontWeight = "800";
btn.style.fontSize = "14px";
btn.style.lineHeight = "21px";
btn.style.marginBottom = "12px";
btn.style.cursor = "pointer";

btn.addEventListener("mousedown", function () {
  btn.style.opacity = "60%";
});

btn.addEventListener("mouseup", function () {
  btn.style.opacity = "100%";
});

// Sana
const subtitle = document.createElement("h4");
subtitle.className = "subtitle";
subtitle.textContent = "Published 21 Dec 2023";
subtitle.style.color = "rgba(17, 17, 17, 1)";
subtitle.style.fontWeight = "500";
subtitle.style.fontSize = "14px";
subtitle.style.lineHeight = "21px";
subtitle.style.marginBottom = "12px";

// Sarlavha
const title = document.createElement("h1");
title.className = "title";
title.textContent = "HTML & CSS Foundations";
title.style.color = "rgba(17, 17, 17, 1)";
title.style.fontWeight = "800";
title.style.fontSize = "24px";
title.style.lineHeight = "36px";
title.style.marginBottom = "12px";
title.style.transition = "color 0.2s";

title.addEventListener("mousedown", function () {
  title.style.color = "rgba(244, 208, 78, 1)";
});

title.addEventListener("mouseup", function () {
  title.style.color = "rgba(17, 17, 17, 1)";
});

// Tavsif
const description = document.createElement("p");
description.textContent =
  "These languages are the backbone of every website, defining structure, content, and presentation.";
description.style.marginBottom = "24px";
description.style.color = "rgba(17, 17, 17, 1)";
description.style.fontSize = "16px";
description.style.lineHeight = "24px";

// Foydalanuvchi rasmi
const userimg = document.createElement("img");
userimg.src = "./img/userpic.png";
userimg.width = 32;
userimg.height = 32;
userimg.alt = "User Picture";
userimg.style.borderRadius = "50%";
userimg.style.display = "block";
userimg.style.margin = "auto";

// Elementlarni card ichiga joylash
carDiv.append(img, subtitle, title, description, btn, userimg);

// Card'ni body ichiga qo'shish
document.body.appendChild(carDiv);
