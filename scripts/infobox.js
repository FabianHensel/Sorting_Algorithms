// Copyright © 2021, Fabian Hensel. All rights reserved.
// Hamburg, Germany
// 03.09.2021
// infobox.js: Öffnet ein Infofeld via des Infobuttons

let infoButton = document.getElementById("infoID");
let dialog = document.getElementById("infoDialog");
dialog.close();
let isClosed = true;

infoButton.addEventListener('click', function(e) {
    if (isClosed) {
        dialog.show();
        isClosed = false;
    }
    else {
        dialog.close(); 
        isClosed = true;
    }
});

