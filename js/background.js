// 출처
// https://www.pexels.com/ko-kr/

const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const randomImage = images[Math.floor(Math.random() * images.length)];
const plusImage = document.createElement("img");

plusImage.src = `img/${randomImage}`;

document.body.appendChild(plusImage);
plusImage.id = "plusImage";
