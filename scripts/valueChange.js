// Copyright © 2021, Fabian Hensel. All rights reserved.
// Hamburg, Germany
// 03.09.2021
// barWidthChange.js: Ermöglicht die Balkenbreite, sowie die Sortierzeit mittels eines Sliders zu verändern

// Slider für Balkenbreite
let sliderBarWidth = document.getElementById("barWidthSlider");
// Slider für Sortierzeit
let sliderSortingTime = document.getElementById("sortingTimeSlider");
// Veränderte Zeit in ms
let changedTimeInMs = 25;

sliderBarWidth.oninput = function() {
    // Wenn Reset nicht gedrückt wurde, nicht sortiert wird und der sortieren nicht fertig ist, kann die Balkenbreite verändert werden
    if (!resetIsPressed && !isSorting && !isReady) {
        for (let i = 1, j = 3; i <= 50; i++, j++) {
            if (this.value == i) {
                unsorted.remove();
                barsWidth = j/2;
                document.getElementById('barWidthLabel').innerHTML = barsWidth + " px";
                unsorted = new p5(unsortedBars);
            }
        }
    }
}

sliderSortingTime.oninput = function() {
    for (let i = 1; i <= 100; i++) {
        if (this.value == i) {
            changedTimeInMs = i;
            document.getElementById('sortingTimeLabel').innerHTML = changedTimeInMs + " ms";
        }
    }
    timeInMs = changedTimeInMs;
}
