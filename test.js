test("one dollar should be 150.4 yen", () => {
    // Importo la funcion desde app.js
    const { dollarToYen } = require('./app.js');
    // Comparacion
    expect(dollarToYen(1)).toBe(146.26168224299064);
})

test("one euro should be 1.07 dollars", () => {
    // Importo la funcion desde app.js
    const { euroToDollar } = require('./app.js');
    // Comparacion
    expect(euroToDollar(1)).toBe(1.07);
})

test("one yen should be 0.087 pound", () => {
    // Importo la funcion desde app.js
    const { yenToPound } = require('./app.js');
    // Comparacion
    expect(yenToPound(1)).toBe(0.005559105431309904);
})