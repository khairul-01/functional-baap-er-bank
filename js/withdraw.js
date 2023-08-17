
document.getElementById('btn-withdraw').addEventListener('click', function() {
   // Getting withdraw input value
   const newWithdrawValue = getInputValueById('withdraw-input');
   // Getting previous withdraw value
   const previousWithdrawValue = getElementValueById('withdraw-amount');
   const totalWithdrawValue = previousWithdrawValue + newWithdrawValue;
   // getting previous balance
   const previousBalance = getElementValueById('balance');
   if ((newWithdrawValue < previousBalance) && (newWithdrawValue >0)) {
      // setting total deposit balance
      setTextValueById('withdraw-amount', totalWithdrawValue);
      const newBalance = previousBalance - newWithdrawValue;
      // setting current balance
      setTextValueById('balance', newBalance);
   }
   else {
      alert('Invalid input! Please enter valid value.')
   }
})