function init() {
    randomNum = Math.floor(Math.random() * 10);
    let num1 = Math.floor(Math.random() * 10);
    let num2 = Math.floor(Math.random() * 10);
    document.getElementById('num1').value = num1;
    document.getElementById('num2').value = num2;
    console.log('Random number generated: ' + randomNum);
    console.log('First number: ' + num1);
    console.log('Second number: ' + num2);

    hideInfo();
}





function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = 'Please enter valid numbers';
    } else {
        switch (operation) {
            case 'add':
                result = num1 + num2;
                break;
            case 'subtract':
                result = num1 - num2;
                break;
            case 'multiply':
                result = num1 * num2;
                break;
            case 'divide':
                result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
                break;
            default:
                result = 'Invalid operation';
        }
    }

    document.getElementById('result').textContent = result;
}

function increaseNum1() {
    const num1 = document.getElementById('num1');
    num1.value = parseInt(num1.value) + 1;
}

function increaseNum2() {
    const num2 = document.getElementById('num2');
    num2.value = parseInt(num2.value) + 1;
}

function decreaseNum1() {
    const num1 = document.getElementById('num1');
    num1.value = parseInt(num1.value) - 1;
}

function decreaseNum2() {
    const num2 = document.getElementById('num2');
    num2.value = parseInt(num2.value) - 1;
}