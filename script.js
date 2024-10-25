let output = document.querySelector('.output');
let themeSwitch = document.getElementById('theme-switch');

let currentNumber = '';
let previousNumber = '';
let operator = '';


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

    // Pastikan angka dikonversi ke tipe numerik
    let num1 = parseFloat(previousNumber);
    let num2 = parseFloat(currentNumber);

    // Cek jika ada input angka yang valid
    if (isNaN(num1) || isNaN(num2)) {
        output.textContent = 'Error';
        return;
    }

    // Lakukan operasi matematika berdasarkan operator
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

    // Ubah hasil berdasarkan tema yang aktif
    let displayResult;
    switch (operator) {
        case '+':
            displayResult = currentTheme === 'dark' ? "halo intan" : "jangan suka nyebelin juga";
            break;
        case '-':
            displayResult = currentTheme === 'dark' ? "pasti kaget wkwk" : "kalo dibilangin nurut gausah ngeyel";
            break;
        case '*':
            displayResult = currentTheme === 'dark' ? "jangan suka ngilang ngilang apalagi sambil dnd" : "okee sayang semangatt";
            break;
        case '/':
            displayResult = currentTheme === 'dark' ? "susah ntar aku nyariinnya" : "satu aja cukup kan wkwk";
            break;
        default:
            displayResult = 'Error';
    }

    // Tampilkan hasil
    output.textContent = displayResult;

    // Reset currentNumber dan previousNumber untuk input selanjutnya
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
    // Periksa apakah ada angka yang terinput
    if (currentNumber.length > 0) {
        currentNumber = currentNumber.slice(0, -1);
        output.textContent = currentNumber || '0';  // Tampilkan '0' jika input kosong
    }
}

let currentTheme = 'dark';  // Default theme

function toggleTheme(selectedTheme) {
    // Hapus semua tema yang mungkin sudah diterapkan
    document.body.classList.remove('theme-dark', 'theme-light');

    // Terapkan tema baru berdasarkan pilihan radio button
    document.body.classList.add(`theme-${selectedTheme}`);
    
    // Perbarui status tema saat ini
    currentTheme = selectedTheme;
}
