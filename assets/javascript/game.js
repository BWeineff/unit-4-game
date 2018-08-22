var chosenPug
var enemyPug
var defeatedPugs = 0



var character = {
    "Pancake": {
    name: "Pancake",
    tolerancePoints: 50,
    tolerancePointsMax: 50,
    barkPower: 10,
    isDead: false
},
    "KingKong": {
    name: "King Kong",
    tolerancePoints: 40,
    barkPower: 15,
    tolerancePointsMax: 40,
    isDead: false
},
    "Leo": {
    name: "Leo",
    tolerancePoints: 30,
    tolerancePointsMax: 30,
    barkPower: 17,
    isDead: false
},
    "Blizzard": {
    name: "Blizzard",
    tolerancePoints: 35,
    tolerancePointsMax: 35,
    barkPower: 15,
    isDead: false
},
}
// on click of character do this fucntion >>
$('.character').on("click", function chooseChar() {
    var charName = $(this).attr('id');
    var char = character[charName];
    var charElm = $('#' + charName);

    if(!chosenPug) {
        chosenPug = char;
        chosenPug.barkPower += Math.round(Math.random() * 4) + 1;
        charElm.appendTo('#chosenCard');
    } else if (!enemyPug) {
        enemyPug = char;
        charElm.appendTo('#enemyCard');
    } else {
        alert ("You must keep barking to finish your battle first before choosing a new enemy pug!");
    }
});

function barkFunction() {
    enemyPug.tolerancePoints -= chosenPug.barkPower;
    chosenPug.tolerancePoints -= enemyPug.barkPower;

    if (enemyPug.tolerancePoints <= 0) {
        alert("You've defeated the enemy Pug! He's all out of barks and snorts! Time to get TREATS!");
        $("#enemyCard .character").remove();
        enemyPug = null;
        chosenPug.tolerancePoints = chosenPug.tolerancePointsMax
    }
    if (chosenPug.tolerancePoints <= 0) {
        alert("You've been out-barked! The noise and snorts are deafening! The game will now restart!");
        location.reload();
        
    }

    $("#chosenPugHealthCount").html("<p> Your tolerance for listening to all this barking is only " + chosenPug.tolerancePoints + " points! </p>");
    $("#enemyPugHealthCount").html("<p> Your tolerance for listening to all this barking is only " + enemyPug.tolerancePoints + " points! </p>");
};

$('#bark').click(function() {
    if(enemyPug) {
      barkFunction();
    } else {
      alert("Choose an enemy pug to bark at first before someone thinks you're crazy for barking at the wind again, " + chosenPug + "!");
    }
   });