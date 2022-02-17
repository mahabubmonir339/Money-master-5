// 1st- Button


function allIntegerValue() {
    const incomeValue = document.getElementById('totalIncome').value;
    const incomeValueInteger = parseInt(incomeValue);
    const foodValue = document.getElementById('foodCost').value;
    const foodValueInteger = parseInt(foodValue);
    const rentValue = document.getElementById('rentCost').value;
    const rentValueInteger = parseInt(rentValue);
    const clothValue = document.getElementById('clothCost').value;
    const clothValueInteger = parseInt(clothValue);
    const totalCost = foodValueInteger + rentValueInteger + clothValueInteger;
    const subtraction = incomeValueInteger - totalCost;
    const expenseValue = document.getElementById('totalExpense');
    expenseValue.innerText = totalCost;
    const balanceValue = document.getElementById('totalBalance');
    balanceValue.innerText = subtraction;
    return subtraction;
};

document.getElementById("totalCalculate").addEventListener("click", function () {
    allIntegerValue();
});

// 2nd- Button 
document.getElementById('saveButton').addEventListener('click', function () {
    const incomeValue = document.getElementById('totalIncome').value;
    const incomeValueInteger = parseInt(incomeValue);
    const parsentInputValue = document.getElementById('persentInput').value;
    const paesentInputData = parseInt(parsentInputValue);
    const persentValue = incomeValueInteger * paesentInputData;
    const finalParsent = persentValue / 100;
    const savingAmountValue = document.getElementById('savingAmount');
    savingAmountValue.innerText = finalParsent;
    const remainingBalanceTotal = document.getElementById('remainingBalance');
    remainingBalanceTotal.innerText = allIntegerValue() - finalParsent;

})