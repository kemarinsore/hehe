let output = document.querySelector('.output');
let themeSwitch = document.getElementById('theme-switch');

let currentNumber = '';
let previousNumber = '';
let operator = '';
let currentTheme = 'dark';  // Default theme

function appendNumber(number) {
    currentNumber += number;
    output.textContent = currentNumber;
}

function appendOperator(operatorSymbol) {
    operator = operatorSymbol;
    previousNumber = currentNumber;
    currentNumber = '';
    output.textContent = previousNumber + operator;
}

function calculate() {
    let result;

    let num1 = parseFloat(previousNumber);
    let num2 = parseFloat(currentNumber);

    // Pengecekan jika mode "light" dan angka "3.9" diinput
    if (currentTheme === 'light' && num2 === 3.9) {
        // Tampilkan modal
        let modal = document.getElementById('myModal');
        let span = document.getElementsByClassName('close')[0];

        modal.style.display = 'block';

        // Tutup modal ketika klik "x"
        span.onclick = function() {
            modal.style.display = 'none';
        }

        // Tutup modal ketika klik di luar modal
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        }

        return;  // Hentikan eksekusi lebih lanjut
    }

    if (isNaN(num1) || isNaN(num2)) {
        output.textContent = 'Error';
        return;
    }

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                output.textContent = 'Error: Division by zero';
                return;
            }
            result = num1 / num2;
            break;
        default:
            output.textContent = 'Error';
            return;
    }

    let displayResult;
    switch (operator) {
        case '+':
            displayResult = currentTheme === 'dark' ? "halo intan" : "jadi sama sama jaga diri masing masing yaa <3";
            break;
        case '-':
            displayResult = currentTheme === 'dark' ? "pasti kaget wkwk" : "okee sayang semangatt buat kita berdua <3";
            break;
        case '*':
            displayResult = currentTheme === 'dark' ? "jangan nakal nakal ya sayang" : "satu aja cukup kan wkwk";
            break;
        case '/':
            displayResult = currentTheme === 'dark' ? "kita lagi ga satu kota sekarang" : "habis ini kamu pencet angka 3.9 trus pencet = di mode 2";
            break;
        default:
            displayResult = 'Error';
    }

    output.textContent = displayResult;

    currentNumber = '';
    previousNumber = '';
    operator = '';
}

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operator = '';
    output.textContent = '0';
}

function deleteLast() {
    if (currentNumber.length > 0) {
        currentNumber = currentNumber.slice(0, -1);
        output.textContent = currentNumber || '0';
    }
}

function toggleTheme(selectedTheme) {
    document.body.classList.remove('theme-dark', 'theme-light');
    document.body.classList.add(`theme-${selectedTheme}`);
    currentTheme = selectedTheme;
}
