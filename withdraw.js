document.getElementById('btn-withdraw').addEventListener('click', function () {
    
    /* Withdraw field Get */
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    
    /* withdraw total display get */
    const withdrawTotalDisplayElement = document.getElementById('withdraw-total-display');
    const previousWithdrawTotalString = withdrawTotalDisplayElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    
    /* previous and new withdraw add to display */
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalDisplayElement.innerText = currentWithdrawTotal;

    /* Total main balance get */
    const previousTotalBalanceGet = document.getElementById("total-balance");
    const previousTotalBalanceString = previousTotalBalanceGet.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceString);


    /* withdraw amount minus from main balance */
    const newTotalBalanceDisplayAfterWithdraw = previousTotalBalance - newWithdrawAmount;
    previousTotalBalanceGet.innerText = newTotalBalanceDisplayAfterWithdraw;

    withdrawField.value = '';

})