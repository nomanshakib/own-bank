document.getElementById("btn-deposit").addEventListener('click', function () {
    
    const currentDepositField = document.getElementById("deposit-field");
    const currentDepositAmountString = currentDepositField.value;
    const currentDepositAmount = parseFloat(currentDepositAmountString);

    const previousDeposit = document.getElementById("deposit-total-display");
    const previousTotalDepositString = previousDeposit.innerText;
    const previousTotalDeposit = parseFloat(previousTotalDepositString);

    const totalCurrentDepositDisplay = previousTotalDeposit + currentDepositAmount;

    previousDeposit.innerText = totalCurrentDepositDisplay; 

    const previousTotalBalanceGet = document.getElementById("total-balance");
    const previousTotalBalanceString = previousTotalBalanceGet.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceString);

    /* calculate current total balance */

    const currentTotalBalanceDisplay = previousTotalBalance + currentDepositAmount;
    previousTotalBalanceGet.innerText = currentTotalBalanceDisplay;

    /* Clear the deposit field */
    currentDepositField.value = '';
})