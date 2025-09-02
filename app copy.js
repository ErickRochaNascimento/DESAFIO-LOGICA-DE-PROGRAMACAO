alert('');
let distanciaPecorridaINT = prompt('Qual a distância percorrida da sua casa ate seu trabalho (em km)?');
let distanciaPecorridaFloat = parseFloat(distanciaPecorridaINT);

let consumoMedioINT = prompt('Qual o consumo médio do seu veiculo (em km/L)?');
let consumoMedioFloat = parseFloat(consumoMedioINT);

let consumoNecessarioLitros = distanciaPecorridaFloat/consumoMedioFloat;

//Formatando numero com toFixed
let consumoNecLiFormatado = consumoNecessarioLitros.toFixed(2);


let litro = consumoNecLiFormatado > 1 ? 'litros' : 'litro';
alert(`O consumo necessario ${consumoNecLiFormatado} ${litro}`);


const quantidadeDePostos = parseInt(prompt('Em quantos postos você pesquisou?'));


let somaTotalValores = 0;


for ( let i = 1; i <= quantidadePostos; i++){
    const valorCombustivelPosto = parseFloat(prompt(`Digite o valor (em R$) encontrado no posto ${i}:`));

    somaTotalValores += valorCombustivelPosto;
}

alert(`${somaTotalValores}`);


