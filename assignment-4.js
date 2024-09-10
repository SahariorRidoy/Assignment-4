


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





/*Problem-2 */
function sendNotification(email) {
    
    if(typeof email !== 'string' || !email.includes('@')){
        return "Invalid Email"  
    }
    const splittedArray = email.split('@');
    const userName =splittedArray[0];
    const domainName =splittedArray[1];
    const notificationMessage=userName+" sent you an email from "+domainName;
    return notificationMessage;
}

// console.log(sendNotification("zihad@gmail.com"));

