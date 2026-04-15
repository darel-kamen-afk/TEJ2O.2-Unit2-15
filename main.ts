/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Grace
 * Created on: April 2026
 * This program will make a moving pixel 
*/

// variables
let sprite: game.LedSprite = null
let sideCounter = 0
let stepCounter = 0

// setup
basic.showIcon(IconNames.Happy)
basic.pause(2000)
basic.clearScreen()

// 
input.onButtonPressed(Button.A, function () {
    // setup
    basic.clearScreen()
    sprite = game.createSprite(0, 0)
    sideCounter = 0

    // 
    while (sideCounter < 4) {
        stepCounter = 0

        // 
        while (stepCounter < 4) {
            sprite.move(1)
            stepCounter = stepCounter + 1
            basic.pause(200)
        }

        // turn 90 degrees at the corner
        sprite.turn(Direction.Right, 90)
        sideCounter = sideCounter + 1
    }

    sprite.delete()
    basic.showIcon(IconNames.Happy)
})
