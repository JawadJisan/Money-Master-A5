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


    /* // total expenses
    var totalExpenses = document.getElementById('totalExpenses');
    var totalExpensesTk = parseFloat(totalExpenses.innerText);

    var totalExpensesSum = foodInputTk + rentInputTk + clothesInputTk;
    console.log(totalExpensesSum);

    totalExpensesTk = totalExpensesSum; */

    // update food input tk to total expenses

    var totalExpenses = document.getElementById('totalExpenses');
    const totalExpensesText = totalExpenses.innerText;
    const totalExpensesTk = parseFloat(totalExpensesText);

    const totalExpensesTkSum = totalExpensesTk + foodInputTk + rentInputTk + clothesInputTk;

    totalExpenses.innerText = totalExpensesTkSum;



    // get the total income 
    const incomeInputText = document.getElementById('incomeInput');
    const incomeInputTk = parseFloat(incomeInputText.value);
    // console.log('my total monthly income is', incomeInputTk);
    const balance = document.getElementById('balance');
    const balanceText = balance.innerText;
    const balanceTk = parseFloat(balanceText);
    // console.log('remaining balance is', balanceTk);

    const balanceTkAvailable = incomeInputTk - totalExpensesTkSum;

    balance.innerText = balanceTkAvailable;
    console.log('remaining balance is', balanceTkAvailable);





    // clear food input text
    foodInputText.value = '';
    rentInputText.value = '';
    clothesInputText.value = '';
    totalExpenses.value = '';


}); 


// work with bonus & save section
document.getElementById('saveButton').addEventListener('click', function(){
    // console.log('save button clicked');

    var saveInputText = document.getElementById('saveInput');
    var saveInputTk = parseFloat(saveInputText.value) ;
    // console.log(saveInputTk);

    const saveWithbalanceTkAvailable = saveInputTk / 100 * balanceTkAvailable;
    console.log('i saved tk', saveInputTk , "% =",saveWithbalanceTkAvailable )

});