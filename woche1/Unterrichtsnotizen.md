# Woche 1

## Wichtigster Input

- Begriffsdefinitionen
- Was sind Funktionen
- Man kann Funktionen in weiteren Konstanten speichern

## Schnelle Notizen

- Es gibt keinen Compiler. Deshalb erhält man keine Fehlerausgabe. Es "passiert" dann einfach nichts.
- Vergiss nicht die Returns in Funktionen. Dies führt zu Problemen.
- Vergiss nicht das Semikolon!

## Begriffe

- Argumente sind in den Klammern vom Funktionsaufruf.
- Parameter sind in den Klammern der Funktionsdeklaration.
- Ausdruck: fun1 ist ein Ausdruck auf eine Referenz einer Funktion. In Java ist fun1(42) der Ausdruck.
- Block von Statements braucht ein return um einen Wert zu validieren. Steht in { }
- Statement ist "etwas machen..."

## Funktionen

### Drucken ins html

```javascript
document.writeln("true");
```

### Funktionsdispatch / überladene Methoden

In Java gibt es überladene Methoden. Dies existiert nicht in JavaScript!<br>
Funktionen überschreiben einfach eine vorherige Funktion mit demselben Namen.

```javascript
function fun2() {
    return 1;
}

function fun2(arg) {
    return arg;
}

// Dies ergibt false, weil undefined zurück gegeben wird.
document.writeln((fun2() === 1).toString());
```

### Mehrere "Namen" / Token für Funktionen

Es ist möglich mehrere Namen für eine Funktion zu deklarieren.
Der Token ist nur eine Referenz auf die Funktion.

```javascript
 function fun1() {
    return 1;
}

// Dies speichert nur, was die Funktion zurück gibt.
const myFun = fun1();
// Dies ist eine weitere Referenz auf eine Funktion
const myFun = fun1;

// Aufruf:
myFun();
```

### function und const mittels Lambda expressions

Damit man Methoden nicht aus Versehen überschreiben kann, sollte man besser const (Konstanten) nutzen.
Dies wird mittels "Lambdas" gemacht. Eigentlich heisst das "fat arrow".

```javascript
const noReturn2 = () => {
    1;
};

const noReturn3 = () => 1;
```

- Wenn man mit dem Rückgabewert arbeiten will, muss es einen Return geben. Also wäre die 1 in noReturn2 "verschwunden".
- Wenn es keine { } gibt, braucht es keinen return.

## Arrays

Man kann in Arrays auch Funktionen speichern. Arrays werden mit [ ] initialisiert.

```javascript
const funs = [null, undefined, fun1, fun2(1)];
// Dies ruf die Funktion an index 2 auf. In den () könnte man ein Argument mit geben.
document.writeln((funs[2]() === 1).toString());
// In Index 3 ist der Rückgabewert der Funktion gespeichert. Deshalb hier ohne ()
document.writeln((funs[3] === 1).toString());
```

Mitgabe einer Funktion ist auch möglich.

```javascript
function doit(whatToDo) {
    return function bla(arg) {
        return whatToDo(arg);
    }
}

document.writeln((doit(fun1)(10) === 1).toString());

// Oder als lambda...
const doit2 = callme => arg => callme(arg);
// Diese nimmt sozusagen zwei Argumente entgegen. Deshalb mehrere ()
document.writeln((doit2(fun1)(10) === 1).toString());
```

Man kann obige Verkettung dann auch in eine Konstante speichern. Um diese einfacher aufzurufen.

```javascript
const doFun2 = doit2(fun1);

document.writeln((doFun2(10) === 1).toString());
```