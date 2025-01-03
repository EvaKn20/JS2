const number = prompt('Введите целое число');
function Num (){
    for(let i = 1; i < number; i += 0.5){
if(i % 1 === 0){
    console.log(i + ' integer');
}else{
    console.log(i + ' decimal');
}
    }
}
Num();