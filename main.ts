input.onButtonEvent(Button.AB, input.buttonEventValue(ButtonEvent.Click), function () {
    zaehler = 0
    basic.showNumber(zaehler)
    basic.setLedColor(Colors.Green)
    basic.clearScreen()
})
input.onButtonEvent(Button.A, input.buttonEventValue(ButtonEvent.Click), function () {
    zaehler += 1
    basic.setLedColor(Colors.Green)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . # # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.pause(50)
    basic.setLedColor(0)
    basic.clearScreen()
})
function startNummer () {
    basic.showString("15")
    basic.pause(500)
    basic.clearScreen()
    basic.pause(200)
}
input.onButtonEvent(Button.B, input.buttonEventValue(ButtonEvent.Click), function () {
    if (zaehler == 15) {
        basic.showNumber(zaehler)
        basic.setLedColor(Colors.Green)
        basic.showIcon(IconNames.Yes)
        basic.pause(1000)
        basic.clearScreen()
    } else {
        basic.setLedColor(Colors.Red)
        basic.showNumber(zaehler)
    }
})
let zaehler = 0
zaehler = 0
startNummer()
basic.showNumber(zaehler)
basic.setLedColor(Colors.Green)
