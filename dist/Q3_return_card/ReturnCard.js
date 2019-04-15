function returnCard() {
    // initialize cards
    let cards = Array.apply(null, Array(100)).map(() => {
        return false
    })
    // reverse cards
    for (let N = 1; N < 100; N++) {
        // start = N, interval = N+1
        for (let index = N; index < 100; index += N + 1) {
            cards[index] = !cards[index]
        }
    }
    // display cards
    let card_list = ''
    for (let index = 0; index < 100; index++) {
        if (cards[index] === false) {
            card_list += index + 1
            card_list += ','
        }
    }
    console.log(card_list)
}
returnCard()
//# sourceMappingURL=ReturnCard.js.map
