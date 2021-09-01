
// Global Variables ////////////////

const suits = ["♠", "♥", "♣", "♦"];
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

    function renderP1Move() {

        document.getElementById("p1Move").innerHTML = "";

        var card = document.createElement("div");
        var value = document.createElement("div");
        var value2 = document.createElement("div");
        var suit = document.createElement("div");

        card.className = "card";
        value.className = "value";
        value2.className = "value2";
        suit.className = "suit " + p1Move.Suit;

        value.innerHTML = p1Move.Value;
        value2.innerHTML = p1Move.Value;
        suit.innerHTML = p1Move.Suit;


        card.appendChild(value);
        card.appendChild(suit);
        card.appendChild(value2);


        $(`#p1Move`).append(card);


        gsap.to(".card", {
            duration: 4.25,
            opacity: 0,
            x: 100,
            ease: "back.in"
        });

       
        




    }

    function renderP2Move() {





        document.getElementById("p2Move").innerHTML = "";

        var card = document.createElement("div");
        var value = document.createElement("div");
        var value2 = document.createElement("div");
        var suit = document.createElement("div");

        card.className = "card";
        value.className = "value";
        value2.className = "value2";
        suit.className = "suit " + p2Move.Suit;

        value.innerHTML = p2Move.Value;
        value2.innerHTML = p2Move.Value;
        suit.innerHTML = p2Move.Suit

        card.appendChild(value);
        card.appendChild(suit);
        card.appendChild(value2);

        $(`#p2Move`).append(card);

        gsap.to(".card", {
            duration: 4.25,
            opacity: 0,
            x: 100,
            ease: "back.in"
        });
        

    






    }

    renderP1Move();
    renderP2Move();
    CheckCards();








    function CheckCards() { // compares each player's move & adds cards to first index of winning player's hand. Checks the value of the card, regardless of suit.

        console.log("Checking Cards!");
     
        CheckHand();

        if (p1Move.Value > p2Move.Value) {
            console.log("Player One Wins!");
            document.getElementById("moveResult").innerHTML = "Player One Wins!";
            playerOneHand.unshift(p1Move, p2Move);
            console.log(`P1 ${playerOneHand.length} cards.`);
            console.log(`P2 ${playerTwoHand.length} cards.`);
            gsap.to("#moveResult", {duration: 1.5, opacity: 0 });



        }
        else if (p1Move.Value < p2Move.Value) {
            console.log("Player Two Wins!")
            document.getElementById("moveResult").innerHTML = "Player Two Wins!";
            playerTwoHand.unshift(p2Move, p1Move);
            console.log(`P1 ${playerOneHand.length} cards.`);
            console.log(`P2 ${playerTwoHand.length} cards.`);



        }

        else if (p1Move.Value == p2Move.Value) {
            console.log('%cWAR!!', 'background: #222; color: #FF4200');
            document.getElementById("moveResult").innerHTML = "WAR!";



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
                playerTwoHand.splice(playerTwoHand.length - 4);
                playerOneHand.splice(playerOneHand.length - 4);
                playerOneHand.unshift(p1Move, p2Move, p1WarMove[3], p1WarMove[2], p1WarMove[1], p1WarMove[0], p2WarMove[3], p2WarMove[2], p2WarMove[1], p2WarMove[0]);
                console.log(`P1 ${playerOneHand.length} cards.`);
                console.log(`P2 ${playerTwoHand.length} cards.`);


            }
            else if (p1WarMove[3].Value < p2WarMove[3].Value) {
                console.log("P2 Wins!");
                playerOneHand.splice(playerOneHand.length - 4);
                playerTwoHand.splice(playerTwoHand.length - 4);
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



$("#drawBtn").click(function () {
    
    Draw();
    gsap.from("#p1Move", { duration: 1, x: 150 });
    gsap.from("#p2Move", { duration: 1, x: -150 });
    gsap.from("#moveResult", {duration: 1, y: 500 });
    gsap.to("#moveResult", {duration: 2.5, opacity: 1 });
    
    
    
    


})
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("instructionsBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}










