radio.onReceivedValue(function (name, value) {
    if ("onoff" == name) {
        if (value == 1) {
            basic.showIcon(IconNames.Yes)
            robotonoff = 1
        }
    }
})
let robotonoff = 0
let capD = DigitalPin.P14
pins.setPull(DigitalPin.P14, PinPullMode.PullUp)
let capG = DigitalPin.P13
pins.setPull(DigitalPin.P13, PinPullMode.PullUp)
robotonoff = 0
basic.showLeds(`
    . # . # .
    . . . . .
    . . # . .
    . # # # .
    . . . . .
    `)
let y = 0
let x = 0
radio.setGroup(5)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        basic.showString("G")
    } else {
        basic.clearScreen()
    }
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        basic.showString("D")
    } else {
        basic.clearScreen()
    }
    if (pins.digitalReadPin(DigitalPin.P14) == 1) {
        basic.showIcon(IconNames.Butterfly)
        robotbit.MotorStopAll()
        basic.pause(500)
    }
    if (robotonoff == 1) {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        y + x,
        robotbit.Motors.M2A,
        y - x
        )
    }
    if (robotonoff == 0) {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        0,
        robotbit.Motors.M2A,
        0
        )
    }
})
