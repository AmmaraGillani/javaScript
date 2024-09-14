// console.log(null < 0);//false
// console.log(null > 0);//false
// console.log(null == 0);//false because all terms not convert only check null less than, greater than and equal to 0 and return false
// console.log(null <= 0);//true because in comparisons firstly null convert into number and null in number is 0 so 0 is equal to 0, so its return true

// console.log(undefined < 0);
// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined <= 0); because in undefined conversion alway in undefined


// ===

console.log("2" === 2); // false because this is used in typescript and in ts strickly datatypes not changes, firstly it check the datatype not same then it return false 
console.log("2" == 2); // return true because firstly conversion into string then check it same return true