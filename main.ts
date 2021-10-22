input.onButtonPressed(Button.A, function () {
    music.playMelody("C5 B A G F E D C ", 120)
    basic.showString("Hello!")
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("C D E F G A B C5 ", 120)
    basic.showString("Hello!")
})
input.onGesture(Gesture.Shake, function () {
    moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(4)
    moveMotorZIP.setZipLedColor(0, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Red))
    moveMotorZIP.setZipLedColor(1, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Orange))
    moveMotorZIP.setZipLedColor(2, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Yellow))
    moveMotorZIP.setZipLedColor(3, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Violet))
    moveMotorZIP.show()
})
let moveMotorZIP: Kitronik_Move_Motor.MoveMotorZIP = null
music.playTone(262, music.beat(BeatFraction.Whole))
music.playTone(294, music.beat(BeatFraction.Whole))
basic.forever(function () {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    for (let index = 0; index < 2; index++) {
        music.playTone(262, music.beat(BeatFraction.Double))
        music.playMelody("C5 A B F G C A C ", 120)
    }
})
