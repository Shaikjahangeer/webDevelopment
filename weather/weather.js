const APIkey = '68721ec1962cbba24b365f1b54d6fc47';
const searchParam = document.querySelector('#city');
console.log(searchParam)
const searchBtn = document.querySelector('#search-btn');
function getWeather(city) {
  console.log(city);
  this.city = city;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`)
    .then(res => res.json())
    .then(
      data => {
        result.innerHTML = `
        <h2>${data.name}</h2>
        <h4 class="weather">${data.weather[0].main}</h4>
        <h4 class="desc">${data.weather[0].description}</h4>
        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
        <h1>${data.main.temp} &#176;</h1>
        <div class="temp-container">
            <div>
                <h4 class="title">min</h4>
                <h4 class="temp">${data.main.temp_min}&#176;</h4>
            </div>
            <div>
                <h4 class="title">max</h4>
                <h4 class="temp">${data.main.temp_max}&#176;</h4>
            </div>
        </div>
        `;
      }
    ).catch(() => {
      result.innerHTML = `<h3 class="msg">City not found</h3>`;
    }
    );
}
window.addEventListener('load', () => {
  if (searchParam.length === 0) {
    result.innerHTML = `<h3 class="msg">Please enter a city name</h3>`;
  } else {
    console.log(searchParam)
    getWeather(searchParam.value);
  }
});

searchBtn.addEventListener('click', () => {
  let city = searchParam.value
  getWeather(city);
})