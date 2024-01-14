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

    if(!isNaN(largura)  && !isNaN(altura)){

        document.querySelector('#resultado').innerHTML = result.toFixed(2);
        localStorage.setItem('width',largura);
        localStorage.setItem('height',altura);
        localStorage.setItem('resultado',result.toFixed(2));
       


    } else{

        alert('insira valores validos');
    }
    
}

function ValoresArmazenados(){
    
    const alturaArmazenada = localStorage.getItem('altura');
    const larguraArmazenada = localStorage.getItem('largura');
    const resultadoArmazenado = localStorage.getItem('resultado');

    document.querySelector('#height').value=alturaArmazenada;
    document.querySelector('#width').value= larguraArmazenada ;
    document.querySelector('#resultado').innerHTML=resultadoArmazenado ;

   
   
}

function Limpar(){
    let larguraLimpa=  document.querySelector('#width').value = '';
    let alturaLimpa =  document.querySelector('#height').value='';


    let resultado = "Aqui aparecerá  o resultado do seu calculo, indicando quantos baldes de tinta serão necessarios para pintar a parede";
    document.querySelector('#resultado').innerHTML = resultado;

    localStorage.clear();
    

}