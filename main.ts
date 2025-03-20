input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . . . .
        `)
    robotbit.Servo(robotbit.Servos.S1, 0)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        `)
    robotbit.Servo(robotbit.Servos.S1, 180)
})
