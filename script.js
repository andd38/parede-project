const btnCalc = document.querySelector("#botao")
btnCalc.addEventListener('click',(e)=>{
    e.preventDefault();
    calcular();
    console.log('ola');
    
})

const btnLimpar = document.querySelector("#limpar")
btnLimpar.addEventListener('click',(e) => {
    e.preventDefault();
    Limpar()
})

function calcular(){
    const largura=  Number(document.querySelector('#width').value);
    const altura =  Number(document.querySelector('#height').value);
    let result = largura*altura*0.37;
    document.querySelector('#resultado').innerHTML = result.toFixed(2);
    
}

function Limpar(){
    let larguraLimpa=  document.querySelector('#width').value = '';
    let alturaLimpa =  document.querySelector('#height').value='';


    let resultado = "Aqui aparecerá  o resulatado do seu calculo, indicando quantos baldes de tinta serão necessarios para pintar a parede";
    document.querySelector('#resultado').innerHTML = resultado;
    

}