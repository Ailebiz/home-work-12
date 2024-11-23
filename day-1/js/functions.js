let soz1 = prompt("Birinshi soz")
let soz2 = prompt("ekinshi soz")

function word(soz1, soz2) {
    return soz1.toLowerCase() == soz2.toLowerCase() ? "Sozder birdei" : "sozder arturli";
}

alert(word(soz1, soz2))

