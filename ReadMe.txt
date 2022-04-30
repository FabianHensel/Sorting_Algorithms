-----------------> Sortieralgorithmen Visualisierungsprogramm <------------------------------------------------------------------------------------------------------

Um das Programm zu starten, die Index.html Datei in einem Browser öffnen oder auf der Kommandozeile den Befehl "npm start" eingeben. Für den zweiten Fall
muss Electron bzw. müssen die Node Modules installiert sein. 
Um im zweiten Anwendungsfall die Fenstergröße zu ändern, können in der Datei "index.js" die Felder "width" und "height" entsprechend angepasst werden.
Anschließend oben links einen Algorithmus auswählen und mithilfe des grünen "Start"-Buttons den Sortiervorgang starten.

Erklärung der Buttons/Slider (von links nach rechts):

--->Obere Elemente:<-------------------------------------------------------------------------------------------------------------------------------------------------

  "Algorithmen": 	Durch einen Klick öffnet sich ein Dropdown Menü. In diesem kann dann der gewünschte Algorithmus ausgewählt werden.
			Auswahl ist nur möglich, solange kein Sortiervorgang läuft. Nach einem Sortiervorgang muss entweder "New" oder "Reset" gedrückt werden.
			Erst dann kann ein anderer Algorithmus ausgewählt werden.
	
   Oberer Slider:	Am oberen Slider kann die Anzahl der zu sortierenden Elemente verändert werden (bzw. die Breite der zu sortierenden Elemente).
			Die Breite wird unter dem Slider in px angezeigt. Änderung ist nur vor einem Sortiervorgang möglich. 
			Nach einem Sortiervorgang muss "New" gedrückt werden um die Anzahl der Elemente zu verändern.
	
   Unterer Slider:	Am unteren Slider kann die Zeit, welche zwischen einer Iteration des Algorithmus gewartet wird, verändert werden.
			Die Zeit wird unter dem Slider in ms angezeigt. Kann jederzeit verändert werden, auch während des Sortiervorgangs.
			
   "RTS-OFF/RTS-ON":	Hier kann das Programm zwischen visualisierter Sortierung (RTS-OFF) und Echtzeit Sortierung (RTS-ON) ungeschaltet werden.
			Umschaltung vor oder während einem Sortiervorgang möglich. Wenn während des Sortiervorgangs umgeschaltet wird kann der Vorgang abgekürzt werden.
			Nach einem Sortiervorgang muss erst entweder "New" oder "Reset" gedrückt werden.

   "MUTE/UNMUTE":	Hier kann der Sound, welcher während eines Sortiervorgangs abgespielt wird, ein- bzw. ausgeschaltet werden (Standardmäßig aus).
			Ein- bzw. Ausschaltung nur vor einem Sortiervorgang möglich. Nach einem Sortiervorgang muss erst entweder "New" oder "Reset" gedrückt werden.

   Zeitanzeige:		Oben in der Mitte des Fensters wird die Zeit angezeigt, die ein Algorithmus während des Sortiervorgangs braucht. 
			Anzeige in: Minuten:Sekunden:Zehntelsekunden

   "Variante1/		Nach Auswahl des Quicksort-Algorithmus kann hier zwischen zwei verschiedenen Versionen umgeschaltet werden. 
    Variante2":		Nicht während eines Sortiervorgangs möglich.
			
   "Start Screen": 	Dort wo nach dem Start des Programms "Start Screen" steht, wird angezeigt welcher Algorithmus gerade ausgewählt ist.

   Runder "i"-Button:	Auf dem Start Screen wird hier nach einem Klick eine kurze Erklärung des Programms angezeigt. 
			Nachdem ein Algorithmus ausgewählt wurde, werden hier interessante Informationen zu dem jeweiligen Algorithmus angezeigt.

--->Untere Elemente<-------------------------------------------------------------------------------------------------------------------------------------------------

   "Elements": 		Anzahl der zu sortierenden Elemente.

   "Window Size":	Größe des Browser Fensters.

   "Duration (ms)":	Zeit in ms, die der Algorithmus gebraucht hat.

   "Swaps":		Anzahl der Vertauschungen der Elemente. Beim Insertionsort-Algorithmus steht hier eine Null.

   "Recursive Calls":	Anzahl der rekursiven Aufrufe des Quicksort-Algorithmus. Bei den anderen Algorithmen steht hier eine Null.

   "Start":		Button zum Starten des Sortiervorgangs. Es muss vorher ein Algorithmus ausgewählt werden.

   "Pause":		Button zum Verlangsamen/Pausieren des Sortiervorgangs. Nur während eines Sortiervorgangs möglich. 
			Um wieder zu Beschleunigen/Fortzufahren "Start" drücken.

   "New":		Button um ein neues Diagramm von unsortierten Elementen zu erstellen. Nur nach Abschluss eines Sortiervorgangs möglich oder davor.

   "Reset": 		Button um das letzte Diagramm von unsortierten Elementen zurückzusetzen. Nur nach Abschluss eines Sortiervorgangs möglich.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------			