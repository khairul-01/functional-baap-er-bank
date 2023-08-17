
document.getElementById('btn-deposit').addEventListener('click', function() {
   // Getting input value.
   const newDepositAmount = getInputValueById('deposit-input');
   // getting previous deposit total.
   const previousDepositTotal = getElementValueById('deposit-total');
   // setting new deposit value.
   const newDepositTotal = previousDepositTotal + newDepositAmount;
   setTextValueById('deposit-total', newDepositTotal);

   // getting previous balance 
   const previousBalance = getElementValueById('balance');
   const newBalance = previousBalance + newDepositAmount;
   // setting new balance
   setTextValueById('balance', newBalance);
})