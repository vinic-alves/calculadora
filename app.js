//manipulando a calculadora através do dom
let display = document.querySelector('span');
let container = document.getElementById('container');
let numbers = document.getElementsByClassName('numbers');



function capturaClick(){
    addEventListener('click', function(e){
         let mostraNatela = display.innerText = e.target.id;
         if(mostraNatela === "erase-all"){
            display.innerText=0;
        }
        
    })
    
}

capturaClick();