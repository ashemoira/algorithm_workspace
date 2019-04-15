function stickSegmentationN(stick: number, person: number) {
    let count: number = 0
    let current_stick: number = 1 // current_stick is current stick length
    while (stick > current_stick) {
        current_stick += current_stick < person ? current_stick : person
        count += 1
    }
    console.log(count)
}

stickSegmentationN(20, 3)
stickSegmentationN(100, 5)
