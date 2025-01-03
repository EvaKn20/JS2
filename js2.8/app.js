function getRandomRGB() {
    const r = getRandomInteger(0, 256); 
    const g = getRandomInteger(0, 256); 
    const b = getRandomInteger(0, 256); 

    return `rgb(${r},${g},${b})`;
}
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
    }
 

console.log(getRandomRGB());
