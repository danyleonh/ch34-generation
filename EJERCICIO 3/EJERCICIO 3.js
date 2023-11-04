function sumAndProduct(array) {
    let sum = 0;
    let product = 1;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        product *= array[i];
    }
    return [sum, product];
}

let array = [1, 2, 3, 4];
let [sum, product] = sumAndProduct(array);
console.log("Given an array " + array + " The sum is " + sum + ". The product is " + product + ".");
