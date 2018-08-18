var chosenPug
var enemyPug

var character = {
    "Pancake": {
    name: "Pancake",
    tolerancePoints: 50,
    barkPower: 10,
    isDead: false
},
    "KingKong": {
    name: "King Kong",
    tolerancePoints: 40,
    barkPower: 15,
    isDead: false
},
    "Leo": {
    name: "Leo",
    tolerancePoints: 30,
    barkPower: 17,
    isDead: false
},
    "Blizzard": {
    name: "Blizzard",
    tolerancePoints: 35,
    barkPower: 15,
    isDead: false
},
}
// on click of character do this fucntion >>
$('.character').on("click", function() {
    var char = character[$(this).data('char')];

    if(!chosenPug) {
        chosenPug = char;
    } else if (!enemyPug) {
        enemyPug = char;
    } else {
        alert ("You must keep barking to finish your battle first before choosing a new enemy pug!");
    }
});

function barkFunction() {
    enemyPug.tolerancePoints -= (chosenPug.barkPower += (chosenPug.index *= 2));
    chosenPug.tolerancePoints -= (enemyPug.barkPower -= (enemyPug.index *= 2));
    $("#chosenPugHealthCount").html("<p> Your tolerance for listening to all this barking is only " + chosenPug.tolerancePoints + " ! </p>");
    $("#enemyPugHealthCount").html("<p> Your tolerance for listening to all this barking is only " + enemyPug.tolerancePoints + " ! </p>");
};

$('#bark').click(function() {
    if(enemyPug) {
      barkFunction();
    } else {
      alert("Choose an enemy pug to bark at first before someone thinks you're crazy for barking at the wind again, " + chosenPug + "!");
    }
   });