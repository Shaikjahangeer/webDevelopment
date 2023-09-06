const jokeText = document.querySelector('.jokeText');
const jokebtn = document.querySelector('.jokebtn');
const url = 'https://v2.jokeapi.dev/joke/Any?type=single';


let getJoke = () => {
  fetch(url)
    .then(data => (data.json()))
    .then(item => jokeText.innerHTML = item.joke);
}
getJoke();

jokebtn.addEventListener('click', () => {
  getJoke();
});