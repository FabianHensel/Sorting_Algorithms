// Copyright © 2021, Fabian Hensel. All rights reserved.
// Hamburg, Germany
// 03.09.2021
// quicksort.js: Quicksort Algorithmus

// Zeitangabe der Sleep-Funktion
let timeInMs = 10;

// Zählt die rekursiven Aufrufe
let countRekursivCalls = -1;

// Zählt die Vertauschungen
let countSwaps = 0;

// Quicksort Version 1
// Verlangsamter Quicksort zur Visualisierung
quicksortVersion1 = async function(array, start, end) {
    // Oszillator Start-Frequenz bei jedem rekursiven Aufruf, nur bei empfohlenen Einstellungen möglich
    if (barsWidth == 5)
        oscillatorNode.frequency.value=200;
    else
        oscillatorNode.frequency.value=0;
    countRekursivCalls++;
    if (start >= end) {
        return;
    }
    // Von Partition ermittelter Index
    let index = await partitionVersion1(array, start, end);
    states[index] = -1;
    // Unterteilung in linke und rechte Hälfte
    await Promise.all([quicksortVersion1(array, start, index - 1), quicksortVersion1(array, index + 1, end)]);
}

partitionVersion1 = async function(array, start, end) {
    // Zustand für Array Bereich der gerade sortiert wird
    for (let i = start; i < end; i++) {
        states[i] = 1;
    }

    let pivotIndex = start;
    let pivotValue = array[end];
    for (let i = start; i < end; i++) {
        if (array[i] < pivotValue) {
            // Vertauscht die Elemente des arrays an Stelle i und pivotIndex
            await swap(array, i, pivotIndex);
            // Langsame Erhöhung der Frequenz
            if (barsWidth == 5)
                oscillatorNode.frequency.value++;
            else
                oscillatorNode.frequency.value+=0;
            // Zustand für sortierter Bereich, bzw. Bereich der gerade nicht sortiert wird
            states[pivotIndex] = -1;
            pivotIndex++;
            // Zustand Pivotelement
            states[pivotIndex] = 0;
        }
    }
    await swap(array, pivotIndex, end);

    return pivotIndex;
}


// --------------------------------------------------------------------------------------------------------------------------


// Echtzeit Quicksort Version 1
quicksortRealTimeVersion1 = function(array, start, end) {
    countRekursivCalls++;
    if (start >= end) {
        return;
    }
    let index = partitionRealTimeVersion1(array, start, end);
    quicksortRealTimeVersion1(array, start, index - 1), quicksortRealTimeVersion1(array, index + 1, end);
}

partitionRealTimeVersion1 = function(array, start, end) {
    let pivotIndex = start;
    let pivotValue = array[end];
    for (let i = start; i < end; i++) {
        if (array[i] < pivotValue) {
            swapRealTime(array, i, pivotIndex);
            pivotIndex++;
        }
    }
    swapRealTime(array, pivotIndex, end);

    return pivotIndex;
}


// ============================================================================================================================
// ============================================================================================================================


// Quicksort Version 2
// Verlangsamter Quicksort zur Visualisierung
quicksortVersion2 = async function(array, start, end) {
    // Oszillator Start-Frequenz bei jedem rekursiven Aufruf, nur bei empfohlenen Einstellungen möglich
    if (barsWidth == 5)
        oscillatorNode.frequency.value=100;
    else
        oscillatorNode.frequency.value=0;
    countRekursivCalls++;
    let index;
    if (array.length > 1) {
        index = await partitionVersion2(array, start, end); 
        // Mehr Elemente auf der linken Seite des Pivotelements
        if (start < index - 1) { 
            await quicksortVersion2(array, start, index - 1);
        }
        // Mehr Elemente auf der rechten Seite des Pivotelements
        if (index < end) { 
            await quicksortVersion2(array, index, end);
        }
    }
}

partitionVersion2 = async function(array, start, end) {
    // Pivot Element, wird in der Mitte des Arrays gewählt
    let pivotElement = array[Math.floor((start + end) / 2)];
    // Linker Zeiger
    let i = start; 
    // Rechter Zeiger
    let j = end; 

    // Solange die Zeiger auf ihrer jeweils richtigen Seite sind...
    while (i <= j) {
        // Hervorheben der Zeiger und des Pivotelements
        for (let k = 0; k < array.length; k++) {
            // Alles grün markieren
            states[k] = -1
            // Pivotelement rot markieren
            states[Math.floor((start+end) / 2)] = 0;
            // Die Zeiger blau markieren
            states[i] = 1;
            states[j] = 1;
        }

        // Solange die Elemente an Stelle des Zeigers i kleiner als das Pivotelement sind, wandert der Zeiger weiter
        while (array[i] < pivotElement) {
            i++;
        }
        // Solange die Elemente an Stelle des Zeigers j größer als das Pivotelement sind, wandert der Zeiger weiter
        while (array[j] > pivotElement) {
            j--;
        } 
        if (i <= j) {
            await swap(array, i, j);
            // Langsame Erhöhung der Frequenz
            if (barsWidth == 5)
                oscillatorNode.frequency.value+=10;
            else
                oscillatorNode.frequency.value+=0;
            i++;
            j--;
        }
    }
    return i;
}


// --------------------------------------------------------------------------------------------------------------------------


// Echtzeit Quicksort Version 2
quicksortRealTimeVersion2 = function(array, start, end) {
    countRekursivCalls++;
    let index;
    if (array.length > 1) {
        index = partitionRealTimeVersion2(array, start, end); 
        if (start < index - 1) { 
            quicksortRealTimeVersion2(array, start, index - 1);
        }
        if (index < end) { 
            quicksortRealTimeVersion2(array, index, end);
        }
    }
}

partitionRealTimeVersion2 = function(array, start, end) {
    let pivotElement = array[Math.floor((start + end) / 2)];
    let i = start; 
    let j = end; 

    while (i <= j) {
        while (array[i] < pivotElement) {
            i++;
        }
        while (array[j] > pivotElement) {
            j--;
        }
        if (i <= j) {
            swapRealTime(array, i, j);
            i++;
            j--;
        }
    }
    return i;
}


// ============================================================================================================================
// ============================================================================================================================


// Vertauscht die Elemente mit delay
swap = async function(array, a, b) {
    await sleep(timeInMs);
    let temp = array[a];
    array[a] = array[b];
    array[b] = temp;
    countSwaps++;
}

// Sorgt für einen Timeout, delay wird in ms angegeben
sleep = function(delay) {
    // Bei Betätigen des RTS-Buttons wird die sleep-Funktion beendet und das sortieren in Echtzeit vollendet 
    if (document.getElementById('rtsOnOff').checked == true)
        return;
    return new Promise(resolve => setTimeout(resolve, delay));
}

// Vertauscht die Elemente ohne delay
swapRealTime = function(array, a, b) {
    let temp = array[a];
    array[a] = array[b];
    array[b] = temp;
    countSwaps++;
}