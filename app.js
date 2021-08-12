
console.log('jQuery is on!');

// randomly generates unique numbers between 1 and 52 and stores them in an array, splits the array in half and deals to each player
function PlayGame() {

    console.log("Shuffled and Dealt!");


    let deck = [];
    let playerOneHand = [];
    let playerTwoHand = [];
    let playerOneMove = 0;
    let playerTwoMove = 0;

    while (deck.length < 52) {
        let cards = Math.floor(Math.random() * 52) + 1;
        if (deck.indexOf(cards) === -1) deck.push(cards);
    }


    let half = Math.ceil(deck.length / 2);

    playerOneHand = deck.slice(0, half);
    playerTwoHand = deck.slice(-half);

    console.log(playerOneHand);
    console.log(playerTwoHand);

    // removes last index from each player's hand
    function Draw() {

        console.log("DRAW!");

        let p1Move = playerOneHand.pop();
        let p2Move = playerTwoHand.pop();

        console.log("Player One's move = " + p1Move);
        console.log("Player Two's move = " + p2Move);
        CheckCards();

    function CheckCards() {

        console.log("Checking Cards!");

            if (p1Move > p2Move) {
                console.log("Player 1 Wins!");
                PlayerOneTakeCards();
            }
            else if (p1Move < p2Move) {
                console.log("Player 2 Wins!")
            }

            else {
                console.log("WAR!!!")
            }



        };




    };

    // compares each player's move


    // adds cards to first index of winning player's hand
    function PlayerOneTakeCards() {


        console.log("Take those cards!");
    };
    function PlayerTwoTakeCards() {


        console.log("Take those cards!");
    };



    $("#drawBtn").click(function () {
        Draw();
    })



    $("#takeCardsBtn").click(function () {
        TakeCards();
    })




};

$("#playBtn").click(function () {
    PlayGame();
})




