// dom selection
const triggerElement = document.querySelector('[data-trigger]');
const outputElement = document.querySelector('[data-output]');



// function that fetches card
function getCardQuestion () {
    fetch('http://my-little-cors-proxy.herokuapp.com/https://cardsagainsthumanity-api.herokuapp.com/pick')
        .then(r => r.json())
        // .then(convertToJson)
    //    .then(data => data)
       .then(extractQuestion)
       .then(drawCard)
}

// function convertToJson(r) {
//     return r.json();
// }

function extractQuestion(cardObj) {
    // console.log(cardObj)
    return cardObj.question;
    console.log(cardObj.answer)
}

// function that draws card to DOM

function drawCard(cardText) {
    const newCard = document.createElement('div');
    newCard.textContent = cardText;

    // append
    outputElement.appendChild(newCard);
}




// main function that attaches button listener
function main() {
    triggerElement.addEventListener('click', getCardQuestion);
}

main();

// second button
const triggerElement2 = document.querySelector('[data-trigger2]');
const outputElement2 = document.querySelector('[data-output2]');

// function that fetches card
function getCardAnswer () {
    fetch('http://my-little-cors-proxy.herokuapp.com/https://cardsagainsthumanity-api.herokuapp.com/pick')
        .then(r => r.json())
        // .then(convertToJson)
    //    .then(data => data)
       .then(extractAnswer)
       .then(drawCard)
}

// function convertToJson(r) {
//     return r.json();
// }

function extractAnswer(cardObj) {
    // console.log(cardObj)
    // return cardObj.question;
    return cardObj.answer
}

// function that draws card to DOM

function drawCard(cardText) {
    const newCard = document.createElement('div');
    newCard.textContent = cardText;

    // append
    outputElement2.appendChild(newCard);
}




// main function that attaches button listener
function main2() {
    triggerElement2.addEventListener('click', getCardAnswer);
}

main2();
