// All Function Validity Check Complete.


function mindGame(number) {
  const inputNumber = number;
  if (typeof inputNumber === "number") {
    const multiplai = inputNumber * 3;
    const sum = multiplai + 10;
    const vagFol = sum / 2;
    const result = vagFol - 5;
    return result;
  } else {
    return "plz input valid number";
  }
}
// this function work in input number * 3 + 10 / 2 - 5 total result Show In Function. in recived 1 number peramiter.

function evenOdd(string) {
  let inputStr = string;
  if (typeof inputStr === "string") {
    if (inputStr.length % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  } else {
    return "Plz Valid String";
  }
}
// this function work is some string is length check and return even or odd.


function isLGSeven(number) {
  const newNumber = number - 7;
  if (typeof number === "number") {
    if (newNumber < 7) {
      return newNumber;
    } else {
      return number * 2;
    }
  } else {
    return "Plz Valid Input Number ";
  }
}

// this function check is les then 7 return this value. and geter then 7 this value multipli 2 and return total value.


function findingBadData(age) {
  let badData = [];
  if (Array.isArray(age) === true) {
    for (let i = 0; i < age.length; i++) {
      const singleAge = age[i];
      if (singleAge < 0) {
        badData.push(singleAge);
      }
    }
  }
  else{
    return " Plz Valid Input Array"
  }
  return badData.length;
}

// this function is work arry in age check this value  les then 0 .so this value is BadData.and return badData list number.


function gemsToDiamond(friend1, friend2, friend3) {
  const friend1Gems = friend1 * 21;
  const friend2Gems = friend2 * 32;
  const friend3Gems = friend3 * 43;
  const totalGems = friend1Gems + friend2Gems + friend3Gems;
  if (typeof friend1 === "number" && typeof friend2 === "number" && typeof friend3 === "number") {
  if (totalGems < 2000) {
    return totalGems;
  } else {
    const newGems = totalGems - 2000;
    return newGems;
  }
}
else{
  return " Plz Valid Input Number 3 Peramiter"
}
}
// this function multipli 3 friend gems and les then 2000 return this value. and total value geter then 2000 . then 2000 - this value and reult return.