const data = require("./cards.json");

function generateList() {
    let list = new Set();
    while(list.size < 56) {
        list.add(Math.floor(Math.random() * 57));
    }
    return list;
}

function getCards() {
    let index = 0;
    let indexes = generateList();
    let cardsIndexes = Array.from(indexes)
    return function() {
       if (index == 56) {
         index = 0;
         indexes = generateList();
         cardsIndexes = Array.from(indexes)
         return data.cards[cardsIndexes[index++]];
       } else {
          return data.cards[cardsIndexes[index++]];
       }
    }
}

module.exports = {
    getCards
}