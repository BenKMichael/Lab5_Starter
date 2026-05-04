// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voices = speechSynthesis.getVoices();
  const voiceSelect = document.getElementById('voice-select');
  const textBox = document.getElementById('text-to-speak');
  const talkButton = document.querySelector('#explore button');
  const faceImg = document.querySelector('#explore img');

  for (const voice of voices) {
    const option = document.createElement('option');

    option.textContent = voice.name;
    option.value = voice.name;

    voiceSelect.appendChild(option);
  }

  talkButton.addEventListener('click', function(event) {

    const utterance = new SpeechSynthesisUtterance(textBox.value);
    utterance.voice = voices.find(v => v.name === voiceSelect.value);
    
    speechSynthesis.speak(utterance);

    utterance.addEventListener('start', function() {
      faceImg.src = 'assets/images/smiling-open.png';
    });

    utterance.addEventListener('end', function() {
      faceImg.src = 'assets/images/smiling.png';
    });

  });
}