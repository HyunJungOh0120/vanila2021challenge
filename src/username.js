const beforeLogin = document.querySelector(".beforelogin");
const afterLogin = document.querySelector(".afterlogin");

const nameContainer = document.querySelector(".username");
const nameForm = document.querySelector(".username__form");
const nameInput = document.querySelector(".username__input");
const submitBtn = document.querySelector(".username__button");

const nameCard = document.querySelector(".username__name");

const USER_LS = "username";

////////////////////////////////////////////////////////////////////
const saveName = function (text) {
  localStorage.setItem(USER_LS, text);
};

const getTimeline = function () {
  let timeLine;
  const now = new Date();
  const hour = now.getHours();

  if (hour > 3 && hour <= 11) {
    timeLine = "morning";
  } else if (hour > 11 && hour <= 17) {
    timeLine = "afternoon";
  } else if (hour > 17 && hour <= 20) {
    timeLine = "evening";
  } else {
    timeLine = "night";
  }

  return timeLine;
};

const renderName = function (text) {
  const timing = getTimeline();

  nameCard.textContent = `Good ${timing}, ${text}. `;

  beforeLogin.classList.add("hidden");
  nameForm.classList.add("hidden");

  afterLogin.classList.remove("hidden");
  nameCard.classList.remove("hidden");
};

const askName = function (e) {
  e.preventDefault();
  if (!nameInput.value) return;

  const currName = nameInput.value.toUpperCase();
  renderName(currName);
  saveName(currName);
};

////////////////////////////////////////////////////////////////////
function init() {
  const loadedName = localStorage.getItem(USER_LS);
  /// 만약에 이름이 있다면? 로컬에?
  if (loadedName) {
    renderName(loadedName);
  }
  /// 로컬에 이름이 없다면?
  else {
    nameForm.addEventListener("submit", askName);
    submitBtn.addEventListener("click", askName);
  }
}

init();
