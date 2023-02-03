const customRadio = document.getElementById('tip-custom');
const customInput = document.getElementById('tip-custom-amount');
const bill = document.getElementById('bill');
const numOfPeople = document.getElementById('num-of-people');
const tipAmountElement = document.getElementById('tip-amount-num');
const totalElement = document.getElementById('total-num');
const zeroError = document.getElementById('zero-error');
let tipAmount = `$0.00`;
let total = `$0.00`;
tipAmountElement.textContent = tipAmount;
totalElement.textContent = total;


function customTip() {
    if (customInput === document.activeElement) {
        customRadio.checked = true;
    } 

    calculate();
}

function changeTip(tipInput=0) {
    if(numOfPeople.value != 0) {
        tipAmount = `$${(bill.value * tipInput / numOfPeople.value).toFixed(2)}`;
        total = `$${((bill.value * tipInput / numOfPeople.value) + (bill.value / numOfPeople.value)).toFixed(2)}`;
    }

    tipAmountElement.textContent = tipAmount;
    totalElement.textContent = total;
}

function calculate() {

    let tipInput = document.querySelector('input[name = "select-tip"]:checked');

    if (numOfPeople.value == 0) {
        zeroError.classList.remove('hidden');
        numOfPeople.classList.add('error-input');
    } else {
        zeroError.classList.add('hidden');
        numOfPeople.classList.remove('error-input');
    }
    
    if (bill.value != null && tipInput != null && numOfPeople.value != 0) {
        if (customRadio.checked && (customInput.value != 0 || customInput.value != null)) {
            tipAmount = `$${(bill.value * (customInput.value / 100) / numOfPeople.value).toFixed(2)}`;
            total = `$${((bill.value * (customInput.value / 100) / numOfPeople.value) + (bill.value / numOfPeople.value)).toFixed(2)}`;
            console.log(total);
        } else {
            tipAmount = `$${(bill.value * tipInput.value / numOfPeople.value).toFixed(2)}`;
            total = `$${((bill.value * tipInput.value / numOfPeople.value) + (bill.value / numOfPeople.value)).toFixed(2)}`;
            console.log(total);
        }
    }

    tipAmountElement.textContent = tipAmount;
    totalElement.textContent = total;

}

function reset() {
    tipAmountElement.textContent = '$0.00';
    totalElement.textContent = '$0.00';

    bill.value = null;
    numOfPeople.value = null;
    customInput.value = null;

    let tipInput = document.querySelector('input[name = "select-tip"]:checked');
    tipInput.checked = false;
}