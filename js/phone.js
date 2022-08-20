function updatePhoneNumber(isIncrease){
  const phoneNumberValue = document.getElementById('phone-number-field');
  const phoneNumberString = phoneNumberValue.value;
  const phoneNumber = parseInt(phoneNumberString);
  let newPhoneNumber;
  if (isIncrease){
    newPhoneNumber = phoneNumber + 1;
  }
  else{
    newPhoneNumber = phoneNumber - 1;
  }

  phoneNumberValue.value = newPhoneNumber
return newPhoneNumber;
}

function phoneTotalPrice(newPhoneNumber){
const phonePriceTotal = newPhoneNumber * 1219;
const previousPhonePrice = document.getElementById('phone-total')
previousPhonePrice.innerText = phonePriceTotal;
}


document.getElementById('btn-phone-plus').addEventListener('click',function(){
  const newPhoneNumber =updatePhoneNumber(true);
  phoneTotalPrice(newPhoneNumber)
calculateSubTotal()
 

   
})
document.getElementById('btn-phone-minus').addEventListener('click', function(){
  const newPhoneNumber =updatePhoneNumber(false);
  phoneTotalPrice(newPhoneNumber)
  calculateSubTotal()
})