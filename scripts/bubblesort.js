// Copyright © 2021, Fabian Hensel. All rights reserved.
// Hamburg, Germany
// 03.09.2021
// bubblesort.js: Bubblesort Algorithmus

// Verlangsamter Bubblesort zur Visualisierung
bubblesort = async function(array) {
    let pivotIndex;
    for (let i = 0; i < array.length; i++) {
        // Oszillator Start-Frequenz bei jedem neuen Durchgang
        if (barsWidth == 20)
            oscillatorNode.frequency.value = 100;
        else
            oscillatorNode.frequency.value = 0;
        // Zustand für den sortierten Bereich (grün)
        states[pivotIndex] = -1;
        pivotIndex = -1;
        // Zustand für die vor dem Pivotelement liegenden Werte blau
        for (let k = 0; k < (array.length - i); k++) {
            states[k] = 1;
        }
        for (let j = 0; j < (array.length - i); j++) {
            // Zustand für die hinter dem Pivotelement liegenden Werte grün
            states[pivotIndex] = -1;
            pivotIndex++;
            // Zustand Pivotelement (rot)
            states[pivotIndex] = 0;
            // Langsame Erhöhung der Frequenz, nur bei empfohlenen Einstellungen möglich
            if (barsWidth == 20)
                oscillatorNode.frequency.value+=10;
            else
                oscillatorNode.frequency.value+=0;
            if (array[j] > array[j+1]) {
                await swap(array, j, j+1);
            }
        } 
    }
}


// --------------------------------------------------------------------------------------------------------------------------


// Echtzeit Bubblesort
bubblesortRealTime = function(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < (array.length - i); j++) {
            if (array[j] > array[j+1]) {
                swapRealTime(array, j, j+1);
            }
        } 
    }
}