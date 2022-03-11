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

    // balance updated 
    const balancTotal = document.getElementById('balanc-total');
    const balaceTotalText = balancTotal.innerText;
    const peiviousBalnceTatal =parseFloat(balaceTotalText);

    const newBalace = peiviousBalnceTatal + newDepositeAmount;
    balancTotal.innerText = newBalace;
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


    const balancTotal = document.getElementById('balanc-total');
    const balaceTotalText = balancTotal.innerText;
    const peiviousBalnceTatal =parseFloat(balaceTotalText);

    const newBalace = peiviousBalnceTatal - newWithDrawAmount;
    balancTotal.innerText = newBalace;

    WithdrawInput.value = '';

})
