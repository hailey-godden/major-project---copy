let DodgeCount = 0
let TurnSpeed = 65
basic.forever(function () {
    if (sonar.isSonar(Comparison.CLOSER, 3)) {
        motion.stop()
        motion.driveStraight(-5)
        basic.pause(400)
        motion.turnRight(TurnSpeed)
        DodgeCount += 1
        basic.pause(400)
        basic.showString("" + (DodgeCount))
        motion.stop()
    }
})
basic.forever(function () {
    if (lineSensors.checkSensor(IRSensor.LEFT, IRColour.BLACK)) {
        motion.turnLeft(35)
    } else if (lineSensors.checkSensor(IRSensor.MIDDLE, IRColour.BLACK)) {
        motion.driveStraight(50)
    } else if (lineSensors.checkSensor(IRSensor.RIGHT, IRColour.BLACK)) {
        motion.turnRight(35)
    }
})
basic.forever(function () {
    if (sonar.isSonar(Comparison.CLOSER, 6)) {
        motion.stop()
        motion.driveStraight(-5)
        basic.pause(400)
        motion.turnLeft(TurnSpeed)
        DodgeCount += 1
        basic.pause(400)
        basic.showString("" + (DodgeCount))
        motion.stop()
    }
})
