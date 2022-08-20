function upadteCaseNumber (isIncrease){
    const  caseNumberField = document.getElementById('case-number-field');

  const caseNumberString = caseNumberField.value ;
  const  previousCaseNumber = parseInt(caseNumberString);

  let newCaseNumber ;
  if(isIncrease){
    newCaseNumber = previousCaseNumber + 1
  }
  else{
    newCaseNumber = previousCaseNumber - 1 ;
  } 

  caseNumberField.value = newCaseNumber;
  return newCaseNumber;
}
function caseTotalPrice(newCaseNumber){
    const totalCasePrice = newCaseNumber * 59;
  const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = totalCasePrice;
}



document.getElementById('btn-case-plus').addEventListener('click', function(){
  const newCaseNumber = upadteCaseNumber(true)
  caseTotalPrice(newCaseNumber)
  calculateSubTotal()
  
})

document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumber=upadteCaseNumber()
    caseTotalPrice(newCaseNumber)
    calculateSubTotal()
})
