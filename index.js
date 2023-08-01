// fazer uma calculadora e maior de idade

function somar(a, b) {
    return (a + b);
}

function subtrair(a, b) {
    return (a - b);
}

function multiplicar(a, b) {
    return (a * b);    
}

function dividir(primeiroNumero, segundoNumero) {
    return (primeiroNumero / segundoNumero);
}

function maiorDeIdade(idade) {
    if (idade => 18) {
        return ('Você é de maior');
    }else{
        return ('Você é de menor');
    }
}

console.log(somar(2, 2));
console.log(subtrair(5, 10));
console.log(multiplicar(2, 2));
console.log(dividir(10, 2));
console.log(maiorDeIdade(21));

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir,
    maiorDeIdade,
}