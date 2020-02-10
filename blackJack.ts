let values: Array<string> = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let suits: Array<string> = ["clubs", "spades", "hearts", "diamonds"];
let numValue: number
let deck: Array<Object>
let playerCount: number
let playerScore: number
let compScore: number
let pScore1: number
let cScore1: number
let updateScore: number
let finalScore: number
let playerTotal: number
let compTotal: number
let pCard1
let pCard2
let pCard3
let cCard1
let cCard2
let cCard3
let rounds: number = 0
let test
let userScore: number









function newDeal() {;
    
    deck = new Array;
    for (let i = 0; i < suits.length; i++) {
        for (let x = 0; x < values.length; x++) {
            let card = { Value: values[x], Suit: suits[i] };

            if (card["Value"] === "J" || card["Value"] === "Q" || card["Value"] === "K") {
                card["numValue"] = 10

            }
            else if (card["Value"] === "A") {
                card["numValue"] = 11
            }
            else {
                card["numValue"] = parseInt(card["Value"])
            }

            deck.push(card)

        }
    }
    for (var i = 0; i < 1000; i++) {
        var spot1 = Math.floor(Math.random() * deck.length);
        var spot2 = Math.floor(Math.random() * deck.length);
        var tmp = deck[spot1];

        deck[spot1] = deck[spot2];
        deck[spot2] = tmp;
    }
    return deck

}

function cHit() {
    test =  document.getElementById("hidden")
    console.log(test.classList);
    console.log(compScore);
    console.log(updateScore);
    
    
    test.getClassList.remove("active");
    
    if (compScore < 17) {
        console.log(compScore);
        cCard3 = document.createElement("div");
        cCard3.innerText = deck[0]["Value"];
        cCard3.classList.add(deck[0]["Suit"], "new");
        document.getElementById("comp").append(cCard3);
        document.getElementById("compCounter").innerText = updateScore + deck[0]["numValue"]

        compScore =parseInt(updateScore + deck[0]["numValue"])

        updateScore = updateScore + deck[0]["numValue"]
        
        console.log(compScore);
        
        deck.splice(0, 1);
        if (parseInt(document.getElementById("compCounter").innerText) === 21) {
            document.getElementById("banner").innerText = "Dealer Blackjack! \nPress DEAL to play again"
            rounds ++
            console.log("h");
            
        } else if (parseInt(document.getElementById("compCounter").innerText) > 21) {
            document.getElementById("banner").innerText = "Dealer Bust! \nPress DEAL to play again"
            rounds ++
            console.log("i");
            
        }
        else if (playerTotal === parseInt(document.getElementById("compCounter").innerText)) {
            document.getElementById("banner").innerText = "Push! \nPress DEAL to play again"
            rounds ++
            console.log("j");
            
    
        }
        cHit()
    }else{
        let playerTotal = parseInt(document.getElementById("playerCounter").innerText)
        if (playerTotal > updateScore) {
            document.getElementById("banner").innerText = "You Win! \nPress DEAL to play next hand"
            rounds ++
            console.log("d");
            
        }
        else if (playerTotal < updateScore && updateScore < 21) {
            document.getElementById("banner").innerText = "Dealer Wins"
            rounds ++
            console.log("k");
            
        }
        
        else if (playerTotal === 21) {
            document.getElementById("banner").innerText = "Blackjack! \nPress DEAL to play again"
            rounds ++
            console.log("e");
            
    
        }
        else if (playerTotal === updateScore) {
            document.getElementById("banner").innerText = "Push! \nPress DEAL to play again"
            rounds ++
            console.log("f");
            
    
        }
        else if (updateScore === 21) {
            document.getElementById("banner").innerText = "Dealer Blackjack! \nPress DEAL to play again"
            rounds ++
            console.log("g");
            
        }
    }
}

function restart(){
    if(rounds > 0){
        let elements = document.getElementsByClassName("new");
        while(elements.length > 0){
            elements[0].parentNode.removeChild(elements[0]);}
    document.getElementById("playerCounter").innerText = "";
    document.getElementById("compCounter").innerText = "";
    document.getElementById("banner").innerText = ""
    updateScore = 0;
    compScore = 0

}
}


document.getElementById("deal").addEventListener("click", function () {
    // console.log(rounds);
    restart()
    deck = newDeal();
    console.log(deck);

    document.getElementById("player");
    pCard1 = document.createElement("div");
    pCard1.innerText = deck[0]["Value"];
    pCard1.classList.add(deck[0]["Suit"], "new");
    document.getElementById("player").append(pCard1);
    pScore1 = deck[0]["numValue"]
    deck.splice(0, 1);

    document.getElementById("comp");
    cCard1 = document.createElement("div");
    cCard1.innerText = deck[0]["Value"];
    cCard1.classList.add(deck[0]["Suit"], "new");
    document.getElementById("comp").append(cCard1);
    cScore1 = deck[0]["numValue"]
    deck.splice(0, 1);


    pCard2 = document.createElement("div");
    pCard2.innerText = deck[0]["Value"];
    pCard2.classList.add(deck[0]["Suit"], "new");
    document.getElementById("player").append(pCard2)
    document.getElementById("playerCounter").innerText = pScore1 + deck[0]["numValue"]
    // console.log(pScore1 + deck[0]["numValue"]);
    
    deck.splice(0, 1);
    if (parseInt(pScore1 + deck[0]["numValue"]) === 21) {
        document.getElementById("banner").innerText = "Blackjack! \nPress DEAL to play again"
        console.log("A");
        
    }


    cCard2 = document.createElement("div");
    cCard2.setAttribute("id", "hidden")
    cCard2.innerText = deck[0]["Value"];
    cCard2.classList.add(deck[0]["Suit"], "new", "active");
    updateScore = cScore1 + deck[0]["numValue"]
    document.getElementById("comp").append(cCard2);
    deck.splice(0, 1);

} 
)

document.getElementById("hit").addEventListener("click", function () {
    userScore = parseInt(document.getElementById("playerCounter").innerText)
    // console.log(userScore);


    document.getElementById("player");
    pCard3 = document.createElement("div");
    pCard3.innerText = deck[0]["Value"];
    pCard3.classList.add(deck[0]["Suit"], "new");
    document.getElementById("player").append(pCard3);
    document.getElementById("playerCounter").innerText = userScore + deck[0]["numValue"]

    deck.splice(0, 1);
    if (parseInt(document.getElementById("playerCounter").innerText) > 21) {
        document.getElementById("banner").innerText = "Bust! \nPress DEAL to play again"
        rounds ++
        console.log("b");
        
    }
    else if (parseInt(document.getElementById("playerCounter").innerText) === 21) {
        document.getElementById("banner").innerText = "Blackjack! \nPress DEAL to play again"
        rounds ++
        console.log("c");
        
    }


})



document.getElementById("stay").addEventListener("click", function () {
    compScore = updateScore
    cHit()
    

})