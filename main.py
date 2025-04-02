def on_received_value(name, value):
    global x, y
    if "x" == name:
        x = value / 4
    if "y" == name:
        y = value / 4
radio.on_received_value(on_received_value)

x = 0
y = 0
basic.show_leds("""
    . . # . .
    . # # # .
    # # # # #
    . # . # .
    . # . # .
    """)
y = 0
x = 0
radio.set_group(6)

def on_forever():
    robotbit.motor_run_dual(robotbit.Motors.M1A, y + x, robotbit.Motors.M1A, y - x)
basic.forever(on_forever)
