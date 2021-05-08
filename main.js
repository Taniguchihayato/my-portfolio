const imgYaku = document.getElementById("img-yaku");
//const img1 = document.getElementById("img1");
//const img2 = document.getElementById("img2");
//const img3 = document.getElementById("img3");
//const img4 = document.getElementById("img4");
//const img5 = document.getElementById("img5");
//const img6 = document.getElementById("img6");
//const img7 = document.getElementById("img7");
//const img8 = document.getElementById("img8");
//const img9 = document.getElementById("img9");
//const img10 = document.getElementById("img10");
//const img11 = document.getElementById("img11");
const img_src = [
  "屋久島.jpg",
  "1.jpg",
  "2.JPG",
  "3.JPG",
  "4.jpg",
  "5.jpg",
  "6.JPG",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.JPG",
  "11.jpg",
];
let num = -1;
function slide_time() {
  if (num === 11) {
    num = 0;
  } else {
    num++;
  }
  document.getElementById("img-yaku").src = img_src[num];
}
