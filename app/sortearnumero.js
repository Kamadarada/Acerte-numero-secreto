



//const menorValor = prompt("Digite o menor valor")
//const maiorValor = prompt("Digite o maior valor")

const menorValor = 1;
const maiorValor = 100;

const numeroSecreto = gerarnumeroAleatorio()

function gerarnumeroAleatorio(){
    return parseInt(Math.random() * maiorValor + 1)
}

console.log('Número secreto =' , numeroSecreto)


const elementoMenorValor = document.getElementById('menor_valor');
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('maior_valor');
elementoMaiorValor.innerHTML = maiorValor;