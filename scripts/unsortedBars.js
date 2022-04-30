// Copyright © 2021, Fabian Hensel. All rights reserved.
// Hamburg, Germany
// 03.09.2021
// unsortedBars.js: Visuelle Darstellung der verschiedenen Sortieralgorithmen mithilfe der p5.js Bibliothek
// p5.js: https://p5js.org/

// Breite der Balken des Diagramms, bestimmt die Anzahl der Elemente, Startwert = 5
let barsWidth = 5;

// Speichert die Zustände des Sortiervorgangs, gegebene Zustände sind -1 für grün, 0 für rot und 1 für blau
let states = [];

// Speichert die Werte des zu sortierenden Diagramms
let values = [];

// Speichert die Startwerte des zuletzt neu erstellten zu sortierenden Diagramms
let startValues = [];

// Visualisierung der unsortierten Werte 
let unsorted;

// Messung der benötigten Zeit
let startTime, endTime, totalTime;

// Stellt sicher, das wirklich das zuletzt neu erstellte Diagramm zurückgesetzt wird
let countUnsortedBars = 0;

// Variable die prüft, ob der Algorithmus vollständig durchlaufen wurde
let isReady = false;

// Variable die prüft, ob gerade sortiert wird
let isSorting = false;

// Erstellt ein Diagramm von unsortieren Balken 
let unsortedBars = function(p) {

    p.setup = function() {
        p.createCanvas(innerWidth, innerHeight-192);

        // Größe des Arrays abhängig von der Breite des Bildschirms und der Balkenbreite
        values = new Array(p.floor(p.width / barsWidth));
        // Die Länge von startValues muss immer der Länge von values entsprechen, damit beim resetten keine verfälschten Diagramme gezeichnet werden
        startValues.length = values.length;

        document.getElementById('toSortingElements').innerHTML = "Elements: " + values.length;
        document.getElementById('windowSize').innerHTML = "Window Size: " + innerWidth + "/" + innerHeight;

        // Werte bei Programmstart
        if (!stopIsPressed && !resetIsPressed) {
            p.fillArray();
            countUnsortedBars = -1;
        }
        // Resetted das Diagramm
        else if (resetIsPressed && !stopIsPressed) {
            for (let i = 0; i < startValues.length; i++) {
                values[i] = startValues[i];
            }
            countUnsortedBars = -1;
        }
        // Erstellt neues Diagramm
        else if (stopIsPressed && !resetIsPressed) {
            p.fillArray();
            countUnsortedBars = -1;
        }
        countUnsortedBars++;

        // console.log(values);
        p.frameRate(60);
    }
    
    p.draw = function() {
        p.background(0);
        p.bars();
    }

    // Befüllt das Array values und startValues
    p.fillArray = function() {
        for (let i = 0; i < values.length; i++) {
            values[i] = p.random(p.height-30);
            if (countUnsortedBars < 1)
                startValues[i] = values[i];
            states[i] = -1; 
        }
    }

    // Zeichnet die Balken
    p.bars = function() {
        // Das unsortierte Diagramm wird grün dargestellt
        for (let i = 0; i < values.length; i++) {
            p.stroke(0);
            p.fill(255);
            if (states[i] == -1) {
                p.fill(0, 255, 0);
            }
            else {
                p.fill(0, 255, 0);
            }
            p.rect(i * barsWidth, p.height - values[i], barsWidth, values[i]);
        }
    }
}
// Zu Beginn des Programms zu sehen
unsorted = new p5(unsortedBars);

// Visualisiert das Diagramm während es sortiert wird
let unsortedBarsSorting = function(p) {

    p.setup = async function() {
        p.createCanvas(innerWidth, innerHeight - 192);

        countSwaps = 0;
        document.getElementById('countSwaps').innerHTML = "Swaps: ";

        // Selectionsort-----------------------------------------------------
        if (isPressedSelectionsort && startIsPressed) {
            document.getElementById('countRekursivCalls').innerHTML = "0";
            isSorting = true;
            startTime = performance.now();

            // Wenn RTS-Button true ist, dann wird in Echtzeit sortiert
            if (document.getElementById('rtsOnOff').checked == true) {
                await selectionsortRealTime(values);
            }
            else {
                audioSorting();
                await selectionsort(values);
                oscillatorNode.stop(context.currentTime);
            }

            endTime = performance.now();
            timerSorting.stop();
            isSorting = false;
        }
        // ------------------------------------------------------------------

        // Insertionsort-----------------------------------------------------
        else if (isPressedInsertionsort && startIsPressed) {
            document.getElementById('countRekursivCalls').innerHTML = "0";
            isSorting = true;
            startTime = performance.now();

            if (document.getElementById('rtsOnOff').checked == true) {
                await insertionsortRealTime(values);
            }
            else {
                audioSorting();
                await insertionsort(values);
                oscillatorNode.stop(context.currentTime);
            }

            endTime = performance.now();
            timerSorting.stop();
            isSorting = false;
        }
        // ------------------------------------------------------------------

        // Bubblesort--------------------------------------------------------
        else if (isPressedBubblesort && startIsPressed) {
            document.getElementById('countRekursivCalls').innerHTML = "0";
            isSorting = true;
            startTime = performance.now();

            if (document.getElementById('rtsOnOff').checked == true) {
                await bubblesortRealTime(values);
            }
            else {
                audioSorting();
                await bubblesort(values);
                oscillatorNode.stop(context.currentTime);
            }

            endTime = performance.now();
            timerSorting.stop();
            isSorting = false;
        }
        // ------------------------------------------------------------------

        // Quicksort---------------------------------------------------------
        else if (isPressedQuicksort && startIsPressed) {
            countRekursivCalls = -1;
            isSorting = true;
            startTime = performance.now();

            // Wenn der Version wahr ist, dann wird Quicksort Version 2 zum sortieren verwendet
            if (document.getElementById('rtsOnOff').checked == true && document.getElementById('versionChange').checked == true) {
                await quicksortRealTimeVersion2(values, 0, values.length - 1);
            }
            else if (document.getElementById('rtsOnOff').checked == true) {
                await quicksortRealTimeVersion1(values, 0, values.length - 1);
            }
            else if (document.getElementById('versionChange').checked == true) {
                audioSorting();
                await quicksortVersion2(values, 0, values.length - 1);
                oscillatorNode.stop(context.currentTime);
            }
            else {
                audioSorting();
                await quicksortVersion1(values, 0, values.length - 1); 
                oscillatorNode.stop(context.currentTime);
            }
                
            endTime = performance.now();
            timerSorting.stop();
            isSorting = false;
            document.getElementById('countRekursivCalls').innerHTML = "Recursive Calls: " + countRekursivCalls;
        }
        // ------------------------------------------------------------------
       
        document.getElementById('countSwaps').innerHTML = "Swaps: " + countSwaps;

        totalTime = startTime - endTime;

        p.frameRate(60);

        isReady = true;

        //console.log(isReady);
        //console.log(values);
        //console.log(startValues);
    }

    p.draw = function() {
        p.background(0);
        document.getElementById('sortingTime').innerHTML = "Duration (ms): " + Math.floor(endTime - startTime);
        p.bars();
    }

    p.bars = function() {
        for (let i = 0; i < values.length; i++) {
            p.stroke(0);
            p.fill(255);
            // Zustand 0 == rot (Pivotelement)
            if (states[i] == 0) {
                p.fill(255, 0, 0);
            }
            // Zustand 1 == blau (unsortierter Bereich/Bereich der gerade sortiert wird)
            else if (states[i] == 1) {
                p.fill(0, 0, 255);
            }
            // Zustand -1 == grün (sortierter Bereich/Bereich der zur Zeit nicht sortiert wird)
            else if (states[i] == -1) {
                p.fill(0, 255, 0);
            }
            // Bei evtl. Fehlern weiße Markierung
            else {
                p.fill(255);
            }
            p.rect(i * barsWidth, p.height - values[i], barsWidth, values[i]);
        }
    }
}


