function mindGame(number) {
    const multiplai = number*3;
    const sum= multiplai + 10;
    const bag = sum / 2;
    const result = bag -5;
    return result
}
const result =mindGame(10)
console.log(result);



function evenOdd(string) {
    let inputStr = string;

    if (inputStr.length % 2 === 0) {
        return "Even"
    } else {
        return "Odd"
    }
    
}

const result2 =evenOdd('sohel')
console.log(result2);