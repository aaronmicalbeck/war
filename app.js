
// Global Variables ////////////////

const suits = ["Spades", "Hearts", "Clubs", "Diamonds"];
const values = [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
let deck = BuildDeck();
let hands = Deal();

////////////////////////////////////


function BuildDeck() {

    let deck = [];
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

// splits deck array into 2 and returns separate hands

function Deal() {
    
    

    let half = Math.ceil(deck.length / 2);

    let playerOneDeal = deck.slice(0, half);
    let playerTwoDeal = deck.slice(-half);

    let playerOneHand = playerOneDeal,
        playerTwoHand = playerTwoDeal;


    // console.log("Deck has been shuffled, hands have been dealt!");
    return [playerOneHand, playerTwoHand];


}

function Draw() { // removes last index from each player's hand

    

    let playerOneHand = hands[0],
        playerTwoHand = hands[1];


    var p1Move = playerOneHand.pop();
    var p2Move = playerTwoHand.pop();



    console.table(`Player One: ${p1Move.Value} of ${p1Move.Suit} |:| Player Two: ${p2Move.Value} of ${p2Move.Suit}`);

    CheckCards();







    function CheckCards() { // compares each player's move & adds cards to first index of winning player's hand. Checks the value of the card, regardless of suit.

        // console.log("Checking Cards!");

        CheckHand();

        if (p1Move.Value > p2Move.Value) {
            console.log("Player One Wins!");
            playerOneHand.unshift(p1Move, p2Move);
            console.log(`P1 ${playerOneHand.length} cards.`);
            console.log(`P2 ${playerTwoHand.length} cards.`);
            

        }
        else if (p1Move.Value < p2Move.Value) {
            console.log("Player Two Wins!")
            playerTwoHand.unshift(p2Move, p1Move);
            console.log(`P1 ${playerOneHand.length} cards.`);
            console.log(`P2 ${playerTwoHand.length} cards.`);
            

        }

        else if (p1Move.Value == p2Move.Value) { 
            console.log("WAR!");
            
            War();
        }

        console.log(hands);
        

        function War() { // if opponents match card values, the last 4 cards of their hand are drawn and the 4th card is used to play, winner takes all cards on table (8 including their own)

            let p1WarMove = playerOneHand.slice(-4);
            let p2WarMove = playerTwoHand.slice(-4);

            console.log(p1WarMove, p2WarMove);



            console.log(`P1 ${p1WarMove[3].Value} of ${p1WarMove[3].Suit} |:| P2 ${p2WarMove[3].Value} of ${p2WarMove[3].Suit}`);

            if (p1WarMove[3].Value > p2WarMove[3].Value) {
                console.log("P1 Wins");
                playerTwoHand.splice(playerTwoHand.length-4);
                playerOneHand.splice(playerOneHand.length-4);
                playerOneHand.unshift(p1Move, p2Move, p1WarMove[3], p1WarMove[2], p1WarMove[1], p1WarMove[0], p2WarMove[3], p2WarMove[2], p2WarMove[1], p2WarMove[0]);
                console.log(`P1 ${playerOneHand.length} cards.`);
                console.log(`P2 ${playerTwoHand.length} cards.`);

            }
            else if (p1WarMove[3].Value < p2WarMove[3].Value) {
                console.log("P2 Wins!");
                playerOneHand.splice(playerOneHand.length-4);
                playerTwoHand.splice(playerTwoHand.length-4);
                playerTwoHand.unshift(p2Move, p1Move, p2WarMove[3], p2WarMove[2], p2WarMove[1], p2WarMove[0], p1WarMove[3], p1WarMove[2], p1WarMove[1], p1WarMove[0])
                console.log(`P1 ${playerOneHand.length} cards.`);
                console.log(`P2 ${playerTwoHand.length} cards.`);
            }
            else if (p1WarMove[3].Value === p2WarMove[3].Value) {
                console.log("War Again!");
                location.reload();
                // playerOneHand.unshift(p1WarMove[3]);
                // playerTwoHand.unshift(p2WarMove[3]);
                // War();
            }






        }

        function CheckHand() {
            // check number of cards in each player's hand.  If number == 0, game is over. Opponent wins.
            if (playerOneHand.length === 0) {
                alert("GAME OVER, PLAYER TWO WINS!");
                BuildDeck();


            }
            else if (playerTwoHand.length === 0) {
                alert("GAME OVER, PLAYER ONE WINS!")
                BuildDeck();

            }
            else null;

        }





    };










};






$("#dealBtn").click(function () {
    Deal();
})


$("#drawBtn").click(function () {
    Draw();
})











