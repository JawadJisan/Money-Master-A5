


// var calculateButton = 
document.getElementById('calculateButton').addEventListener('click', function(){
    // console.log('calculate button Clicked');


    var foodInputText = document.getElementById('foodInput');
    var foodInputTk = parseFloat(foodInputText.value) ;
    // console.log(foodInputTk);
    var rentInputText = document.getElementById('rentInput');
    var rentInputTk = parseFloat(rentInputText.value);;
    // console.log(rentInputTk);
    var clothesInputText = document.getElementById('clothesInput');
    var clothesInputTk = parseFloat(clothesInputText.value);
    // console.log(clothesInputTk);
    // update food input tk to total expenses
    var totalExpenses = document.getElementById('totalExpenses');
    const totalExpensesText = totalExpenses.innerText;
    const totalExpensesTk = parseFloat(totalExpensesText);
    const totalExpensesTkSum = totalExpensesTk + foodInputTk + rentInputTk + clothesInputTk;
    // get the total income 
    const incomeInputText = document.getElementById('incomeInput');
    const incomeInputTk = parseFloat(incomeInputText.value);
    // console.log('my total monthly income is', incomeInputTk);
    const balance = document.getElementById('balance');
    const balanceText = balance.innerText;
    const balanceTk = parseFloat(balanceText);
    // console.log('remaining balance is', balanceTk);
    const balanceTkAvailable = incomeInputTk - totalExpensesTkSum;
    console.log('Abaliavle balance is', balanceTkAvailable);

    if(totalExpensesTkSum <= incomeInputTk){
    
        totalExpenses.innerText = totalExpensesTkSum;

        balance.innerText = balanceTkAvailable;

    }
    else if(totalExpensesTkSum > incomeInputTk){
        alert('You spend more than you earn and as a result you run the risk of becoming financially indebted. So Please reduce your Expenses for calculate this mission??')
    }


    //check the input field typeOf
    
    if(isNaN(incomeInputTk)){
        alert('the alerat')
    }

    // clear food input text
    foodInputText.value = '';
    rentInputText.value = '';
    clothesInputText.value = '';
    totalExpenses.value = '';

}); 


function getTheAmount(inputId){
    var getElement = document.getElementById(inputId);
    const getElementText = getElement.innerText;
    const getElementTk = parseFloat(getElementText);
    return getElementTk;
}






// work with bonus & save section
document.getElementById('saveButton').addEventListener('click', function(){
    var saveInputText = document.getElementById('saveInput');
var saveInputTk = parseFloat(saveInputText.value) ;

const balance = document.getElementById('balance');
const balanceText = balance.innerText;
const balanceTk = parseFloat(balanceText);
const saveWithbalanceTkAvailable = saveInputTk / 100 * balanceTk;
const savingAmount = getTheAmount('savingAmount');
const remainingBalance = getTheAmount('remainingBalance');
const availableBalanceText = document.getElementById('balance').innerText;
const availableBalance = parseFloat(availableBalanceText);

const calculateRemainingBalance = availableBalance - saveWithbalanceTkAvailable; 





    if( saveInputTk <= 100){

        const saveWithbalanceTkAvailable = saveInputTk / 100 * balanceTk;
        document.getElementById('savingAmount').innerText = saveWithbalanceTkAvailable;
        document.getElementById('remainingBalance').innerText = calculateRemainingBalance;

        console.log('i can save lase then my available balance')
    }
    else if(saveInputTk > 100){
        alert('You Cannot Save More than Your Available Balance?? To save some money Please Input lase than 100% amount in this field?');
    }
    
    
    console.log(saveWithbalanceTkAvailable);
  

    // savingAmount.innerText = saveWithbalanceTkAvailable;
    
    console.log('the saving amount is' ,saveWithbalanceTkAvailable);

    // balanceTkAvailable
    
    console.log('the availaklfjasklfa balance', availableBalance);


    
    console.log('the remaining Balance', calculateRemainingBalance);

    

});