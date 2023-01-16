const images = [
    "bg1.jpeg", "bg2.jpeg", "bg3.jpeg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); // img 폴더의 element를 불러옴
bgImage.src = `img/${chosenImage}`; // img의 소스 확정

document.body.appendChild(bgImage);