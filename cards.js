function compareCard(cardA, cardB) {
    const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    const suits = ["Diamond", "Club", "Heart", "Spade"];
    const [suitA, rankA] = cardA;
    const [suitB, rankB] = cardB;
    const ranksDiff = ranks.indexOf(rankA) - ranks.indexOf(rankB);
    if (ranksDiff !== 0) {
        return ranksDiff;
    } else {
        return suits.indexOf(suitA) - suits.indexOf(suitB);
    }
}


const cards = [
    ['Spade', 'A'],
    ['Diamond', 'J'],
    ['Club', '3'],
    ['Heart', '6'],
    ['Spade', 'K'],
    ['Club', '2'],
    ['Heart', 'Q'],
    ['Spade', '6'],
    ['Heart', 'J'],
    ['Spade', '10'],
    ['Club', '4'],
    ['Diamond', 'Q'],
    ['Diamond', '3'],
    ['Heart', '4'],
    ['Club', '7']
];



//0
function card0(cards) {
    return cards.reduce((sum, card) => (card[0] === 'Spade') ? sum + 1 : sum, 0)
}
console.log(card0(cards))



//1
function card1(cards) {
    return cards.filter((cardB) => compareCard(["Club", "3"], cardB) <= 0)
}
console.log(card1(cards))



//2
function card2(cards) {
    return cards
        .filter((card) => card[0] === 'Diamond' || card[0] === 'Heart')
        .reduce((sum, card) => (compareCard(card, ['Diamond', "J"]) >= 0 || compareCard(card, ['Heart', "J"]) >= 0) ? sum + 1 : sum, 0)
}
console.log(card2(cards))



//3
function cards3(cards) {
    const cards3 = JSON.parse(JSON.stringify(cards))
    cards3.filter((card) => card[0] === "Club")
        .map((card) => [card[0] = "Diamond", card[1]]);
    return cards3
}
console.log(cards3(cards))



//4
function cards4(cards) {
    const cards4 = JSON.parse(JSON.stringify(cards))
    cards4.filter((card) => card[1] === "A")
        .map((card) => [card[0], card[1] = "2"]);
    return cards4
}
console.log(cards4(cards))






console.log(cards)