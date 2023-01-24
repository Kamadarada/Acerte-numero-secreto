
function validaNumero(chute){
    const numero = +chute
    
    if(chuteInvalido(numero)){
        elementoChute.innerHTML += ` <div> Texto inválido</div>` 
        
    }

    if (numeroInvalido(numero)){
        elementoChute.innerHTML = `
       <div>Valor incorreto = ${chute} O número está entre ${menorValor} e ${maiorValor}
        </div>`

    }

    if(numero === numeroSecreto){
        elementoChute.innerHTML = `
        <div> Você acertou !! <br>
        O número era ${chute}</div>
        
        <button id='jogar_novamente' class='btn_jogar'>Jogar novamente </button>

        `
        

    } else if (numero > numeroSecreto){
        elementoChute.innerHTML = `<div>${chute}<br>Dica: O número é menor <i class="fa-solid fa-arrow-down"></i></div>`
    }
      else if(numero < numeroSecreto){
        elementoChute.innerHTML = `<div>${chute}<br>Dica: O número é maior <i class="fa-solid fa-arrow-up"></i></div>`
      }
    
    

}


function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroInvalido(numero){
    return numero > maiorValor || numero < menorValor
}


document.body.addEventListener('click', e =>{
    if(e.target.id == 'jogar_novamente'){
        window.location.reload()
    }
})










