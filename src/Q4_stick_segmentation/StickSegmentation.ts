// recursive call pattern
function stickSegmentation(stick: number, person: number, current_stick: number) {
    if (current_stick >= stick) {
        return 0
    } else if (current_stick < person) {
        return 1 + stickSegmentation(stick, person, current_stick * 2)
    } else {
        return 1 + stickSegmentation(stick, person, current_stick + person)
    }
}

console.log(stickSegmentation(20, 3, 1))
