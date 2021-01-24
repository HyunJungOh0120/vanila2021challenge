const toDoContainer = document.querySelector(".todobox");
const todoForm = document.querySelector(".todoform");
const todoInput = todoForm.querySelector(".todoinput");
const todoList = document.querySelector(".todolist");

const TODO_LS = "todo";

let toDos = [];

const saveTodo = function (toDos) {
  localStorage.setItem(TODO_LS, JSON.stringify(toDos));
};

const deleteTodo = function (e) {
  const btn = e.target;
  const li = btn.parentNode;

  const filteredToDos = toDos.filter((todo) => +todo.id !== +li.id);

  toDos = filteredToDos;

  todoList.removeChild(li);
  saveTodo(toDos);
};

const renderTodo = function (todo) {
  const id = Math.random();
  const html = `
        <li id="${id}">
            <button class="todolist__delBtn">❌</button>
            <span>${todo}</span>
        </li>
        `;

  const todoObj = {
    id: id,
    text: todo,
  };

  toDos.push(todoObj);
  todoList.insertAdjacentHTML("beforeend", html);

  const delBtn = document.querySelector(".todolist__delBtn");
  delBtn.addEventListener("click", deleteTodo);
};

const getTodo = function (e) {
  e.preventDefault();

  const todo = todoInput.value;
  console.log(todo);

  renderTodo(todo);
  saveTodo(toDos);

  todoInput.value = "";
};

const loadTodo = function () {
  const loadedTodo = localStorage.getItem(TODO_LS);
  todoForm.addEventListener("submit", getTodo);
  if (loadedTodo) {
    const parsedTodo = JSON.parse(loadedTodo);
    parsedTodo.forEach((todo) => renderTodo(todo.text));
  } else {
  }
};

function init() {
  loadTodo();
}

init();
