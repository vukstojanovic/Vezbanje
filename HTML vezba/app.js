const target = document.getElementById("target");
const source = document.getElementById("source");
const text = document.getElementById("text");

// source.addEventListener("drag", drag);
// source.addEventListener("dragend", dragEnd);

target.addEventListener("drop", dropElement);
target.addEventListener("dragover", allowDrop);

function allowDrop(e) {
  e.preventDefault();
}

function dropElement(e) {
  // e.preventDefault();
  const appendEl = e.dataTransfer.getData("text");
  e.target.appendChild(source);
}

// console log proba

const textList = [
  "Hello, i am User_Freindly",
  "Working as a Freelancer",
  "Serbian designer",
];

function printText() {
  const text = document.getElementById("text");
  let sentenceIndex = 0;
  let wordIndex = 0;

  const myInterval = setInterval(() => {
    const currentSentence = textList[sentenceIndex];
    text.innerHTML = currentSentence.slice(0, wordIndex + 1);
    wordIndex++;
    if (wordIndex === currentSentence.length) {
      const deleteInterval = setInterval(() => {
        text.innerHTML = currentSentence.slice(0, wordIndex);
        wordIndex--;
        if (wordIndex < 0) {
          sentenceIndex++;
          if (sentenceIndex >= textList.length) {
            sentenceIndex = 0;
          }
          wordIndex = 0;
          clearInterval(deleteInterval);
        }
      }, 10);
    }
  }, 350);
}

printText();
