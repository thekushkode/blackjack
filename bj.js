const deck = [
    { face: '2', value: 2, suit: 'clubs' }, { face: '2', value: 2, suit: 'spades' }, { face: '2', value: 2, suit: 'hearts' }, { face: '2', value: 2, suit: 'diamonds' },
    { face: '3', value: 3, suit: 'clubs' }, { face: '3', value: 3, suit: 'spades' }, { face: '3', value: 3, suit: 'hearts' }, { face: '3', value: 3, suit: 'diamonds' },
    { face: '4', value: 4, suit: 'clubs' }, { face: '4', value: 4, suit: 'spades' }, { face: '4', value: 4, suit: 'hearts' }, { face: '4', value: 4, suit: 'diamonds' },
    { face: '5', value: 5, suit: 'clubs' }, { face: '5', value: 5, suit: 'spades' }, { face: '5', value: 5, suit: 'hearts' }, { face: '5', value: 5, suit: 'diamonds' },
    { face: '6', value: 6, suit: 'clubs' }, { face: '6', value: 6, suit: 'spades' }, { face: '6', value: 6, suit: 'hearts' }, { face: '6', value: 6, suit: 'diamonds' },
    { face: '7', value: 7, suit: 'clubs' }, { face: '7', value: 7, suit: 'spades' }, { face: '7', value: 7, suit: 'hearts' }, { face: '7', value: 7, suit: 'diamonds' },
    { face: '8', value: 8, suit: 'clubs' }, { face: '8', value: 8, suit: 'spades' }, { face: '8', value: 8, suit: 'hearts' }, { face: '8', value: 8, suit: 'diamonds' },
    { face: '9', value: 9, suit: 'clubs' }, { face: '9', value: 9, suit: 'spades' }, { face: '9', value: 9, suit: 'hearts' }, { face: '9', value: 9, suit: 'diamonds' },
    { face: '10', value: 10, suit: 'clubs' }, { face: '10', value: 10, suit: 'spades' }, { face: '10', value: 10, suit: 'hearts' }, { face: '10', value: 10, suit: 'diamonds' },
    { face: 'jack', value: 10, suit: 'clubs' }, { face: 'jack', value: 10, suit: 'spades' }, { face: 'jack', value: 10, suit: 'hearts' }, { face: 'jack', value: 10, suit: 'diamonds' },
    { face: 'queen', value: 10, suit: 'clubs' }, { face: 'queen', value: 10, suit: 'spades' }, { face: 'queen', value: 10, suit: 'hearts' }, { face: 'queen', value: 10, suit: 'diamonds' },
    { face: 'king', value: 10, suit: 'clubs' }, { face: 'king', value: 10, suit: 'spades' }, { face: 'king', value: 10, suit: 'hearts' }, { face: 'king', value: 10, suit: 'diamonds' },
    { face: 'ace', value: 11, suit: 'clubs' }, { face: 'ace', value: 11, suit: 'spades' }, { face: 'ace', value: 11, suit: 'hearts' }, { face: 'ace', value: 11, suit: 'diamonds' }, { face: '2', value: 2, suit: 'clubs' }, { face: '2', value: 2, suit: 'spades' }, { face: '2', value: 2, suit: 'hearts' }, { face: '2', value: 2, suit: 'diamonds' },
    { face: '3', value: 3, suit: 'clubs' }, { face: '3', value: 3, suit: 'spades' }, { face: '3', value: 3, suit: 'hearts' }, { face: '3', value: 3, suit: 'diamonds' },
    { face: '4', value: 4, suit: 'clubs' }, { face: '4', value: 4, suit: 'spades' }, { face: '4', value: 4, suit: 'hearts' }, { face: '4', value: 4, suit: 'diamonds' },
    { face: '5', value: 5, suit: 'clubs' }, { face: '5', value: 5, suit: 'spades' }, { face: '5', value: 5, suit: 'hearts' }, { face: '5', value: 5, suit: 'diamonds' },
    { face: '6', value: 6, suit: 'clubs' }, { face: '6', value: 6, suit: 'spades' }, { face: '6', value: 6, suit: 'hearts' }, { face: '6', value: 6, suit: 'diamonds' },
    { face: '7', value: 7, suit: 'clubs' }, { face: '7', value: 7, suit: 'spades' }, { face: '7', value: 7, suit: 'hearts' }, { face: '7', value: 7, suit: 'diamonds' },
    { face: '8', value: 8, suit: 'clubs' }, { face: '8', value: 8, suit: 'spades' }, { face: '8', value: 8, suit: 'hearts' }, { face: '8', value: 8, suit: 'diamonds' },
    { face: '9', value: 9, suit: 'clubs' }, { face: '9', value: 9, suit: 'spades' }, { face: '9', value: 9, suit: 'hearts' }, { face: '9', value: 9, suit: 'diamonds' },
    { face: '10', value: 10, suit: 'clubs' }, { face: '10', value: 10, suit: 'spades' }, { face: '10', value: 10, suit: 'hearts' }, { face: '10', value: 10, suit: 'diamonds' },
    { face: 'jack', value: 10, suit: 'clubs' }, { face: 'jack', value: 10, suit: 'spades' }, { face: 'jack', value: 10, suit: 'hearts' }, { face: 'jack', value: 10, suit: 'diamonds' },
    { face: 'queen', value: 10, suit: 'clubs' }, { face: 'queen', value: 10, suit: 'spades' }, { face: 'queen', value: 10, suit: 'hearts' }, { face: 'queen', value: 10, suit: 'diamonds' },
    { face: 'king', value: 10, suit: 'clubs' }, { face: 'king', value: 10, suit: 'spades' }, { face: 'king', value: 10, suit: 'hearts' }, { face: 'king', value: 10, suit: 'diamonds' },
    { face: 'ace', value: 11, suit: 'clubs' }, { face: 'ace', value: 11, suit: 'spades' }, { face: 'ace', value: 11, suit: 'hearts' }, { face: 'ace', value: 11, suit: 'diamonds' }, { face: '2', value: 2, suit: 'clubs' }, { face: '2', value: 2, suit: 'spades' }, { face: '2', value: 2, suit: 'hearts' }, { face: '2', value: 2, suit: 'diamonds' },
    { face: '3', value: 3, suit: 'clubs' }, { face: '3', value: 3, suit: 'spades' }, { face: '3', value: 3, suit: 'hearts' }, { face: '3', value: 3, suit: 'diamonds' },
    { face: '4', value: 4, suit: 'clubs' }, { face: '4', value: 4, suit: 'spades' }, { face: '4', value: 4, suit: 'hearts' }, { face: '4', value: 4, suit: 'diamonds' },
    { face: '5', value: 5, suit: 'clubs' }, { face: '5', value: 5, suit: 'spades' }, { face: '5', value: 5, suit: 'hearts' }, { face: '5', value: 5, suit: 'diamonds' },
    { face: '6', value: 6, suit: 'clubs' }, { face: '6', value: 6, suit: 'spades' }, { face: '6', value: 6, suit: 'hearts' }, { face: '6', value: 6, suit: 'diamonds' },
    { face: '7', value: 7, suit: 'clubs' }, { face: '7', value: 7, suit: 'spades' }, { face: '7', value: 7, suit: 'hearts' }, { face: '7', value: 7, suit: 'diamonds' },
    { face: '8', value: 8, suit: 'clubs' }, { face: '8', value: 8, suit: 'spades' }, { face: '8', value: 8, suit: 'hearts' }, { face: '8', value: 8, suit: 'diamonds' },
    { face: '9', value: 9, suit: 'clubs' }, { face: '9', value: 9, suit: 'spades' }, { face: '9', value: 9, suit: 'hearts' }, { face: '9', value: 9, suit: 'diamonds' },
    { face: '10', value: 10, suit: 'clubs' }, { face: '10', value: 10, suit: 'spades' }, { face: '10', value: 10, suit: 'hearts' }, { face: '10', value: 10, suit: 'diamonds' },
    { face: 'jack', value: 10, suit: 'clubs' }, { face: 'jack', value: 10, suit: 'spades' }, { face: 'jack', value: 10, suit: 'hearts' }, { face: 'jack', value: 10, suit: 'diamonds' },
    { face: 'queen', value: 10, suit: 'clubs' }, { face: 'queen', value: 10, suit: 'spades' }, { face: 'queen', value: 10, suit: 'hearts' }, { face: 'queen', value: 10, suit: 'diamonds' },
    { face: 'king', value: 10, suit: 'clubs' }, { face: 'king', value: 10, suit: 'spades' }, { face: 'king', value: 10, suit: 'hearts' }, { face: 'king', value: 10, suit: 'diamonds' },
    { face: 'ace', value: 11, suit: 'clubs' }, { face: 'ace', value: 11, suit: 'spades' }, { face: 'ace', value: 11, suit: 'hearts' }, { face: 'ace', value: 11, suit: 'diamonds' },
];

// assign string url to all src keys
const getUrlForEveryCard = () => {
    for (let i = 0; i < deck.length; i++) {
        const card = deck[i]["face"];
        const cardSuit = deck[i]["suit"];
        const url = `images/${card}_of_${cardSuit}.png`
        deck[i]["src"] = url;
        console.log(url);
    }
    console.log(deck);
}
getUrlForEveryCard();
console.log(getUrlForEveryCard());


// shuffle the deck
const shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
shuffleArray(deck);

// establish img element, set src, and points value
const cardImg1 = document.createElement("img");
const card1Obj = deck[getRandomInt(156)];
const card1src = card1Obj["src"];
const card1value = card1Obj["value"];
deck.shift();

const cardImg2 = document.createElement("img");
const card2Obj = deck[getRandomInt(155)];
const card2src = card2Obj["src"];
const card2value = card2Obj["value"];
deck.shift();

const cardImg3 = document.createElement("img");
const card3Obj = deck[getRandomInt(154)];
const card3src = card3Obj["src"];
const card3value = card3Obj["value"];
deck.shift();

const cardImg4 = document.createElement("img");
const card4Obj = deck[getRandomInt(153)];
const card4src = card4Obj["src"];
const card4value = card4Obj["value"];
deck.shift();

// Create variables to hold points
let p_Points = 0;
let d_Points = 0;

// Access dealer points label
const dealerPoints = document.getElementById("dealer-points");
const playerPoints = document.getElementById("player-points");

// //deal cards function --> inserted in deal button event
const dealCards = () => {
    for (let i = 0; i < 1; i++) {
        cardImg1.setAttribute("src", card1src);
        cardImg1.setAttribute("data-attribute", card2value);
        playerHand.appendChild(cardImg1);
        p_Points += card1value;

        cardImg2.setAttribute("src", card2src);
        cardImg2.setAttribute("data-attribute", card2value);
        dealerHand.appendChild(cardImg2);
        d_Points += card2value;

        cardImg3.setAttribute("src", card3src);
        cardImg3.setAttribute("data-attribute", card3value);
        playerHand.appendChild(cardImg3);
        p_Points += card3value;
        playerPoints.textContent = p_Points

        cardImg4.setAttribute("src", card4src);
        cardImg4.setAttribute("data-attribute", card4value);
        dealerHand.appendChild(cardImg4);
        d_Points += card4value;
        dealerPoints.textContent = d_Points
    }
};

// Access button <div> & create variables for button
const buttonDiv = document.querySelector("buttons");
const dealButton = document.getElementById("deal-button");
const hitButton = document.getElementById("hit-button");
const standButton = document.getElementById("stand-button");

// Access and create variables for dealer/ player hands
const dealerHand = document.getElementById("dealer-hand");
const playerHand = document.getElementById("player-hand");

// deal button click event
dealButton.addEventListener("click", () => {
    dealCards();
    if (p_Points === 21) {
        playerPoints.textContent = "🎲 BLACKJACK! 🎲";
        setTimeout(reload, 3000);
    }
})

// hit button click event
hitButton.addEventListener("click", () => {
    let hitCard = document.createElement("img");
    let hitCardObj = deck[getRandomInt(48)];
    let hitCardSrc = hitCardObj["src"];
    let hitCardValue = hitCardObj["value"];
    hitCard.setAttribute("src", hitCardSrc);
    playerHand.appendChild(hitCard);
    p_Points += hitCardValue;
    playerPoints.textContent = p_Points
    deck.shift();
    bust();
});

// Stand button click event
standButton.addEventListener("click", () => {
    dealerHit();
    bust();
});

// Dealer hit function
const dealerHit = function () {
    while (d_Points < p_Points || d_Points === 16) {
        let dealerHitCard = document.createElement("img");
        let dealerHitCardObj = deck[getRandomInt(48)];
        let dealerHitCardSrc = dealerHitCardObj["src"];
        let dealerHitCardValue = dealerHitCardObj["value"];
        dealerHitCard.setAttribute("src", dealerHitCardSrc);
        dealerHand.appendChild(dealerHitCard);
        d_Points += dealerHitCardValue;
        dealerPoints.textContent = d_Points;
        deck.shift();
    }
    winner();
}

// Decide winner
const winner = function () {
    if (d_Points === 17 && p_Points > 17) {
        playerPoints.textContent = "You won, bro!";
    } else if (d_Points > 21) {
        playerPoints.textContent = "You won, bro!";
    } else if (d_Points <= 21 && d_Points > p_Points) {
        playerPoints.textContent = "You lost, loser!";
        setTimeout(reload, 3000);;
    } else if (d_Points === p_Points) {
        playerPoints.textContent = "TIE!";
        dealerPoints.textContent = "TIE";
    }
}


// bust function- posts "you busted", resets game
const bust = function () {
    if (p_Points > 21) {
        playerPoints.textContent = "💣 You Busted! 💣";
        setTimeout(reload, 3000);
    } else if (d_Points > 21) {
        dealerPoints.textContent = "💣 Dealer Busted! 💣";
        setTimeout(reload, 3000);
    } else if (p_Points === d_Points) {
        playerPoints.textContent = "IT'S A TIE!";
        dealerPoints.textContent = "IT'S A TIE!";
        setTimeout(reload, 3000);
    }
};

// reload page, resets game and deck
const reload = function () {
    location.reload(true);
}

// ********************* Below Items Arent In Use ******************************

// random integer based on argument. (52) gives random int b/w 0-52.
function getRandomInt(cardCount) {
    return Math.floor(Math.random() * Math.floor(cardCount));
}
console.log(getRandomInt(156))
console.log(deck[getRandomInt(156)]);

// gets obj based on string
const z = deck.find(obj => obj.src === "images/king_of_hearts.png");
console.log(z);
// finds index of above obj
const w = deck.indexOf(z);
console.log(w);

