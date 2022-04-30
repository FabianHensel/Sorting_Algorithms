// Copyright © 2021, Fabian Hensel. All rights reserved.
// Hamburg, Germany
// 03.09.2021
// selectionsort.js: Selectionsort Algorithmus

// Verlangsamter Selectionsort zur Visualisierung
selectionsort = async function(array) {
    let pivotIndex = -1;
    // Zustand für unsortierten Bereich blau
    for (let k = 0; k < (array.length); k++) {
        states[k] = 1;
    }
    for (let i = 0; i < array.length; i++) {
        states[pivotIndex] = -1;
        let min = i;
        for (let j = i+1; j < array.length; j++) {
            if (array[j] < array[min]) {
                // Frisch ausgewählte Elemente werden im unsortierten Bereich grün markiert
                states[min] = -1;
                min = j;
                // Mit jedem während des sortierens ausgewählten Elements erhöht sich die Frequenz, nur bei empfohlenen Einstellungen möglich
                if (barsWidth == 5)
                    oscillatorNode.frequency.value=j+100;
                else
                    oscillatorNode.frequency.value=0;
                states[min] = 1;
            }
        }
        states[pivotIndex] = -1;
        pivotIndex++;
        // Zustand des Pivotelements
        states[pivotIndex] = 0;
        if (min != i) {
            await swap(array, min, i);
        }
    }
}


// Echtzeit Selectionsort
selectionsortRealTime = function(array) {
    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i+1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        if (min != i) {
            swapRealTime(array, min, i);
        }
    }
}