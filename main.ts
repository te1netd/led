input.onButtonPressed(Button.A, function () {
    mode += 1
    mode = mode % 8
    if (mode == 0) {
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
    } else {
        if (mode == 1) {
            strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        } else {
            if (mode == 2) {
                strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Orange))
            } else {
                if (mode == 2) {
                    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Yellow))
                } else {
                    if (mode == 3) {
                        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
                    } else {
                        if (mode == 4) {
                            strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
                        } else {
                            if (mode == 5) {
                                strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Indigo))
                            } else {
                                if (mode == 6) {
                                    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Violet))
                                } else {
                                    if (mode == 7) {
                                        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Purple))
                                    } else {
                                    	
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    strip.showRainbow(1, 360)
})
input.onButtonPressed(Button.B, function () {
    strip.clear()
})
let mode = 0
let strip: neopixel.Strip = null
basic.showLeds(`
    . # . # .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
strip.show()
basic.forever(function () {
    strip.rotate(1)
    strip.show()
    basic.pause(100)
})
