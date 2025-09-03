let distanciaPecorrida = parseFloat(prompt('Qual a distância percorrida da sua casa ate seu trabalho (em km)?'));

let consumoMedio = parseFloat(prompt('Qual o consumo médio do seu veiculo (em km/L)?'));

let consumoNecessarioLitros = distanciaPecorrida/consumoMedio;

let palavraLitro = consumoNecessarioLitros > 1 ? 'litros' : 'litro';
alert(`O consumo necessario ${consumoNecessarioLitros} ${palavraLitro}`);

const quantidadeDePostos = parseInt(prompt('Em quantos postos você pesquisou?'));

let somaTotalValores = 0;

for(let i = 1; i <= quantidadeDePostos; i++){
    const valorCombustivelPosto = parseFloat(prompt(`Digite o preço no ${i}° posto:`));

    somaTotalValores += valorCombustivelPosto;
}

alert(`${somaTotalValores}`);