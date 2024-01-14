window.addEventListener('load',ValoresArmazenados);

const btnCalc = document.querySelector("#botao")
btnCalc.addEventListener('click',(e)=>{
    e.preventDefault();
    
    calcular();
    
    
});


const btnLimpar = document.querySelector("#limpar")
btnLimpar.addEventListener('click',(e) => {
    e.preventDefault();
    Limpar();
});
function calcular(){
    const largura=  Number(document.querySelector('#width').value);
    const altura =  Number(document.querySelector('#height').value);
    
    let result = largura*altura*0.37;

    if(isNaN(result)){
        document.querySelector('#resultado').innerHTML = ` Aqui aparecerá  o resultado do seu calculo, indicando quantos baldes de tinta serão necessários para pintar a parede`; 
    }
    else{
        document.querySelector('#resultado').innerHTML = ` a quantidade de baldes necessarias para pintar a parede é ${result.toFixed(2)}`;
        localStorage.setItem('width',largura);
        localStorage.setItem('height',altura);
        localStorage.setItem('resultado',result.toFixed(2));

    }
       
    
}

function ValoresArmazenados(){
    
    const alturaArmazenada = localStorage.getItem('altura');
    const larguraArmazenada = localStorage.getItem('largura');
    const resultadoArmazenado = localStorage.getItem('resultado');

    document.querySelector('#height').value=alturaArmazenada;
    document.querySelector('#width').value= larguraArmazenada ;
    
    document.querySelector('#resultado').innerHTML = `A quantidade de baldes necessários para pintar a parede é ${resultadoArmazenado}`;

    

   
   
}

function Limpar(){
    let larguraLimpa=  document.querySelector('#width').value = '';
    let alturaLimpa =  document.querySelector('#height').value='';

    
    let resultado = "Aqui aparecerá  o resultado do seu calculo, indicando quantos baldes de tinta serão necessarios para pintar a parede";
    document.querySelector('#resultado').innerHTML = resultado;
    localStorage.clear();
    
    

}