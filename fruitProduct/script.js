// script.js
document.addEventListener('DOMContentLoaded', () => {
    const words = ["DELICIOUS", "FRESH", "JUICY", "SWEET", "CRISP"];
    let index = 0;
    
    function changeWord() {
      const changingWordsSpan = document.getElementById('changing-words');
      changingWordsSpan.textContent = words[index];
      index = (index + 1) % words.length;
    }
    
    changeWord(); // Initial call to set the first word
    setInterval(changeWord, 2000); // Change word every 2 seconds
  });
  