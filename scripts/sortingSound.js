// Copyright © 2021, Fabian Hensel. All rights reserved.
// Hamburg, Germany
// 03.09.2021
// sortingSound.js: Erzeugt den Sortierton

let context = new AudioContext();
// Oszillator
let oscillatorNode;
// Lautstärke
let gainNode;

// Erstellt und startet einen Oszillator
function audioSorting() {
    oscillatorNode = context.createOscillator();
    gainNode = context.createGain();
    // Bei Betätigen des Stumm Switch wird die Lautstärke auf 0 gesetzt
    if (document.getElementById('soundMute').checked == true)
        gainNode.gain.value = 0;
    else {
        gainNode.gain.value = 0.25;
    }
    oscillatorNode.connect(gainNode);
    gainNode.connect(context.destination);
    oscillatorNode.start(context.currentTime);
}