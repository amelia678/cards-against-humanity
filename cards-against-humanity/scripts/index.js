// dom selection
const triggerElement = document.querySelector('[data-trigger]');
const outputElement = document.querySelector('[data-output]');

// function that fetches card
function getCard () {
    fetch('http://my-little-cors-proxy.herokuapp.com/https://cardsagainsthumanity-api.herokuapp.com/pick')
        .then(r => r.json())
        // .then(convertToJson)
    //    .then(data => data)
       .then(extractCard)
       .then(drawCard)
}

// function convertToJson(r) {
//     return r.json();
// }

function extractCard(cardObj) {
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
    triggerElement.addEventListener('click', getCard);
}

main();