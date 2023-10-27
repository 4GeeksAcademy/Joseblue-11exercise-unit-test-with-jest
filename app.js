let oneEuroIs = {
    "JPY": 156.5, // yen
    "USD": 1.07, // dollar
    "GBP": 0.87, // pound 
    "EUR": 1, // euro
}

 // dollar to yen
function dollarToYen(amount) {
    let yenToDollar = oneEuroIs["JPY"] / oneEuroIs["USD"];
    return amount * yenToDollar;
}

 // euro to dollar
 function euroToDollar(amount) {
    let dollarToEuro = oneEuroIs["USD"] / oneEuroIs["EUR"];
    return amount * dollarToEuro;
}

// yen to pound
function yenToPound(amount) {
    let poundToYen = oneEuroIs["GBP"] / oneEuroIs["JPY"];
    return amount * poundToYen;
}

module.exports = { dollarToYen, euroToDollar, yenToPound }