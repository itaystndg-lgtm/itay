let מיקום_של_הכדור = 0
let מספר_הסלים = 0
basic.forever(function () {
    מיקום_של_הכדור = randint(0, 4)
    for (let index = 0; index <= 4; index++) {
        led.plot(מיקום_של_הכדור, 4 - index)
        basic.pause(100)
        led.unplot(מיקום_של_הכדור, 4 - index)
    }
    basic.clearScreen()
    if (מיקום_של_הכדור > 0 && מיקום_של_הכדור < 4) {
        מספר_הסלים += 1
        basic.showNumber(מספר_הסלים)
    }
})
