function mindGame(number) {
    const multiplai = number*3;
    const sum= multiplai + 10;
    const bag = sum / 2;
    const result = bag -5;
    return result
}
// const result =mindGame(10)
// console.log(result);



function evenOdd(string) {
    let inputStr = string;

    if (inputStr.length % 2 === 0) {
        return "Even"
    } else {
        return "Odd"
    }
    
}

// const result2 =evenOdd('sohel')
// console.log(result2);



function isLGSeven (number) {
    const newNumber = number - 7;
    if (newNumber <7) {
        return newNumber
    } else {
        return number * 2;
    }
}
// const result3 = isLGSeven(17)
// console.log(result3);


function findingBadData(age) {
    let badData = []
    for (let i = 0; i < age.length; i++) {
        const singleAge = age[i];
        if (singleAge < 0) {
            badData.push(singleAge)
        } 
    }
    return badData.length;
}
const result4 = findingBadData([10,12,-10,-12])
console.log(result4);
