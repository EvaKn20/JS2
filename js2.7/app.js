
let num = prompt('Задать количество чисел, которые нужно вывести');
function squareNum (min,max){
    for(let i = min; i < max; i++){
        console.log(i ** 2);
    }
}
squareNum(0, num);
