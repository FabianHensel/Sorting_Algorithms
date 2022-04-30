// Copyright © 2021, Fabian Hensel. All rights reserved.
// Hamburg, Germany
// 03.09.2021
// insertionsort.js: Insertionsort Algorithmus

// Verlangsamter Insertionsort zur Visualisierung
insertionsort = async function(array) {
    let pivotIndex = 0;
    // Zustand für unsortierten Bereich blau
    for (let j = 0; j < (array.length); j++) {
        states[j] = 1;
    }
    for (let i = 1; i < array.length; i++) {
        states[pivotIndex] = -1;
        let current = array[i];
        let j = i-1;
        while ((j > -1) && (current < array[j])) {
            array [j+1] = array[j];
            states[j] = -1;
            j--;
            // Mit jedem während des sortierens eingefügten Elements erhöht sich die Frequenz, nur bei empfohlenen Einstellungen möglich
            if (barsWidth == 5)
                oscillatorNode.frequency.value=j+250;
            else
                oscillatorNode.frequency.value=0;
            // Frisch eingefügte Elemente werden blau hervorgehoben
            states[j] = 1;
        }
        states[pivotIndex] = -1;
        pivotIndex++;
        // Zustand des Pivotelements
        states[pivotIndex] = 0;
        array[j+1] = current;
        await sleep(timeInMs);
    }
}


// Echtzeit Insertionsort
insertionsortRealTime = function(array) {
    for (let i = 1; i < array.length; i++) {
        let current = array[i];
        let j = i-1;
        while ((j > -1) && (current < array[j])) {
            array [j+1] = array[j];
            j--;
        }
        array[j+1] = current;
    }
}