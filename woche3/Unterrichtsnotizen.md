# Woche 3

## Schnelle Notizen

- Nutze immer const. Ändere es später zu let. Nutze kein var.

## Nutzung der Console

Wir können in der Console z.B. den debug level ändern, ohne Webseite neu zu laden.

## fehler abfangen

```javascript
const Left = x => f => g => f(x);
const Right = x => f => g => g(x);
const either = e => handleLeft => handleRight => e(handleLeft)(handleRight);

const safeDiv = num => divisor =>
    divisor === 0
        ? Left("schlecht!")
        : Right(num / divisor);

either(safeDiv(1)(0))
(x => console.error(x))
(x => console.log(x));

either(safeDiv(1)(2))
(x => console.error(x))
(x => console.log(x));
```