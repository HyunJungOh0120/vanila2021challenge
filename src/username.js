const nameContainer = document.querySelector(".username");
const nameForm = nameContainer.querySelector(".username__form");
const nameInput = nameForm.querySelector(".username__input");
const submitBtn = nameForm.querySelector(".username__button");

const nameWritten = nameContainer.querySelector(".username__name");

const USER_LS = "username";

////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////
function init() {
  const loadedName = localStorage.getItem(USER_LS);
  /// 만약에 이름이 있다면? 로컬에?
  if (loadedName) {
  }
  /// 로컬에 이름이 없다면?
  else {
    nameForm.addEventListener("submit", askName);
  }
}

init();
