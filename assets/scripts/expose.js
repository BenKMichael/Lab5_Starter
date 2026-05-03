// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const hornImg = document.querySelector('#expose img');
  const hornAudio = document.querySelector('#expose audio');
  const playButton = document.querySelector('#expose button');
  const volumeSlider = document.querySelector('#volume-controls input');
  const volumeImg = document.querySelector('#volume-controls img');
  const jsConfetti = new JSConfetti();

  hornSelect.addEventListener('change', function(event) {
    const horn = event.target.value;

    if (horn === "air-horn") {
      hornImg.src = 'assets/images/air-horn.svg';
      hornAudio.src = 'assets/audio/air-horn.mp3';
    } else if (horn === 'car-horn') {
      hornImg.src = 'assets/images/car-horn.svg';
      hornAudio.src = 'assets/audio/car-horn.mp3';
    } else {
      hornImg.src = 'assets/images/party-horn.svg';
      hornAudio.src = 'assets/audio/party-horn.mp3';
    }

  });

  playButton.addEventListener('click', function() {
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
    hornAudio.play();
  });

  volumeSlider.addEventListener('input', function(event) {
    const volume = Number(event.target.value);

    if (volume === 0) {
      volumeImg.src = 'assets/icons/volume-level-0.svg';
    } else if (volume < 33) {
      volumeImg.src = 'assets/icons/volume-level-1.svg';
    } else if (volume < 67) {
      volumeImg.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeImg.src = 'assets/icons/volume-level-3.svg';
    }
    hornAudio.volume = volume / 100;
  });
}