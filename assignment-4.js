


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




function checkDigitsInName(name) {
   if(typeof name !== 'string'){
    return "Invalid Input"
   }

  for(let i=0; i<name.length;i++){
    if(name[i]>="0" && name[i]<="9"){
        return true;
    }
  }
  return false;

}
// console.log(checkDigitsInName("Raj123"));   
// console.log(checkDigitsInName("n9ayeem"));  
// console.log(checkDigitsInName("e1mu3"));    
// console.log(checkDigitsInName("Suman"));    
// console.log(checkDigitsInName("Name2024")); 
// console.log(checkDigitsInName("!@#"));      
// console.log(checkDigitsInName(["Raj"])); 





// Problem 4
function calculateFinalScore(obj) {
    if(typeof obj !== 'object'){
        return "Invalid Input"
       }

 const farmerFamily =20;    
 let finalMark=obj.testScore+obj.schoolGrade;

if (obj.isFFamily){
finalMark +=farmerFamily;
}
if(finalMark>=80){
    return true;
}else{
    return false;
}

}

// console.log(calculateFinalScore({ name: "Rajib", testScore: 50,  schoolGrade: 29, isFFamily : false  }) );
 
   




function  waitingTime(waitingTimes  , serialNumber) {
    if (serialNumber<waitingTimes.length || waitingTimes !=Array.isArray || typeof serialNumber !="number" ){
        return "Invalid Input"
    }

    let sumOfArray=0;
    for(const waitTime of waitingTimes){
         sumOfArray +=waitTime;
    }
    let avg= sumOfArray/waitingTimes.length;
        avg =Math.round(avg)
    let remainingPerson=serialNumber-waitingTimes.length-1;
    let finalWaitTime=avg*remainingPerson;
    return finalWaitTime;
     

}


// console.log(waitingTime(7 , 10));





