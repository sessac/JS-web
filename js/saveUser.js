const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const onLogin = document.querySelector("#onBottom");
const onTop = document.querySelector("#onTop");
const logout = document.querySelector("#logout");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const usernameWrote = loginInput.value;
  localStorage.setItem(USERNAME_KEY, usernameWrote);
  // greeting.innerText = "hello! " + username;
  paintGreetings(usernameWrote);
}

function paintGreetings(username) {
  greeting.innerText = `hello, ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  onBottom.classList.remove(HIDDEN_CLASSNAME);
  onTop.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}

logout.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});
