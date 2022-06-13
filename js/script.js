const input = document.querySelector('.input');

input.addEventListener('input', function checkBigLetter() {
    const bigLetterCheckString = document.querySelector('.one-big-letter')
    const bigLetterRegEx = /[A-Z]/
    if (input.value.match(bigLetterRegEx)) {
        bigLetterCheckString.classList.add('green-text')
    } else {
        bigLetterCheckString.classList.remove('green-text')
    }
});

input.addEventListener('input', function checkNumber () {
    const numberCheckString = document.querySelector('.one-number');
    const numberRegEx = /\d+/;
    if (input.value.match(numberRegEx)) {
        numberCheckString.classList.add('green-text')
    } else {
        numberCheckString.classList.remove('green-text')
    }
});

input.addEventListener('input', function checkBigLetter() {
    const bigLetterCheckString = document.querySelector('.one-big-letter')
    const bigLetterRegEx = /[A-Z]/
    if (input.value.match(bigLetterRegEx)) {
        bigLetterCheckString.classList.add('green-text')
    } else {
        bigLetterCheckString.classList.remove('green-text')
    }
});

input.addEventListener('input', function checkPunktuationMark () {
    const punktuationMarkString = document.querySelector('.one-punktuation-mark');
    const punktuationMarkRegEx = /\W/;
    if (input.value.match(punktuationMarkRegEx)) {
        punktuationMarkString.classList.add('green-text')
    } else {
        punktuationMarkString.classList.remove('green-text')
    }
});

input.addEventListener('input', function checkInputLength () {
    const lengthString = document.querySelector('.length-string');
    if (input.value.length >= 8) {
        lengthString.classList.add('green-text')
    } else {
        lengthString.classList.remove('green-text')
    }
});

