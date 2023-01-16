const clock = document.querySelector("h2#clock");

// >> interval

function getClock() {
    const date = new Date(); // new Date(); >> 현재의 시간을 알려줌
    const hours = String(date.getHours()).padStart(2, "0"); // string으로 변환
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    // id = clock에 주입
    clock.innerText = (`${hours}:${minutes}:${seconds}`);
};
// 웹사이트가 새로고침이 되어도 바로 실행되도록 호출
getClock();
// 5000msec(5sec) 시간 차로 sayHello function 호출
setInterval(getClock, 1000);

// setTimeout();
// 차이점 ?
// setTimeout(sayHello, 5000);

// padStart(maxlength,"0") >> 길이는 2의 string으로 만들건데 앞에 없으면 0을 채워라.
// padEnd >> 뒤로 채움

// 선택된 모두 선택 ctrl + d + click

// ----------------------practice--------------------
// or?
/*
function sayHello() {
    clock.innerText = new Date().toLocaleTimeString();
}
sayHello();
setInterval(sayHello, 1000);
-------------------------------------------------------*/
