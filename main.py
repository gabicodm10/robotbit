def on_received_value(name, value):
    global robotonoff
    if "onoff" == name:
        if value == 1:
            basic.show_icon(IconNames.YES)
            robotonoff = 1
radio.on_received_value(on_received_value)

robotonoff = 0
robotonoff = 0
basic.show_leds("""
    . # . # .
    . . . . .
    . . # . .
    . # # # .
    . . . . .
    """)
y = 0
x = 0
radio.set_group(5)

def on_forever():
    if pins.digital_read_pin(DigitalPin.P14) == 1:
        basic.show_icon(IconNames.BUTTERFLY)
        robotbit.motor_stop_all()
        basic.pause(500)
    if robotonoff == 1:
        robotbit.motor_run_dual(robotbit.Motors.M1A, y + x, robotbit.Motors.M2A, y - x)
    if robotonoff == 0:
        robotbit.motor_run_dual(robotbit.Motors.M1A, 0, robotbit.Motors.M2A, 0)
basic.forever(on_forever)
