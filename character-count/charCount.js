const textareaE1 = document.querySelector('.input');
const charCountE1 = document.querySelector('.char-count');
const remCountE1 = document.querySelector('.rem-count');

textareaE1.addEventListener('keydown', () => {
  if (textareaE1.value.length < 50) {
    let charCount = +charCountE1.innerText;
    let remCount = +remCountE1.innerText;
    console.log(charCount, typeof charCount);
    charCount++;
    remCount--;
    charCountE1.innerText = charCount;
    remCountE1.innerText = remCount;
  }
});