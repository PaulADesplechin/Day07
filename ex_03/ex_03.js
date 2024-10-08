function map(elements, modifier) {
    const result = [];

    for (let i = 0; i < elements.length; i++) {
        
        result.push(modifier(elements[i]));
    }

    return result;
}

function isEven(number) {
    return number % 2 === 0;
}

const numbers = [5, 8, 10];
console.log(map(numbers, isEven));