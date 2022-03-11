// console.log('added')
document.getElementById('deposite-btn').addEventListener('click' , function(){

    const depositeInput = document.getElementById('deposite-input');
    const newDepositeTExt = depositeInput.value;
    const newDepositeAmount =parseFloat(newDepositeTExt)
  

    const depositeTotal =document.getElementById('deposite-total');
    const PreviousDepositeText = depositeTotal.innerText;
    const PreviousDeposite =parseFloat(PreviousDepositeText)

    const newDepositeTotal = PreviousDeposite + newDepositeAmount;
    depositeTotal.innerText = newDepositeTotal;

    depositeInput.value = '';
});

// withDraw 

document.getElementById('Withdraw-btn').addEventListener('click', function(){

    const WithdrawInput =document.getElementById('Withdraw-input');
    const withDrawtext =WithdrawInput.value;
    const newWithDrawAmount =parseFloat(withDrawtext);

    const WithdrawTotal = document.getElementById('Withdraw-total');
    const withDrawTotalText = WithdrawTotal.innerText;
    const priviousWithdraw =parseFloat(withDrawTotalText);

    const newWithDrawTotal =priviousWithdraw + newWithDrawAmount;
    WithdrawTotal.innerText = newWithDrawTotal;

    WithdrawInput.value = '';

})
