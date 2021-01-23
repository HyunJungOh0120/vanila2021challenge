const clockContainer = document.querySelector(".nav__timeline");
const clockTime = clockContainer.querySelector(".nav__timeline--time");
const clockDate = clockContainer.querySelector(".nav__timeline--date");

const dayConvert = function (dayNum) {
  if (dayNum === 1) {
    return "Mon";
  }
  if (dayNum === 2) {
    return "Tue";
  }
  if (dayNum === 3) {
    return "Wed";
  }
  if (dayNum === 4) {
    return "Thu";
  }
  if (dayNum === 5) {
    return "Fri";
  }
  if (dayNum === 6) {
    return "Sat";
  }
  if (dayNum === 7) {
    return "Sun";
  }
};

const getTime = function () {
  const now = new Date();

  const date = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();
  const dayNum = now.getDay();
  const hour = now.getHours();
  const min = now.getMinutes();
  const second = now.getSeconds();

  const dayWord = dayConvert(dayNum);

  clockTime.textContent = `${hour
    .toString()
    .padStart(2, 0)}:${min
    .toString()
    .padStart(2, 0)}:${second.toString().padStart(2, 0)}`;
  clockDate.textContent = `${dayWord}, ${date}.${month}.${year
    .toString()
    .slice(2)}`;
};

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
