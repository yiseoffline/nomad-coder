const API_KEY = "7225b239251c7729012dd9d355bcc2c0"; //내 api key값

function onGeoOk(position)
{
    const lat = position.coords.latitude; //내 현재 위도를 받아옴
    const lon = position.coords.longitude; //내 현재 경도를 받아옴
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data =>{
        const weather = document.querySelector("#weather span:first-child") //span에서 날씨를 줄거임
        const city = document.querySelector("#weather span:last-child") //span에서 날씨를 줄거임
        city.innerText = data.name; 
        weather.innerText = `${data.weather[0].main}/${data.main.temp}`; //weather은 배열이라 이렇게 해줘야한다
    }); //js가 url을 부르는거
}

function onGeoError()
{
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
// argument는 1번 잘 됐을 때 실행될 함수, 2번 오류날 때 실행될 함수