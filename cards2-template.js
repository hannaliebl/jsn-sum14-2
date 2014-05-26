var cardReader = {
	rank: function(card) {
		return Math.floor(card/4) + 1;
	},
	suit: function(card) {
		return (card%4) + 1;
	},
	cardID: function(rank,suit) {
		return (rank - 1)*4 + (suit - 1);
	},
	color: function(card) {
        if (this.suit(card) < 3) {
            return "red";
        } else {
            return "black";
        }
	},
	//someExtraProperty: whatever...
    rankNames: {array: ['','Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten',
                'Jack','Queen','King']},
    
    suitNames: {array: ['','Hearts','Diamonds','Spade','Clubs']},
    
	name: function(card) {
        return this.rankNames.array[this.rank(card)]+' of '+this.suitNames.array[this.suit(card)];
	},
	precedes: function(cardA,cardB) {
        var diff = (this.rank(cardB)) - (this.rank(cardA));
        return diff == 1 || diff == -12;
	},
	sameColor: function(cardA,cardB) {
        return this.color(cardA) == this.color(cardB);
	},
	nextInSuit: function(cardA) {
        var nextCard = cardA + 4;
        if (nextCard > 51) {
            nextCard -= 52;
            return nextCard;
        } else {
           return nextCard;
        }
	},
	prevInSuit: function(cardB) {
        var prevCard = cardB - 4;
        if (prevCard < 0) {
            prevCard += 52;
            return prevCard;
        } else {
            return prevCard;
        }
	}
};

cardReader.cardID(3, 4);




// TESTING:
var alias = cardReader;//change as needed

function assert(claim,message) {
    if (!claim) console.error(message);
}
assert(alias.rank(0)===1,"Test 1 failed");
assert(alias.rank(3)===1,"Test 2 failed");
assert(alias.rank(51)===13,"Test 3 failed");
assert(alias.suit(0)===1,"Test 4 failed");
assert(alias.suit(5)===2,"Test 5 failed");
assert(alias.suit(51)===4,"Test 6 failed");
assert(alias.cardID(1,1)===0,"Test 7 failed");
assert(alias.cardID(13,4)===51,"Test 8 failed");
assert(alias.cardID(8,3)===30,"Test 9 failed");
assert(alias.color(0)==='red',"Test 10 failed");
assert(alias.color(2)==='black',"Test 11 failed");
assert(alias.name(5)==='Two of Diamonds',"Test 12 failed");
assert(alias.name(51)==='King of Clubs',"Test 13 failed");
assert(!alias.precedes(0,1),"Test 14 failed");
assert(alias.precedes(0,5),"Test 15 failed");
assert(alias.precedes(51,0),"Test 16 failed");
assert(alias.precedes(50,2),"Test 17 failed");
assert(alias.sameColor(0,1),"Test 18 failed");
assert(!alias.sameColor(1,2),"Test 19 failed");
assert(alias.nextInSuit(0)===4,"Test 20 failed");
assert(alias.nextInSuit(51)===3,"Test 21 failed");
assert(alias.nextInSuit(48)===0,"Test 22 failed");
assert(alias.prevInSuit(0)===48,"Test 23 failed");
assert(alias.prevInSuit(3)===51,"Test 24 failed");
assert(alias.prevInSuit(5)===1,"Test 25 failed");

// Extra testing!
// These tests check that invalid arguments produce invalid output.
// They may need rewriting for certain error-reporting schemes.
assert(!alias.rank(52),"Test 26 failed");
assert(!alias.rank("0"),"Test 27 failed");
assert(!alias.rank(-1),"Test 28 failed");
assert(!alias.suit(52),"Test 29 failed");
assert(!alias.suit(false),"Test 30 failed");
assert(!alias.suit(true),"Test 31 failed");
assert(isNaN(alias.cardID(0,1)),"Test 32 failed");
assert(isNaN(alias.cardID("1",1)),"Test 33 failed");
assert(isNaN(alias.cardID(1,5)),"Test 34 failed");
assert(isNaN(alias.cardID(14,1)),"Test 35 failed");
assert((typeof alias.color('apple'))!='string',"Test 36 failed");
assert((typeof alias.name(false))!='string',"Test 37 failed");
assert((typeof alias.precedes(51,52))!='boolean',"Test 38 failed");
assert((typeof alias.precedes(-1,0)),"Test 39 failed");
assert((typeof alias.sameColor("0","1"))!='boolean',"Test 40 failed");
assert(isNaN(alias.nextInSuit(52)),"Test 41 failed");
assert(isNaN(alias.prevInSuit(52)),"Test 42 failed");