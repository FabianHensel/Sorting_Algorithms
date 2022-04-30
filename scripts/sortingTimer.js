// Copyright © 2021, Fabian Hensel. All rights reserved.
// Hamburg, Germany
// 03.09.2021
// sortingTimer.js: Erstellt die Timer für die angegebenen Sortieralgorithmen mithilfe der Bibliothek EasyTimer.js
// EasyTimer.js: https://albert-gonzalez.github.io/easytimer.js/

// Erzeugung des Timers für die verschiedenen Sortieralgorithmen
let timerSorting = new easytimer.Timer();

let startIsPressed = false;
let stopIsPressed = false;
let pauseIsPressed = false;
let resetIsPressed = false;

// Zählt wie oft Start gedrückt wurde
let startCount = 0;

// Visualisierung des Sortierungsprozesses
let sortingProcess;

// Timer Funktionen
// Start Funktion 
function startSorting() {
    startIsPressed = true;

    function startSortingFunctionality() {
        pauseIsPressed = false;
        
        timerSorting.start({precision: 'secondTenths'});
        // Solange Start nur einmal gedrückt wurde oder zwischenzeitlich pause gedrückt wird, kann der Sortiervorgang starten
        if (startCount < 1) {
            unsorted.remove();
            sortingProcess = new p5(unsortedBarsSorting);   
        }
        // Bei Beendigung des Sortiervorgangs, kann der Timer nicht neu gestartet werden, erst wenn wieder ein unsortiertes Diagramm vorliegt
        else if (isReady) {
            timerSorting.stop();
        }
        // changedTimeInMs siehe valueChange.js
        timeInMs = changedTimeInMs;
        sortingProcess.loop();
        startCount++;
    }

    if (isPressedSelectionsort) {
        startSortingFunctionality();
    } 
    else if (isPressedInsertionsort) {
        startSortingFunctionality();
    } 
    else if (isPressedBubblesort) {
        startSortingFunctionality();
    }
    else if (isPressedQuicksort) {
        startSortingFunctionality();
    }
}

// Pause Funktion
function pauseSorting() {
    pauseIsPressed = true;

    function pauseSortingFunctionality() {
        if (isSorting) {
            timerSorting.pause();
            startIsPressed = false;
            // Sortieren wird verlangsamt und p5.js draw() wird pausiert
            timeInMs = 1000;
            sortingProcess.noLoop();
            startCount = 1;
        }
    }

    if (isPressedSelectionsort) {
        pauseSortingFunctionality();
    }
    else if (isPressedInsertionsort) {
        pauseSortingFunctionality();
    }
    else if (isPressedBubblesort) {
        pauseSortingFunctionality();
    }
    else if (isPressedQuicksort) {
        pauseSortingFunctionality();
    }      
}
  
// Stop Funktion
function newSorting() {

    function newSortingFunctionality() {
        document.getElementById('sortingTimeValue').innerHTML = '00:00:0';

        // Bei Fertigstellung des Sortierens kann das Diagramm entfernt werden, ansonsten wird das unsortierte Diagramm entfernt
        if (isReady)
            sortingProcess.remove();
        else
            unsorted.remove();
        
        timerSorting.stop();

        stopIsPressed = true;
        startIsPressed = false;
        resetIsPressed = false;

        isReady = false;

        startCount = 0;

        unsorted = new p5(unsortedBars);
    }

    // Wenn der Algorithmus durchlaufen wurde oder nicht sortiert, kann ein neues Diagramm erstellt werden
    if (isPressedSelectionsort && !isSorting) {
        newSortingFunctionality();
    }   
    else if (isPressedInsertionsort && !isSorting) {
        newSortingFunctionality();
    }
    else if (isPressedBubblesort && !isSorting) {
        newSortingFunctionality();
    }
    else if (isPressedQuicksort && !isSorting) {
        newSortingFunctionality();
    }

    // Im Startscreen kann ebenfalls ein neues Diagramm erstellt werden
    if (!isPressedSelectionsort && !isPressedInsertionsort && !isPressedBubblesort && !isPressedQuicksort) {
        unsorted.remove();

        resetIsPressed = false;

        unsorted = new p5(unsortedBars);
    }
}
 
// Reset Funktion
function resetSorting() {

    function resetSortingFunctionality() {
        document.getElementById('sortingTimeValue').innerHTML = '00:00:0';

        // Sortiertes Diagramm wird entfernt
        sortingProcess.remove();

        timerSorting.stop();

        resetIsPressed = true;
        startIsPressed = false;
        stopIsPressed = false;

        isReady = false;

        startCount = 0;

        // Zuletzt erstelltes Diagramm wird unsortiert resetted (siehe unsortedBars.js)
        unsorted = new p5(unsortedBars);
    }

    // Das Diagramm kann resetted werden, wenn der Algorithmus durchlaufen wurde (isReady)
    if (isPressedSelectionsort && isReady) {
        resetSortingFunctionality();
    }
    else if (isPressedInsertionsort && isReady) {
        resetSortingFunctionality();
    }
    else if (isPressedBubblesort && isReady) {
        resetSortingFunctionality();
    }
    else if (isPressedQuicksort && isReady) {
        resetSortingFunctionality();
    }
}
    
// Ausgabe der Zeitmessung 
timerSorting.addEventListener('secondTenthsUpdated', function() {
    document.getElementById('sortingTimeValue').innerHTML = timerSorting.getTimeValues().toString(['minutes', 'seconds', 'secondTenths']);
});
