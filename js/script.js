const input = document.querySelector('.input');

input.addEventListener('input', () => {
    checkBigLetter();
    checkNumber();
    checkPunktuationMark();
    checkInputLength();
});

function checkBigLetter() {
    const bigLetterCheckString = document.querySelector('.one-big-letter')
    const bigLetterRegEx = /[A-Z]/
    if (input.value.match(bigLetterRegEx)) {
        bigLetterCheckString.classList.add('green-text')
    } else {
        bigLetterCheckString.classList.remove('green-text')
    }
};
function checkNumber() {
    const numberCheckString = document.querySelector('.one-number');
    const numberRegEx = /\d+/;
    if (input.value.match(numberRegEx)) {
        numberCheckString.classList.add('green-text');
    } else {
        numberCheckString.classList.remove('green-text');
    };
};
function checkPunktuationMark() {
    const punktuationMarkString = document.querySelector('.one-punktuation-mark');
    const punktuationMarkRegEx = /\W/;
    if (input.value.match(punktuationMarkRegEx)) {
        punktuationMarkString.classList.add('green-text')
    } else {
        punktuationMarkString.classList.remove('green-text')
    }
};
function checkInputLength() {
    const lengthString = document.querySelector('.length-string');
    const lengthStringRegEx = /^.{8,100}$/; {
        if (input.value.match(lengthStringRegEx)) {
            lengthString.classList.add('green-text')
        } else {
            lengthString.classList.remove('green-text')
        }
    };
};