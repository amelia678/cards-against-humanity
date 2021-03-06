// dom selection
const triggerElement = document.querySelector('[data-trigger]');
const outputElement = document.querySelector('[data-output]');



// function that fetches card
function getCardQuestion () {
    fetch('http://my-little-cors-proxy.herokuapp.com/https://cardsagainsthumanity-api.herokuapp.com/pick')
        .then(r => r.json())
        // .then(convertToJson)
    //    .then(data => data)
       .then(cacheCard)
       .then(extractQuestion)
       .catch(showCachedQuestion)
       .then(drawCard)
}

// function convertToJson(r) {
//     return r.json();
// }

function cacheCard (cardObj) {
    if (cardObj.question) {
        console.log('Caching question to localStorage');
        localStorage.setItem('question', cardObj.question);
    }
    return cardObj;
}

function showCachedQuestion(err) {
    console.log(err);
    return localStorage.getItem('question');
}

function extractQuestion(cardObj) {
    // console.log(cardObj)
    return cardObj.question;
    
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
       .then(cacheAnswer)
       .then(extractAnswer)
       .catch(showCachedAnswer)
       .then(drawCard)
}

// function convertToJson(r) {
//     return r.json();
// }

function cacheAnswer (cardObj) {
    if (cardObj.answer) {
        console.log('Caching answer to localStorage');
        localStorage.setItem('answer', cardObj.answer);
    }
    return cardObj;
}

function extractAnswer(cardObj) {
    // console.log(cardObj)
    // return cardObj.question;
    return cardObj.answer
}

function showCachedAnswer(err) {
    console.log(err);
    return localStorage.getItem('answer')
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