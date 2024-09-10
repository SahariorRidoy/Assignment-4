


function calculateTax(income, expenses) {
if(income <= 0 || expenses <= 0 || income < expenses){
    return "Invalid Input"
}

 const remainingTaka=income-expenses;
const totalTax=remainingTaka*.2;
return totalTax;

}

// const output =calculateTax(6000, 11500);
// console.log(output);



