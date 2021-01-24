const body = document.querySelector("body");
const imgContainer = document.querySelector(".imgBox");
const afterloginPage = document.querySelector(".afterlogin");

const IMAGE_NUM = 11;
const getRandomNum = function () {
  const num = Math.floor(Math.random() * IMAGE_NUM) + 1;
  return num;
};

const paintImg = function (imgNum) {
  const img = new Image();
  img.src = `images/${imgNum}.jpg`;
  img.classList.add("beforeImg");

  imgContainer.appendChild(img);
};

const backImg = function (imgNum) {
  const img = new Image();
  img.src = `images/${imgNum}.jpg`;

  afterloginPage.style.backgroundImage = `url("../images/${imgNum}.jpg")`;
};

function init() {
  const loadedName = localStorage.getItem("username");
  const randomNum = getRandomNum();

  if (!loadedName) {
    paintImg(randomNum);
  } else {
    backImg(randomNum);
  }
}

init();
