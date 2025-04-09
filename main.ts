radio.onReceivedValue(function (name, value) {
    if ("x" == name) {
        x = value / 4
    }
    if ("y" == name) {
        y = value / 4
    }
    if (("onoff" as any) == ("1" as any)) {
        robotonoff = 1
    }
    if (("onoff" as any) == ("0" as any)) {
        robotonoff = 0
    }
})
let robotonoff = 0
let x = 0
let y = 0
let onoff = 0
basic.showLeds(`
    . # . # .
    . . . . .
    . . # . .
    . # # # .
    . . . . .
    `)
y = 0
x = 0
radio.setGroup(5)
basic.forever(function () {
    if (("robotonoff" as any) == ("1" as any)) {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        y + x,
        robotbit.Motors.M2A,
        y - x
        )
    }
    if (("robotonoff" as any) == ("0" as any)) {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        0,
        robotbit.Motors.M2A,
        0
        )
    }
})
