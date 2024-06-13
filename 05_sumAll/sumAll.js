const sumAll = function(numero1, numero2) {
    if (numero1 < 0 || numero2 < 0 || !Number.isInteger(numero1) || !Number.isInteger(numero2)) {
        return 'ERROR';
    };

    let start = Math.min(numero1, numero2);
    let end = Math.max(numero1, numero2);
    let suma = 0;

    for (let i = start; i <= end; i++) {
        suma += i;
    }

    return suma;
};

// Do not edit below this line
module.exports = sumAll;
