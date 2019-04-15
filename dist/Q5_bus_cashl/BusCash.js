function busCash() {
    let count = 0
    for (let coin500 = 0; coin500 < 2; coin500++) {
        for (let coin100 = 0; coin100 < 10; coin100++) {
            for (let coin50 = 0; coin50 < 15; coin50++) {
                for (let coin10 = 0; coin10 < 15; coin10++) {
                    if (coin500 + coin100 + coin50 + coin10 <= 15) {
                        if (
                            coin500 * 500 +
                                coin100 * 100 +
                                coin50 * 50 +
                                coin10 * 10 ===
                            1000
                        ) {
                            count += 1
                        }
                    }
                }
            }
        }
    }
    return count
}
console.log(busCash())
//# sourceMappingURL=BusCash.js.map
