var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var suits = ["suitClubs", "suitSpades", "suitHearts", "suitDiamonds"];
var numValue;
var deck;
var playerCount;
var playerScore;
var compScore;
var pScore1;
var cScore1;
var updateScore;
var finalScore;
var playerTotal;
var compTotal;
var pCard1;
var pCard2;
var pCard3;
var cCard1;
var cCard2;
var cCard3;
var rounds = 0;
var test;
var userScore;
function newDeal() {
    ;
    deck = new Array;
    for (var i_1 = 0; i_1 < suits.length; i_1++) {
        for (var x = 0; x < values.length; x++) {
            var card = { Value: values[x], Suit: suits[i_1] };
            if (card["Value"] === "J" || card["Value"] === "Q" || card["Value"] === "K") {
                card["numValue"] = 10;
            }
            else if (card["Value"] === "A") {
                card["numValue"] = 11;
            }
            else {
                card["numValue"] = parseInt(card["Value"]);
            }
            deck.push(card);
        }
    }
    for (var i = 0; i < 1000; i++) {
        var spot1 = Math.floor(Math.random() * deck.length);
        var spot2 = Math.floor(Math.random() * deck.length);
        var tmp = deck[spot1];
        deck[spot1] = deck[spot2];
        deck[spot2] = tmp;
    }
    return deck;
}
function cHit() {
    console.log(test.classList);
    console.log(compScore);
    console.log(updateScore);
    // test.getClassList.remove("active");
    if (compScore < 17) {
        var z = document.getElementById("comp");
        z.classList.add("moveL");
        console.log(compScore);
        cCard3 = document.createElement("div");
        cCard3.innerText = deck[0]["Value"];
        cCard3.classList.add(deck[0]["Suit"], "new");
        document.getElementById("comp").append(cCard3);
        document.getElementById("compCounter").innerText = updateScore + deck[0]["numValue"];
        compScore = parseInt(updateScore + deck[0]["numValue"]);
        updateScore = updateScore + deck[0]["numValue"];
        console.log(compScore);
        deck.splice(0, 1);
        if (parseInt(document.getElementById("compCounter").innerText) === 21) {
            document.getElementById("banner").innerText = "Dealer Blackjack! \nPress DEAL to play again";
            rounds++;
            console.log("h");
            var v = document.getElementById("hit");
            v.classList.add("hide");
            var u = document.getElementById("stay");
            u.classList.add("hide");
            var w = document.getElementById("deal");
            w.classList.remove("hide");
        }
        else if (parseInt(document.getElementById("compCounter").innerText) > 21) {
            document.getElementById("banner").innerText = "Dealer Bust! \nPress DEAL to play again";
            rounds++;
            console.log("i");
            var v = document.getElementById("hit");
            v.classList.add("hide");
            var u = document.getElementById("stay");
            u.classList.add("hide");
            var w = document.getElementById("deal");
            w.classList.remove("hide");
        }
        else if (playerTotal === parseInt(document.getElementById("compCounter").innerText)) {
            document.getElementById("banner").innerText = "Push! \nPress DEAL to play again";
            rounds++;
            console.log("j");
            var v = document.getElementById("hit");
            v.classList.add("hide");
            var u = document.getElementById("stay");
            u.classList.add("hide");
            var w = document.getElementById("deal");
            w.classList.remove("hide");
        }
        cHit();
    }
    else {
        document.getElementById("compCounter").innerText = updateScore.toString();
        var playerTotal_1 = parseInt(document.getElementById("playerCounter").innerText);
        if (playerTotal_1 > updateScore && updateScore < 21) {
            document.getElementById("banner").innerText = "You Win! \nPress DEAL to play next hand";
            rounds++;
            console.log("d");
            var v = document.getElementById("hit");
            v.classList.add("hide");
            var u = document.getElementById("stay");
            u.classList.add("hide");
            var w = document.getElementById("deal");
            w.classList.remove("hide");
        }
        else if (updateScore > 21) {
            document.getElementById("banner").innerText = "Dealer Bust! \nPress DEAL to play next hand";
            rounds++;
            console.log("l");
            var v = document.getElementById("hit");
            v.classList.add("hide");
            var u = document.getElementById("stay");
            u.classList.add("hide");
            var w = document.getElementById("deal");
            w.classList.remove("hide");
        }
        else if (playerTotal_1 < updateScore && updateScore < 21) {
            document.getElementById("banner").innerText = "Dealer Wins \nPress DEAL to play next hand";
            rounds++;
            console.log("k");
            var v = document.getElementById("hit");
            v.classList.add("hide");
            var u = document.getElementById("stay");
            u.classList.add("hide");
            var w = document.getElementById("deal");
            w.classList.remove("hide");
        }
        else if (playerTotal_1 === 21) {
            document.getElementById("banner").innerText = "Blackjack! \nPress DEAL to play again";
            rounds++;
            console.log("e");
            var v = document.getElementById("hit");
            v.classList.add("hide");
            var u = document.getElementById("stay");
            u.classList.add("hide");
            var w = document.getElementById("deal");
            w.classList.remove("hide");
        }
        else if (playerTotal_1 === updateScore) {
            document.getElementById("banner").innerText = "Push! \nPress DEAL to play again";
            rounds++;
            console.log("f");
            var v = document.getElementById("hit");
            v.classList.add("hide");
            var u = document.getElementById("stay");
            u.classList.add("hide");
            var w = document.getElementById("deal");
            w.classList.remove("hide");
        }
        else if (updateScore === 21) {
            document.getElementById("banner").innerText = "Dealer Blackjack! \nPress DEAL to play again";
            rounds++;
            console.log("g");
            var v = document.getElementById("hit");
            v.classList.add("hide");
            var u = document.getElementById("stay");
            u.classList.add("hide");
            var w = document.getElementById("deal");
            w.classList.remove("hide");
        }
    }
}
function restart() {
    if (rounds > 0) {
        var elements = document.getElementsByClassName("new");
        while (elements.length > 0) {
            elements[0].parentNode.removeChild(elements[0]);
        }
        document.getElementById("playerCounter").innerText = "";
        document.getElementById("compCounter").innerText = "";
        document.getElementById("banner").innerText = "";
        updateScore = 0;
        compScore = 0;
    }
}
document.getElementById("deal").addEventListener("click", function () {
    var y = document.getElementById("player");
    y.classList.remove("moveR");
    var z = document.getElementById("playerCounter");
    z.classList.remove("hide");
    var x = document.getElementById("compCounter");
    x.classList.remove("hide");
    var v = document.getElementById("hit");
    v.classList.remove("hide");
    var u = document.getElementById("stay");
    u.classList.remove("hide");
    var w = document.getElementById("deal");
    w.classList.add("hide");
    restart();
    deck = newDeal();
    console.log(deck);
    document.getElementById("player");
    pCard1 = document.createElement("div");
    pCard1.innerText = deck[0]["Value"];
    pCard1.classList.add(deck[0]["Suit"], "new");
    document.getElementById("player").append(pCard1);
    pScore1 = deck[0]["numValue"];
    deck.splice(0, 1);
    document.getElementById("comp");
    cCard1 = document.createElement("div");
    cCard1.innerText = deck[0]["Value"];
    cCard1.classList.add(deck[0]["Suit"], "new");
    document.getElementById("comp").append(cCard1);
    cScore1 = deck[0]["numValue"];
    document.getElementById("compCounter").innerText = deck[0]["numValue"];
    deck.splice(0, 1);
    pCard2 = document.createElement("div");
    pCard2.innerText = deck[0]["Value"];
    pCard2.classList.add(deck[0]["Suit"], "new");
    document.getElementById("player").append(pCard2);
    document.getElementById("playerCounter").innerText = pScore1 + deck[0]["numValue"];
    // console.log(pScore1 + deck[0]["numValue"]);
    if (parseInt(pScore1 + deck[0]["numValue"]) === 21) {
        document.getElementById("banner").innerText = "Blackjack! \nPress DEAL to play again";
        console.log("A");
        w.classList.remove("hide");
        v.classList.add("hide");
        u.classList.add("hide");
    }
    deck.splice(0, 1);
    cCard2 = document.createElement("div");
    cCard2.setAttribute("id", "hidden");
    cCard2.innerText = deck[0]["Value"];
    cCard2.classList.add("new");
    cCard2.classList.add("active");
    updateScore = cScore1 + deck[0]["numValue"];
    document.getElementById("comp").append(cCard2);
    deck.splice(0, 1);
});
document.getElementById("hit").addEventListener("click", function () {
    userScore = parseInt(document.getElementById("playerCounter").innerText);
    // console.log(userScore);
    var y = document.getElementById("player");
    y.classList.add("moveR");
    document.getElementById("player");
    pCard3 = document.createElement("div");
    pCard3.innerText = deck[0]["Value"];
    pCard3.classList.add(deck[0]["Suit"], "new");
    document.getElementById("player").append(pCard3);
    document.getElementById("playerCounter").innerText = userScore + deck[0]["numValue"];
    deck.splice(0, 1);
    if (parseInt(document.getElementById("playerCounter").innerText) > 21) {
        document.getElementById("banner").innerText = "Bust! \nPress DEAL to play again";
        rounds++;
        console.log("b");
        var v = document.getElementById("hit");
        v.classList.add("hide");
        var u = document.getElementById("stay");
        u.classList.add("hide");
        var w = document.getElementById("deal");
        w.classList.remove("hide");
    }
    else if (parseInt(document.getElementById("playerCounter").innerText) === 21) {
        document.getElementById("banner").innerText = "Blackjack! \nPress DEAL to play again";
        rounds++;
        console.log("c");
        var v = document.getElementById("hit");
        v.classList.add("hide");
        var u = document.getElementById("stay");
        u.classList.add("hide");
        var w = document.getElementById("deal");
        w.classList.remove("hide");
    }
});
document.getElementById("stay").addEventListener("click", function () {
    test = document.getElementById("hidden");
    test.classList.add(deck[0]["Suit"]);
    test.classList.remove("active");
    compScore = updateScore;
    cHit();
});
