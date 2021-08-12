
console.log('jQuery is on!');

// randomly generates unique numbers between 1 and 52 and stores them in an array, splits the array in half and deals to each player
function ShuffleAndDeal() {

    console.log("Shuffle!");


    let deck = [];
    let playerOneHand = [];
    let playerTwoHand = [];

    while (deck.length < 52) {
        let cards = Math.floor(Math.random() * 52) + 1;
        if (deck.indexOf(cards) === -1) deck.push(cards);
    }
    

    let half = Math.ceil(deck.length / 2);

    playerOneHand = deck.slice(0, half);
    playerTwoHand = deck.slice(-half);

    console.log(playerOneHand);
    console.log(playerTwoHand);

    


};



// removes last index from each player's hand
function Draw() {


    console.log("DRAW!");

};


// compares each player's move
function CheckCards() {


    console.log("Check Cards!");
};

// adds cards to first index of winning player's hand
function TakeCards() {


    console.log("Take those cards!");
};


// Here is where the magic happens!



$("#drawBtn").click(function () {
    Draw();
})

$("#shuffleBtn").click(function () {
    ShuffleAndDeal();
})

$("#takeCardsBtn").click(function () {
    TakeCards();
})