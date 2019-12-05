// function getTotalPrice(iva = 10, a = 0, b = 0) {

//     const result = (a + b) * (1 + iva / 100);
//     return result;
// }

function getTotalPrice (iva = 10,...nums ) {
    if (nums) {
        const sum = nums.reduce((total,actualNum) => total + actualNum, 0);
        const result = sum * (1 + iva / 100);
        return result;
    } else { return 0 ;}
 
}

export { getTotalPrice };