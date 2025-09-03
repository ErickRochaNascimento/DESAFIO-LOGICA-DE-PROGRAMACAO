let distanciaPecorrida = parseFloat(prompt('Qual a distância percorrida da sua casa ate seu trabalho (em km)?'));

let consumoMedio = parseFloat(prompt('Qual o consumo médio do seu veiculo (em km/L)?'));

let consumoNecessarioLitros = distanciaPecorrida/consumoMedio;
let consumoNecessarioLitrosLimitado = consumoNecessarioLitros.toFixed(2);

let palavraLitro = consumoNecessarioLitros > 1 ? 'litros' : 'litro';
alert(`O consumo necessario ${consumoNecessarioLitrosLimitado} ${palavraLitro}`);

const quantidadeDePostos = parseInt(prompt('Em quantos postos você pesquisou?'));

let somaTotalValores = 0;
let menorValor = Infinity;

for(let i = 1; i <= quantidadeDePostos; i++){
    const valorCombustivelPosto = parseFloat(prompt(`Digite o preço no ${i}° posto:`));

    somaTotalValores += valorCombustivelPosto;
    if(valorCombustivelPosto <= menorValor){
        menorValor = valorCombustivelPosto;
    }
}
let menorValorLimitado = menorValor.toFixed(2);


let media = somaTotalValores/quantidadeDePostos;

let gastoDiario = 2*(consumoNecessarioLitrosLimitado*menorValor);
let gastoDiarioLimitado = gastoDiario.toFixed(1);



alert(`O consumo necessario é ${consumoNecessarioLitrosLimitado} ${palavraLitro}\n O menor valor pesquisado é ${menorValorLimitado}\n A média dos valores pesquisados é ${media}\n O gasto diário (ida e volta) é R$${gastoDiarioLimitado}`);

