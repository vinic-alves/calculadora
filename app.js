//manipulando a calculadora através do dom
let display = document.querySelector('span');
let container = document.getElementById('container');
number1 =container.childNodes[13];

function capturaClick(){
    addEventListener('click', function(){
        display.innerText= number1.innerHTML;
    })
}
capturaClick();
console.log(number1.content);


