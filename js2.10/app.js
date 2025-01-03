
function calcPrice(days) {
    let res;
    const dailyRate = 40;
    if (days === 1 || days === 2) {
        res = dailyRate * days;
    }
    else if (days >= 3 && days < 7) {
        res = dailyRate * days - 20;
    }
    else {
        res = dailyRate * days - 50;
    }
    console.log('Общая стоимость аренды авто на ' + days + ' дней cоставляет $' + res);
}
calcPrice(4);