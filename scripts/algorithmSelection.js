// Copyright © 2021, Fabian Hensel. All rights reserved.
// Hamburg, Germany
// 03.09.2021
// algorithmSelection.js: Erstellt die Auswahlmöglichkeit der verschiedenen Sortieralgorithmen, bzw. das Durchschalten zwischen den Algorithmen


let isPressedSelectionsort = false;
let isPressedInsertionsort = false;
let isPressedBubblesort = false;
let isPressedQuicksort = false;

// Öffnen des Dropdown Menüs
function mySelect() {
    document.getElementById('myDropdown').classList.toggle('show');
}

// Das Dropdown Menü wird geschlossen sobald der Benutzer etwas außerhalb anklickt
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName('dropdownContent');
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Die Infotexte zu den verschiedenen Sortierverfahren und die Einblendung/Ausblendung der jeweiligen Timer
function selectSelectionsort() {
    // Wenn nicht sortiert wird und der Algorithmus noch nicht durchlaufen wurde, dann kann noch zwischen den verschiedenen Algorithmen gewechselt werden
    if (!isSorting && !isReady) {
        document.getElementById('infoDialog').innerHTML = '"Selectionsort (englisch selection ‚Auswahl‘ und englisch sort ‚sortieren‘) ist ein einfacher („naiver“) Sortieralgorithmus, ' + 
        'der in-place arbeitet und in seiner Grundform instabil ist, wobei er sich auch stabil implementieren lässt. Die Komplexität von Selectionsort ist O(n^2). ' +
        'Alternative Bezeichnungen des Algorithmus sind MinSort (von Minimum) bzw. MaxSort (von Maximum), Selectsort oder ExchangeSort (AustauschSort)." - Wikipedia <br/><br/>---- Empfohlene ' +
        'Einstellung (1920x1080 Bildschirm) ---- <br/> Balkenbreite: 5px <br/> Sortierzeit: 35ms'; 

        document.getElementById('currentSelectedAlgorithm').innerHTML = "Selectionsort";
        document.getElementById('divVersionChange').style.display = "none";

        isPressedSelectionsort = true;
        isPressedInsertionsort = false;
        isPressedBubblesort = false;
        isPressedQuicksort = false;
    }
}

function selectInsertionsort() {
    if (!isSorting && !isReady) {
        document.getElementById('infoDialog').innerHTML = '"Insertionsort (auch Einfügesortierenmethode oder Sortieren durch Einfügen, englisch insertion ‚Einfügung‘ und englisch sort ‚sortieren‘) ' +
        'ist ein einfaches stabiles Sortierverfahren (d. h. die Reihenfolge von Elementen mit gleichem Schlüsselwert bleibt unverändert). ' +
        'Es ist leicht zu implementieren, effizient bei kleinen oder bereits teilweise sortierten Eingabemengen. Außerdem benötigt Insertionsort keinen zusätzlichen Speicherplatz, ' +
        'da der Algorithmus in-place arbeitet. Ein weiterer Vorteil besteht darin, dass Insertionsort als Online-Algorithmus eingesetzt werden kann. Komplexität = O(n^2)." - Wikipedia <br/><br/>---- Empfohlene ' +
        'Einstellung (1920x1080 Bildschirm) ---- <br/> Balkenbreite: 5px <br/> Sortierzeit: 35ms';

        document.getElementById('currentSelectedAlgorithm').innerHTML = "Insertionsort";
        document.getElementById('divVersionChange').style.display = "none";

        isPressedSelectionsort = false;
        isPressedInsertionsort = true;
        isPressedBubblesort = false;
        isPressedQuicksort = false;
    } 
}

function selectBubblesort() {
    if (!isSorting && !isReady) {
        document.getElementById('infoDialog').innerHTML = '"Bubblesort (auch Sortieren durch Aufsteigen oder Austauschsortieren) ist ein Algorithmus, der vergleichsbasiert eine Liste von Elementen sortiert. ' +
        'Dieses Sortierverfahren arbeitet in-place, sortiert stabil und hat eine Laufzeit von O(n^2) im schlimmsten Fall (Worst-Case) wie auch im durchschnittlichen Fall (Average-Case). ' +
        'Damit ist die Laufzeit asymptotisch nicht optimal. In der Praxis wird Bubblesort kaum eingesetzt, da andere Verfahren ein besseres Laufzeitverhalten haben. ' +
        'Der Algorithmus spielt allerdings in der Lehre eine Rolle, da er als einfach zu erklären bzw. zu demonstrieren gilt. Des Weiteren eignet sich der Algorithmus, ' +
        'um Techniken wie schrittweise Optimierungen, Laufzeit- bzw. Komplexitäts- und Korrektheitsanalyse einzuführen." - Wikipedia <br/><br/>---- Empfohlene Einstellung (1920x1080 Bildschirm) ---- ' + 
        '<br/> Balkenbreite: 20px <br/> Sortierzeit: 10ms';

        document.getElementById('currentSelectedAlgorithm').innerHTML = "Bubblesort";
        document.getElementById('divVersionChange').style.display = "none";

        isPressedSelectionsort = false;
        isPressedInsertionsort = false;
        isPressedBubblesort = true;
        isPressedQuicksort = false;
    }
}

function selectQuicksort() {
    if (!isSorting && !isReady) {
        document.getElementById('infoDialog').innerHTML = '"Quicksort (englisch quick ‚schnell‘ und to sort ‚sortieren‘) ist ein schneller, rekursiver, nicht-stabiler Sortieralgorithmus, ' +
        'der nach dem Prinzip Teile und herrsche arbeitet. Er wurde ca. 1960 von C. Antony R. Hoare in seiner Grundform entwickelt[1] und seitdem von vielen Forschern verbessert. ' + 
        'Der Algorithmus hat den Vorteil, dass er über eine sehr kurze innere Schleife verfügt (was die Ausführungsgeschwindigkeit stark erhöht) und dass er, ' + 
        'abgesehen von dem für die Rekursion zusätzlichen benötigten Platz auf dem Aufruf-Stack, ohne zusätzlichen Speicherplatz auskommt. Im Durchschnitt führt der Quicksort-Algorithmus ' +
        'O(n * log(n)) Vergleiche durch." - Wikipedia <br/><br/>Mittels des Switch-Button Variante1/Variante2 kann zwischen zwei Quicksort-Implementierungen gewechselt werden. ' +
        '<br/><br/>---- Empfohlene Einstellung (1920x1080 Bildschirm) ---- <br/> Balkenbreite: 5px <br/> Sortierzeit: 20ms';
        

        document.getElementById('currentSelectedAlgorithm').innerHTML = "Quicksort";
        document.getElementById('divVersionChange').style.display = "unset";

        isPressedSelectionsort = false;
        isPressedInsertionsort = false;
        isPressedBubblesort = false;
        isPressedQuicksort = true;
    }
}


