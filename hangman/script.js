const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const figureParts = document.querySelectorAll('.figure-part');

const words = ['application', 'programming', 'interface', 'wizard'];

let selectedWord = words[Math.floor(Math.random() * words.length)];
console.log(selectedWord);

const correctLetters = [];
const wrongLetters = [];

// Show hidden word
function displayWord() {
  wordEl.innerHTML = `
      ${selectedWord
    .split('')
    .map(letter => `
      <span class="letter">
      ${correctLetters.includes(letter) ? letter : ''}
        </span>
      `
    ).join('')}
    `;
  const innerWord = wordEl.innerText.replace(/\n/g, '');

  if (innerWord === selectedWord) {
    finalMessage.innerText = 'Congratulations! you won! 😃';
    popup.style.display = 'flex';
  }
}

// Keydown letter press
window.addEventListener('keydown', (event) => {
  // console.log(event.keyCode);
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    const letter = event.key;

    if (selectedWord.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        correctLetters.push(letter);

        displayWord();
      } else {
        console.log('Wrong');
      }
    } else {
      if (!wrongLetters.includes(letter)) {
        wrongLetters.push(letter);

        updateWrongLettersEl();
      } else {
        showNotification();
      }
    }
  }
});

function showNotification() {

}

function updateWrongLettersEl() {

}

displayWord();

