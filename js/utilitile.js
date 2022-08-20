function updatePriceByValue(elementId){
    const phoneTotal = document.getElementById(elementId)
    const phoneTotalString = phoneTotal.innerText;
    const phoneTotalValue = parseInt(phoneTotalString);
  
    return phoneTotalValue ;
  }
  
  function calculateSubTotal (){
    const currentPhoneTotal = updatePriceByValue('case-total');
    const currentCaseTotal =  updatePriceByValue('phone-total')
    const subTotal = currentPhoneTotal + currentCaseTotal;
    const subTotalvalue = document.getElementById('sub-total');
    subTotalvalue.innerText = subTotal;

// tax calculation
    const taxAmount = subTotal * 0.1;
    const taxField  = document.getElementById('tax');
    taxField.innerText = taxAmount;

    // final calculatlation

    const finalAmount = document.getElementById('final-total');
    const totalAmount = subTotal + taxAmount;
    finalAmount.innerText = totalAmount;
  }

  