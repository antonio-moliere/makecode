basic.showLeds(`
    # . . . .
    . # . . .
    . . # . .
    . . . # .
    . . . . .
    `)
basic.forever(function () {
    basic.showNumber(0)
    basic.showString("Hello!")
})
