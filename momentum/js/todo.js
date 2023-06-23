const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoLlist= document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos()
{
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos)); //local storage에 toDos 집어넣기
}

function deleteToDo(event)
{
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    //우리가 클릭한 li.id와 다른 toDo는 남겨두고 싶음
    //li.id = string type but toDo.id = number type
    saveToDos();
}

function paintToDo(newTodo) //object 받기
{
    const li = document.createElement("li"); //create li
    li.id=newTodo.id;
    const span = document.createElement("span"); //create span
    span.innerText = newTodo.text; //put some text(=newTodo) inside the span 
    const button = document.createElement("button");
    button.innerText="X"; //change button text
    button.addEventListener("click",deleteToDo);
    li.appendChild(span); //li는 span이라는 자식을 가짐 (put span into li)
    li.appendChild(button); 
    toDoLlist.appendChild(li); //li를 todolist에 추가
}

function handleToDoSubmit(event)
{
    event.preventDefault();
    const newTodo = toDoInput.value; //input의 현재 value를 새로운 변수에 복사
    toDoInput.value=""; //입력 칸 비우기
    const newTodoObj = {
        text:newTodo,
        id:Date.now(), //each li item 을 구별하기 위해
    };
    toDos.push(newTodoObj); //push newTodo to toDos object
    paintToDo(newTodoObj); //toDo 객체를 화면에 그리기
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY); //localStorage에 todos 받기 

if(savedToDos!==null){ //sometimes null이 나오기 때문에
    const parsedToDos =  JSON.parse(savedToDos); // array로 바꾸기
    toDos = parsedToDos; //이전꺼 까지 저장해주기
    parsedToDos.forEach(paintToDo); 
    //forEach = function실행시켜 주는데 array에 있는 각각의 element에 실행시켜줌
}