const imageList = [
  "photos/photo1.webp",
  "photos/photo2.webp",
  "photos/photo3.webp",
  "photos/photo4.webp","photos/photo5.png","photos/photo6.png","photos/photo7.png","photos/photo8.png","photos/photo9.png",
  "photos/photo10.png","photos/photo11.png","photos/photo12.png","photos/photo13.png","photos/photo14.png","photos/photo15.png",
  "photos/photo16.png","photos/photo17.png","photos/photo18.png","photos/photo19.png","photos/photo20.jpg"
];

const gallery = document.getElementById("gallery");

imageList.forEach((src) => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = "CollegeTips Photo";
  img.onclick = () => openModal(src);
  gallery.appendChild(img);
});

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.getElementsByClassName("close")[0];

function openModal(src) {
  modal.style.display = "block";
  modalImg.src = src;
}

closeBtn.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
