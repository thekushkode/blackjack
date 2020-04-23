const buttonDiv = document.querySelector("buttons");
const dealButton = document.getElementById("deal-button");
const hitButton = document.getElementById("hit-button");
const standButton = document.getElementById("stand-button");
const dealerHand = document.getElementById("dealer-hand");
const playerHand = document.getElementById("player-hand");

// const card1 = document.createElement("img");
// card1.setAttribute("src", "images/2_of_h.jpg");
// const card2 = document.createElement("img");
// card2.setAttribute("src", "JPEG/10H.jpg")
// const card3 = document.createElement("img");
// card3.setAttribute("src", "JPEG/10C.jpg");
// const card4 = document.createElement("img");
// card4.setAttribute("src", "JPEG/6C.jpg");
// const card5 = document.createElement("img");
// card5.setAttribute("src", "JPEG/5C.jpg")


dealButton.addEventListener("click", () => {
    dealerHand.appendChild(card1);
    dealerHand.appendChild(card2);
    playerHand.appendChild(card3);
    playerHand.appendChild(card4);
})

hitButton.addEventListener("click", () => {
    playerHand.appendChild(card5);
})

const deck = [
    { face_points: '2', suit: 'clubs' }, { face_points: '2', suit: 'spades' }, { face_points: '2', suit: 'hearts' }, { face_points: '2', suit: 'diamonds' },
    { face_points: '3', suit: 'clubs' }, { face_points: '3', suit: 'spades' }, { face_points: '3', suit: 'hearts' }, { face_points: '3', suit: 'diamonds' },
    { face_points: '4', suit: 'clubs' }, { face_points: '4', suit: 'spades' }, { face_points: '4', suit: 'hearts' }, { face_points: '4', suit: 'diamonds' },
    { face_points: '5', suit: 'clubs' }, { face_points: '5', suit: 'spades' }, { face_points: '5', suit: 'hearts' }, { face_points: '5', suit: 'diamonds' },
    { face_points: '6', suit: 'clubs' }, { face_points: '6', suit: 'spades' }, { face_points: '6', suit: 'hearts' }, { face_points: '6', suit: 'diamonds' },
    { face_points: '7', suit: 'clubs' }, { face_points: '7', suit: 'spades' }, { face_points: '7', suit: 'hearts' }, { face_points: '7', suit: 'diamonds' },
    { face_points: '8', suit: 'clubs' }, { face_points: '8', suit: 'spades' }, { face_points: '8', suit: 'hearts' }, { face_points: '8', suit: 'diamonds' },
    { face_points: '9', suit: 'clubs' }, { face_points: '9', suit: 'spades' }, { face_points: '9', suit: 'hearts' }, { face_points: '9', suit: 'diamonds' },
    { face_points: '10', suit: 'clubs' }, { face_points: '10', suit: 'spades' }, { face_points: '10', suit: 'hearts' }, { face_points: '10', suit: 'diamonds' },
    { face_points: 'jack', suit: 'clubs' }, { face_points: 'jack', suit: 'spades' }, { face_points: 'jack', suit: 'hearts' }, { face_points: 'jack', suit: 'diamonds' },
    { face_points: 'queen', suit: 'clubs' }, { face_points: 'queen', suit: 'spades' }, { face_points: 'queen', suit: 'hearts' }, { face_points: 'queen', suit: 'diamonds' },
    { face_points: 'king', suit: 'clubs' }, { face_points: 'king', suit: 'spades' }, { face_points: 'king', suit: 'hearts' }, { face_points: 'king', suit: 'diamonds' },
    { face_points: "ace", suit: 'clubs' }, { face_points: "ace", suit: 'spades' }, { face_points: "ace", suit: 'hearts' }, { face_points: "ace", suit: 'diamonds' },
];

console.log(deck.length);
console.log(deck[0]); // prints {face_points: "1", suit: "clubs"}
console.log(deck[0]["face_points"]); // prints 1
// for (let i = 0; i < deck.length; i++) {

// };

const getFacePoints = () => {
    for (let i = 0; i < deck.length; i++) {
        const card = deck[i]["face_points"];
        const cardSuit = deck[i]["suit"];
        const url = `images/${card}_of_${cardSuit}.png`
        deck[i]["src"] = url;
        console.log(url);
    }
    console.log(deck);
}
console.log(getFacePoints());

const deal2Cards = () => { 
    const card1 = document.createElement("img");
    const card2 = document.createElement("img")
    for (let i = 0; i < 14; i++) {
        card1.setAttribute("src", deck[i]["src"]);
        dealerHand.appendChild(card1);
        card2.setAttribute("src", deck[i + 1]["src"]);
        dealerHand.appendChild(card2);
    }
};

deal2Cards();


// const getFacePoints = deck.forEach("face_points");