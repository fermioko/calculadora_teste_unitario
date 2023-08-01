var {somar, subtrair, multiplicar, dividir, maiorDeIdade} = require('./index');

test('somar dois números', function() {
    var resultado = somar(10, 10);

    expect(resultado).toBe(20);
});

test('subtrair dois números', function() {
    var resultado = subtrair(10, 10);

    expect(resultado).toBe(0);
});

test('multiplicar dois números', function() {
    var resultado = multiplicar(4, 2);

    expect(resultado).toBe(8);
});

test('dividir dois números', function() {
    var resultado = dividir(10, 2);

    expect(resultado).toBe(5);
});

test('verificar se a pessoa é maior de idade', function() {
    var resultado = maiorDeIdade(21);

    expect(resultado).toBe('Você é de maior');
});

