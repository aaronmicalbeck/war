
console.log('jQuery is on!');

const suits = ["spades", "hearts", "clubs", "diamonds"];
const values = ["14", "13", "12", "11", "10", "9", "8", "7", "6", "5", "4", "3", "2",];




function BuildDeck() {
    let deck = new Array();
    // iterates over suits and values arrays and creates a new deck array of objects
    for (let i = 0; i < suits.length; i++) {
        for (let x = 0; x < values.length; x++) {
            let card = { Value: values[x], Suit: suits[i] };
            deck.push(card);
        }
    }

    // iterates over the new deck and switches the location of two random indices 1000 times
    for (let i = 0; i < 1000; i++) {
        let location1 = Math.floor((Math.random() * deck.length));
        let location2 = Math.floor((Math.random() * deck.length));
        let tmp = deck[location1];

        deck[location1] = deck[location2];
        deck[location2] = tmp;
    }

    return deck;

}

// splits deck array into 2 and pushes to players' hands

function Deal() {

    let deck = BuildDeck();

    let half = Math.ceil(deck.length / 2);

    let playerOneDeal = deck.slice(0, half);
    let playerTwoDeal = deck.slice(-half);

    let playerOneHand = playerOneDeal,
        playerTwoHand = playerTwoDeal;


    console.log("Hands have been dealt!");
    return [playerOneHand, playerTwoHand];


}

function Draw() { // removes last index from each player's hand

    let hands = Deal();

    const playerOneHand = hands[0],
        playerTwoHand = hands[1];


    let p1Move = playerOneHand.pop();
    let p2Move = playerTwoHand.pop();

    console.log(p1Move.Value, p2Move.Value);



    CheckCards();

    console.log(`Player One has ${playerOneHand.length} cards.`);
    console.log(`Player Two has ${playerTwoHand.length} cards.`)


    function CheckCards() { // compares each player's move & adds cards to first index of winning player's hand

        console.log("Checking Cards!");

        if (p1Move.Value > p2Move.Value) {
            console.log("Player One Wins!");
            playerOneHand.unshift(p1Move, p2Move)

        }
        else if (p1Move.Value < p2Move.Value) {
            console.log("Player Two Wins!")
            playerTwoHand.unshift(p2Move, p1Move);

        }

        else if (p1Move.Value == p2Move.Value) {
            console.log("WAR!!!")
        }



    };




};

$("#dealBtn").click(function () {
    Deal();
})


$("#drawBtn").click(function () {
    Draw();
})



$("#takeCardsBtn").click(function () {
    TakeCards();
})











