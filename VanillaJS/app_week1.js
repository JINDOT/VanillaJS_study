/*
// log or print = ()안에 값을 출력, number, text 다 가능
//  text는 '' 사이에 집어넣어야함
console.log(5 + 2);
console.log(5 * 2);
console.log(5 / 2);

// 값을 변경하고 싶다면??
// const : 변하지 않는 값, 유지값
// let : const와 달리 update 가능
const a = 5;
const b = 2;
let mName = "jindot"; // text

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + mName);

mName = "jindott";
console.log("My Name is " + mName);
*/
/*
// var : 언제 어디서든 업데이트가 가능하다.
//       하지만 언어 보호를 받지를 못한다.
var a = 5;
var b = 2;
var mName = "jindot"; // text

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + mName);

mName = "jindott";
console.log("My Name is " + mName);
*/

/*
// Booleans : ture? or False?
//            null? nothing value
//            undefined? 메모리에 var은 있지만 값이 없음
const imStupid = false;
console.log(iStupid);
*/

/*
// arrays : 배열
const mon = "monday";
const tue = "tuesday";
const wed = "wednesday";
const thu = "thursday";
const fri = "friday";
const sat = "saturday";
const sun = "sunday";

// list 그룹화
const dWeek = [mon, tue, wed, thu, fri, sat, sun];
const ranDom = [1, 5, "jindot", false, null, undefined];

//console.log(dWeek, ranDom);

// list에 원하는 값을 가져오고 싶다
console.log(dWeek[4]);
*/

/*
const dWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
console.log(dWeek);

// 값을 추가하고 싶다
dWeek.push("sun");
console.log(dWeek);
*/
/*
const mName = "jindot";
const mBirth = 1994;
const amiMan = ture;
const amI = ["jindot", 1994, ture];
*/
// Object를 만들어보자
// property = value
// amI[0] == name, [1] == birth, [2] == man?
/*
const amI = {
    name: "jindot",
    birth: 1994,
    man: true
};
console.log(amI);
console.log(amI.name);

// object update 하고 싶다
amI.birth = 1995;
console.log(amI);

// object add 하고 싶다
amI.age = 29;
console.log(amI);
*/

// function
// function funcName(argu,argu...)
/*
function iAm(myName, age) {
    console.log("my name is " + myName + " and i'm " + age);
}

iAm("jindot", 29);
iAm("Jo", 30);
*/
/*
function plus(a, b) {
    console.log(a + b);
}
plus(11, 7);

function divide(a, b) {
    console.log(a / b);
}
divide(6, 3);
*/
// object 와 섞어보자
/*
const iAm = {
    name: "jindot",
    age: function (myAge) {
        console.log("i'm " + myAge);
    },
};

iAm.age(29);
*/
/*
const calc = {
    plus: function (a, b) {
        return a + b;
    },

    minus: function (a, b) {
        return a - b;
    },

    multiply: function (a, b) {
        return a * b;
    },

    divide: function (a, b) {
        return a / b;
    },

    square: function (a, b) {
        return a ** b;
    },
};

const plusResult = calc.plus(9, 4);
const minusResult = calc.minus(plusResult, 5);
const mulResult = calc.multiply(minusResult, 2);
const divideResult = calc.divide(100, mulResult);
const squareResult = calc.square(divideResult, 1000);
*/

/*
const age = 29;
function calAge(wAge) {
    return wAge + 2;
};

const kAge = calAge(age);
// calAge 실행 > age 29 > 함수실행(age=31) > return age(age=31)
console.log(kAge);
*/

// conditional : if, else
/*
const age = prompt("Age ?"); // prompt 사용자에게 메세지를 띄어줌(요즘은 각자 css로 개발한 것을 씀)

parseInt(); // string -> int 타입변환


console.log(age);
console.log(typeof age); // 자료형 확인
*/
/*const age = prompt("Age ?");
console.log(age, parseInt(age)); // 첫 번째 String, 두 번째 ing
*/
/*
// 변환된 문자가 숫자형이 맞는지 확인
const age = parseInt(prompt("Age ?"));
console.log(age);
*/
/*
const age = parseInt(prompt("Age ?"));
console.log(isNaN(age)); // boolean 값으로 변환
// age의 값이 NaN 이니??
*/

// if, else 문
// 1
/*const age = parseInt(prompt("Age ?"));
if (isNaN(age)) {// 문자일 경우
    console.log("Only Number");
} else {
    console.log("Your age is " + age);
}*/

// 2 else if
/*
const age = parseInt(prompt("Age ?"));
if (isNaN(age)) {// 문자일 경우
    console.log("Only Number");
} else if (age <= 19) {
    console.log("Nope ");
} else {
    console.log("Possible");
}
*/
/*
// 3 &&(and) ||(or)
const age = parseInt(prompt("Age ?"));
if (isNaN(age) || age < 0) {// 문자일 경우, 음수일 경우
    console.log("Only Number");
} else if (age <= 19) {
    console.log("Nope ");
} else if (age > 19 && age <= 50) {
    console.log("PossiblE")
} else {
    console.log("Go Home");
}

// = (value), ===(value check), !==(value not check)
*/

//------------------------------------------------------------
// Document Object
// document : 모든 시작점
// Console에서 document의 모든 요소 확인해보자

/*
// HTML in JavaScript
const title = document.getElementById("title");
title.innerText = "Study Hard";

console.log(title.id);
console.log(title.classname);
*/

// Searching For Elements
/*
// 클래스 이름이 hello 인 것을 찾아 hellos에 저장
const hellos = document.getElementsByClassName("hello");
console.log(hellos);
*/

/*
// div?
const title = document.getElementsByTagName("h1");
console.log(title);
*/

//querySelector : element를 css방식으로 검색할 수 있다.
// 단 하나의 엘리먼트를 리턴해줌
// hello h1이 여러기가 있더라도 처음 element만 가져옴
// quertSelectorAll 을 사용한다면 list로 전체 검색
//const title2 = document.querySelector(".hello h1");
//console.log(title2);

// Events
// javaScript Object에 on~~~ 이 Events
/*
const title = document.querySelector(".hello h1");
// Listener == 말 그대로 듣는 입장
function handleTitleClick() {
    console.log("title was clicked");
}
title.addEventListener("click", handleTitleClick); // click을 listen

//h1 html element mdn > Web APIs
// console.dir >> what can i use event
*/

/*
// MouseEnter
// MouseLeave
const title = document.querySelector(".hello h1");
function handleMouseEnter() {
    title.innerText = "Here!"
}
function handleMouseLeave() {
    title.innerText = "BYE!"
}

title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
*/

// Other Event
// onclick >> if you click the mouse left button
// window event
/*
const title = document.querySelector(".hello h1");
function handleMouseEnter() {
    title.innerText = "Here!"
}
function handleMouseLeave() {
    title.innerText = "BYE!"
}
function handlewindowResize() {
    document.body.style.backgroundColor = "black";
}
function handlewindowCopy() {
    alert("NOPE!");
}
function handlewindowOffline() {
    alert("Please connect Wifi");
}
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
window.addEventListener("resize", handlewindowResize);
window.addEventListener("copy", handlewindowCopy);
window.addEventListener("offline", handlewindowOffline);
*/
/*
// day4 HW
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const title = document.querySelector("h2");
const superEvnet = {
    title: document.querySelector("h2"),

    mEnter: function mouseEnter() {
        title.innerText = "Mouse on";
    },
    mLeave: function mouseLeave() {
        title.innerText = "Mouse off";
    },
    wResize: function windowResiz() {
        document.body.style.backgroundColor = colors[1];
    },

    wCm: function windowCm() {
        document.body.style.backgroundColor = colors[2];
    },


};


title.addEventListener("mouseenter", superEvnet.mEnter);
title.addEventListener("mouseleave", superEvnet.mLeave);
window.addEventListener("resize", superEvnet.wResize);
window.addEventListener("contextmenu", superEvnet.wCm);
*/
//-DAY5--------------------------------------------------------------
// css
// event progress
/*
// 1. Find Element 2. Event listen  3. React Event
const h1 = document.querySelector("div.hello:first-child h1"); // 1
function handleTitleClick() { // 3
    // color 저장
    const currentColor = h1.style.color;
    let newColor; // null

    if (currentColor == "blue") {
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick); // 2
*/

// css로 바꿔보자
/*
// 1.
const h1 = document.querySelector("div.hello:first-child h1");
function handleTitleClick() {
    h1.className = "active"; // css에 .active에 반응
};

h1.addEventListener("click", handleTitleClick);
*/

/*
// 2. className 바꿔보자
// className을 함부로 바꾸면 전체적으로 수정해줘야한다.
// javascript로 모든 class name을 변경하지 말아야한다.
const h1 = document.querySelector("div.hello:first-child h1");
const clickedClass = "clicked";
function handleTitleClick() {
    if (h1.className === "clickedClass") {
        h1.className = "";
    } else {
        h1.className = "clickedClass";
    }
};

h1.addEventListener("click", handleTitleClick);
*/
/*
// 3. 2번의 경우 html의 기존 classname이 날라간다. 그렇다면 ?
const h1 = document.querySelector("div.hello:first-child h1");
function handleTitleClick() {
    const clickedClass = "clicked";

    if (h1.classList.contains(clickedClass)) { // classList 사용
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    }
};
h1.addEventListener("click", handleTitleClick);
*/

// 4. toggle (3을 1줄로 !)
/*
const h1 = document.querySelector("div.hello:first-child h1");
function handleTitleClick() {
    h1.classList.toggle("clicked");
};

h1.addEventListener("click", handleTitleClick); 
*/

