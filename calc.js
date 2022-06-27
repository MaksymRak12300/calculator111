let a = ' '; //Перше число
let b = ' '; //Друге число
let sign = ' '; //Знак операції
let plusminus = '-'; //Мінус число
let finish = false; //Фініш активовано - не активовано
let finishM = false;
let outtext = '0'; //Початковий екран

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.',];
const action = ['-', '+', '×', '÷'];
const plusminusM = ['+/-'];
const percentM = ['%'];

const out = document.querySelector('.calc-screen p');

out.textContent = outtext;

//Функція очистки
function clearAll () {
    a = ' '; 
    b = ' '; 
    sign = ' '; 
    finish = false;
    out.textContent = '0';
}

//Функція для активування +/-
function PM () {
    plusminusBoolean = true;
}

function PTrue() {
    percentBoolean = true;
}

function PFalse () {
    percentBoolean = false;
}

document.querySelector('.plusminus').onclick = () => {
    PM()
    if (plusminusBoolean) {
        if (a === ' ' && b === ' ' && sign === ' ') {
            a = plusminus;
            plusminusBoolean = true;
        }else if (a!==' ' && b === ' ' && sign === ' ') {
            a = -a;
            plusminusBoolean = true;
        }else if (a!==' ' && b === ' ' && sign!==' ') {
            b = plusminus;
            plusminusBoolean = false
        }else if(a!==' ' && b!==' ' && sign!==' ') {
            b = -b;
            plusminusBoolean = false
        }else if (a!==' ' && b!==' ' && sign!==' ') {
            console.log('dcidbc')
            a = -a;
            plusminusBoolean = true;
        }    
    }   
}     
document.querySelector('.percent').onclick = () => {
    PTrue()
    if (percentBoolean) {
            PFalse()
        if (a === ' ' && b === ' ' && sign === ' ') {
            PTrue()
        }else if (a!==' ' && b === ' ' && sign === ' ') {
            a = a / 100;
            PFalse();
        }else if (a!==' ' && b === ' ' && sign!==' ') {
            PTrue()
        }else if (a!==' ' && b!==' ' && sign!==' ') {
            b = (a / 100) * b;
            PFalse();
        }
    }
}
document.querySelector('.ac').onclick = clearAll;
document.querySelector('.buttons').onclick = (event) => {
    if(!event.target.classList.contains('btn')) return;
    if(event.target.classList.contains('.ac')) return;
    out.textContent = '0';

    //Получаю кнопку
    const key = event.target.textContent;
    const plusminusKey = event.target.textContent;
    const percentKey = event.target.textContent;

    //Заношу - число на екран для фуекції +/-
    if (plusminusM.includes(plusminusKey)) {
        if (plusminusBoolean) {
        out.textContent = a;
        }else{
            out.textContent = b;
        }
    }

    if (percentM.includes(percentKey)) {
        if (percentBoolean) {
            return;
        }else if (a!==' ' && b === ' ' && sign === ' ') {
            out.textContent = a;
        }else if (a!==' ' && b === ' ' && sign!==' ') {
            return;
        }else if (a!==' ' && b!==' ' && sign ==='×' || sign === '÷') {
            out.textContent = 'Помилка';
        }else {
            out.textContent = b;
        }
    }

    //Перевіряю чи нажата кнопка 0-9 або .
    if (digit.includes(key)) {
        if (b === ' ' && sign === ' ') {
        a += key;
        console.log(a, b , sign);
        out.textContent = a;
        }else if (a!=='' && b!=='' && finish) {
        b = key;
        finish = false;
        out.textContent = b;
        }else{
            b += key;
            out.textContent = b;
         }
        console.log(a, b , sign);
        return;
    }
    
    //Перевіряю чи нажата кнопка + - / x
    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.log(a, b , sign);
        return;
    }

    // Перевіряю чи нажата кнопка =
    if (key === '=') {
        if (b === ' ') b = a;
        switch (sign) {
            case "+":
                a = (+a) + (+b);
                break;
            case "-":        
                a = a - b;
                break;
            case "×":
                a = a * b;
                break;
            case "÷":
                a = a / b;
                break;
        } 
        finish = true;
        out.textContent = a;
        console.log(a, b , sign) 
    }
}

