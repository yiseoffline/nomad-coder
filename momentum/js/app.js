const loginInput=document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY="username";

function onLoginSubmit(event)
{
    event.preventDefault(); //browser의 기본 동작을 막아줌
    loginForm.classList.add(HIDDEN_CLASSNAME); //form 을 다신 숨겨준다
    const username=loginInput.value; //loginInput.value을 username이라는 변수로 저장
    localStorage.setItem(USERNAME_KEY,username);//username 값을 username이라는 key와 함께 local storage에 저장
    paintGreetings(username); //paintGreetings 함수 호출
}
function paintGreetings(username)
{
    greeting.innerText="Hello "+username;//비어있는 h1 요소 안에 "Hello "+username라는 text추가
    greeting.classList.remove(HIDDEN_CLASSNAME);//h1요소로부터 hidden이란느 클래스 제거
}
const savedUsername=localStorage.getItem(USERNAME_KEY);
//유저 정보가 local storage에 없다면 null을 반환하자
if(savedUsername===null){ 
    //savedUsername 값이 null 이라면 form의 hidden class를 지워서 form이 화면에 표시되게 해줌
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}
else{
    paintGreetings(savedUsername); //화면에 출력
}