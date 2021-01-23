const nameContainer = document.querySelector(".username");
const nameForm = nameContainer.querySelector(".username__form");
const nameInput = nameForm.querySelector(".username__input");
const submitBtn = nameForm.querySelector(".username__button");

const nameCard = nameContainer.querySelector(".username__name");

const USER_LS = "username";

////////////////////////////////////////////////////////////////////
const saveName = function (text) {
  localStorage.setItem(USER_LS, text);
};

const renderName = function (text) {
  nameCard.textContent = `HI, ${text} 😁`;

  nameForm.classList.add("hidden");
  nameCard.classList.remove("hidden");
};

const askName = function (e) {
  e.preventDefault();

  const currName = nameInput.value.toUpperCase();
  renderName(currName);
  saveName(currName);
};

////////////////////////////////////////////////////////////////////
function init() {
  const loadedName = localStorage.getItem(USER_LS);
  /// 만약에 이름이 있다면? 로컬에?
  if (loadedName) {
    console.log(typeof loadedName);
    renderName(loadedName);
  }
  /// 로컬에 이름이 없다면?
  else {
    nameForm.addEventListener("submit", askName);
    submitBtn.addEventListener("click", askName);
  }
}

init();
