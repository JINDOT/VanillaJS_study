/*
const loginForm = document.querySelector("#login-form");
// querySelector 의 사용 경우 명확히 포인터를 가져가야한다.

// login-form 안에 input과 button을 가져온다.
const loginInput = loginForm.querySelector("input")
const loginButton = loginForm.querySelector("button")
*/
// 위를 다른 방식
/*
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");


// button 활성화
function onLoginBtnClick() {
    const username = loginInput.value;
    if (username == "") {
        alert("please write your name");
    } else if (usename.length > 10) {
        alert("it's wrong name type");
    };

};
loginButton.addEventListener("click", onLoginBtnClick);
*/

// form을 submit할 때 입력값을 받아낸다.(event 감지)
// 바로 새로고침이 되는 모습을 볼 수 있다. = 기본적인 브라우저 프로그램의 기능
// 브라우저는 onLoginSubmit을 호출하고
/*
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
function onLoginSubmit() {
    const username = loginInput.value;
    console.log(username);
};

loginForm.addEventListener("submit", onLoginSubmit)
*/

// 새로고침이 안되게 바뀌려면
/*
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");
function onLoginSubmit(event) {
    event.preventDefault(); // preventDefault라는 함수로 새로고침 기능을 차단
    console.log(loginInput.value);
}

function handleLinkClick(event) { // 2. 함수 실행 , 3. 해당링크로 넘어감
    event.preventDefault(); // 걸어두는 순간 실행되는 것을 차단함
    console.log(event);
    alert("link")
}
loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick) // 1. 클릭 이벤트 함수 실행
*/

// Getting User Name.
// 무언가 잘못되었다. 화면 넘어가는 동안 remove 작동이 안되는 거 같다.
/*
const loginForm = document.querySelector("#login-form"); // id
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add("HIDDEN_CLASSNAME"); 여기서 값을 단순 스트링으로 보내줌;
    const username = loginInput.value;
    // ` string ${value name} string `
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove("HIDDEN_CLASSNAME");
}
loginForm.addEventListener("submit", onLoginSubmit);
*/
/*
const loginForm = document.querySelector("#login-form"); // id
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
};

loginForm.addEventListener("submit", onLoginSubmit);
*/

// Saving Username
/*
// localStorage >> 브라우저에 무언가를 저장시켜줌
// setItem >> 저장시켜주는 메소드
// getItem, removeItem >> select, remove value
const loginForm = document.querySelector("#login-form"); // id
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem("username", username);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
};

loginForm.addEventListener("submit", onLoginSubmit);
*/

// Loading Username
// >> check value ==> getItem

const loginForm = document.querySelector("#login-form"); // id
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
};

function paintGreetings(username) { // username을 인자로 받는 함수
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
};
































