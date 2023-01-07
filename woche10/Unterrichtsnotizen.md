# Woche 10

## Goodie
Unterschied von slice und splice

```javascript
//Erstellt Array und splittet bei leerzeichen
const chars = "a b c d e f g".split(" ");

//Erstellt ein Kopie des Arrays ab Index 1
chars.slice(1);
//Erstellt ein Kopie des Arrays von ersten index bis vor letzten
chars.slice(1, -1);

//am Index 1, die Länge 2 nichts tun
chars.splice(1, 2);

// am Index 1, die Länge 2 ersetzen mit 
chars.splice(1, 2, "x","y","z"); // Rückgabe, was gelöscht wurde
```

## Schnelle Notizen

- Software Architektur an Requirements anpassen. Nicht schon für eine winzige App ein riesiges Framework nutzen.
- Achtung nicht vergessen Listeners wieder zu löschen
- Vorsichtig beim Verändern der listenerListe! Mache eine Kopie, um durchzuiterieren.
- 
