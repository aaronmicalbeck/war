
console.log('jQuery is on!');

// randomly generates unique numbers between 1 and 52 and stores them in an array, splits the array in half and deals to each player
function PlayGame() {


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

    console.log(`P1 = ${playerOneHand}`);
    console.log(`P2 = ${playerTwoHand}`);

    // removes last index from each player's hand
    function Draw() {

        let p1Move = playerOneHand.pop();
        let p2Move = playerTwoHand.pop();

        console.log("Player One's move = " + p1Move);
        console.log("Player Two's move = " + p2Move);
        
        CheckCards();

        console.log(`Player Two has ${playerOneHand.length} cards.`);
        console.log(`Player Two has ${playerTwoHand.length} cards.`)
        console.log(`P1 = ${playerOneHand}`);
        console.log(`P2 = ${playerTwoHand}`);

    function CheckCards() {

        console.log("Checking Cards!");

            if (p1Move > p2Move) {
                console.log("Player One Wins!");
                playerOneHand.unshift(p1Move, p2Move)
               
            }
            else if (p1Move < p2Move) {
                console.log("Player Two Wins!")
                playerTwoHand.unshift(p2Move, p1Move);
                
            }

            else if (p1Move == p2Move) {
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




