function initArray () {
    Text_Liste = [" ", "A", "", "C", "", "B", "I", "F", "", "E", "", "D", "", "H", "J", "G", "", "K", "ÄU", "M", "", "L", "S", "P", "", "O", "Ä", "N", "", "R", "T", "Q", "", "AU", "", "EI", "", "EU", "Ö", "", "", "SCH", "", "CH", "", "Ü", "W", "", "", "U", "IE", "X", "", "V", "ß", "", "", "Z", "", "Y", "", "", "ST"]
}
function f3 () {
    if (b3) {
        mySprite3.destroy(effects.rings, 500)
        makerbit.setDigitalPin(7, makerbit.level(PinLevel.Low))
    } else {
        mySprite3 = sprites.create(img`
. . . . 5 5 5 5 5 5 5 5 5 . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . . . 5 5 5 5 5 5 5 5 5 . . . . 
`, SpriteKind.Player)
        mySprite3.setPosition(20, 40)
        makerbit.setDigitalPin(7, makerbit.level(PinLevel.High))
    }
    b3 = !(b3)
    BuchstabeZeigen()
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    f5()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    f6()
})
function f6 () {
    if (b6) {
        mySprite6.destroy(effects.rings, 500)
        makerbit.setDigitalPin(10, makerbit.level(PinLevel.Low))
    } else {
        mySprite6 = sprites.create(img`
. . . . 5 5 5 5 5 5 5 5 5 . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . . . 5 5 5 5 5 5 5 5 5 . . . . 
`, SpriteKind.Player)
        mySprite6.setPosition(50, 63)
        makerbit.setDigitalPin(10, makerbit.level(PinLevel.High))
    }
    b6 = !(b6)
    BuchstabeZeigen()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    f4()
})
function f5 () {
    if (b5) {
        mySprite5.destroy(effects.halo, 500)
        makerbit.setDigitalPin(9, makerbit.level(PinLevel.Low))
    } else {
        mySprite5 = sprites.create(img`
. . . . 5 5 5 5 5 5 5 5 5 . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . . . 5 5 5 5 5 5 5 5 5 . . . . 
`, SpriteKind.Player)
        mySprite5.setPosition(20, 63)
        makerbit.setDigitalPin(9, makerbit.level(PinLevel.High))
    }
    b5 = !(b5)
    BuchstabeZeigen()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    f3()
})
function f4 () {
    if (b4) {
        mySprite4.destroy(effects.confetti, 500)
        makerbit.setDigitalPin(8, makerbit.level(PinLevel.Low))
    } else {
        mySprite4 = sprites.create(img`
. . . . 5 5 5 5 5 5 5 5 5 . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . . . 5 5 5 5 5 5 5 5 5 . . . . 
`, SpriteKind.Player)
        mySprite4.setPosition(50, 40)
        makerbit.setDigitalPin(8, makerbit.level(PinLevel.High))
    }
    b4 = !(b4)
    BuchstabeZeigen()
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    f2()
})
function f2 () {
    if (b2) {
        mySprite2.destroy(effects.hearts, 500)
        makerbit.setDigitalPin(6, makerbit.level(PinLevel.Low))
    } else {
        mySprite2 = sprites.create(img`
. . . . 5 5 5 5 5 5 5 5 5 . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . . . 5 5 5 5 5 5 5 5 5 . . . . 
`, SpriteKind.Player)
        mySprite2.setPosition(50, 17)
        makerbit.setDigitalPin(6, makerbit.level(PinLevel.High))
    }
    b2 = !(b2)
    BuchstabeZeigen()
}
function BuchstabeZeigen () {
    CharNumber = 0
    if (b1) {
        CharNumber = CharNumber + 1
    }
    if (b2) {
        CharNumber = CharNumber + 2
    }
    if (b3) {
        CharNumber = CharNumber + 4
    }
    if (b4) {
        CharNumber = CharNumber + 8
    }
    if (b5) {
        CharNumber = CharNumber + 16
    }
    if (b6) {
        CharNumber = CharNumber + 32
    }
    mySprite.say(Text_Liste[CharNumber])
}
function f1 () {
    if (b1) {
        mySprite1.destroy(effects.confetti, 500)
        makerbit.setDigitalPin(5, makerbit.level(PinLevel.Low))
    } else {
        mySprite1 = sprites.create(img`
. . . . 5 5 5 5 5 5 5 5 5 . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . . . 5 5 5 5 5 5 5 5 5 . . . . 
`, SpriteKind.Player)
        mySprite1.setPosition(20, 17)
        makerbit.setDigitalPin(5, makerbit.level(PinLevel.High))
    }
    b1 = !(b1)
    BuchstabeZeigen()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    f1()
})
let CharNumber = 0
let Text_Liste: string[] = []
let mySprite6: Sprite = null
let mySprite5: Sprite = null
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite1: Sprite = null
let mySprite: Sprite = null
let b6 = false
let b5 = false
let b4 = false
let b3 = false
let b2 = false
let b1 = false
initArray()
makerbit.setLedPins(makerbit.level(PinLevel.High))
b1 = true
b2 = true
b3 = true
b4 = true
b5 = true
b6 = true
mySprite = sprites.create(img`
. . . . . f f 4 4 f f . . . . . 
. . . . f 5 4 5 5 4 5 f . . . . 
. . . f e 4 5 5 5 5 4 e f . . . 
. . f b 3 e 4 4 4 4 e 3 b f . . 
. . f 3 3 3 3 3 3 3 3 3 3 f . . 
. f 3 3 e b 3 e e 3 b e 3 3 f . 
. f 3 3 f f e e e e f f 3 3 f . 
. f b b f b f e e f b f b b f . 
. f b b e 1 f 4 4 f 1 e b b f . 
f f b b f 4 4 4 4 4 4 f b b f f 
f b b f f f e e e e f f f b b f 
. f e e f b d d d d b f e e f . 
. . e 4 c d d d d d d c 4 e . . 
. . e f b d b d b d b b f e . . 
. . . f f 1 d 1 d 1 d f f . . . 
. . . . . f f b b f f . . . . . 
`, SpriteKind.Player)
let Platzhalter = image.create(scene.screenWidth(), scene.screenHeight())
images.printCenter(Platzhalter, "Übersetzer für", 90, 1)
images.printCenter(Platzhalter, "Brailleschrift", 100, 9)
let TextSprite = sprites.create(Platzhalter, SpriteKind.Player)
mySprite.say("I LOVE YOU", 1000)
mySprite.setPosition(89, 69)
mySprite1 = sprites.create(img`
. . . . 5 5 5 5 5 5 5 5 5 . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . . . 5 5 5 5 5 5 5 5 5 . . . . 
`, SpriteKind.Player)
mySprite1.setPosition(20, 17)
mySprite2 = sprites.create(img`
. . . . 5 5 5 5 5 5 5 5 5 . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . . . 5 5 5 5 5 5 5 5 5 . . . . 
`, SpriteKind.Player)
mySprite2.setPosition(50, 17)
mySprite3 = sprites.create(img`
. . . . 5 5 5 5 5 5 5 5 5 . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . . . 5 5 5 5 5 5 5 5 5 . . . . 
`, SpriteKind.Player)
mySprite3.setPosition(20, 40)
mySprite4 = sprites.create(img`
. . . . 5 5 5 5 5 5 5 5 5 . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . . . 5 5 5 5 5 5 5 5 5 . . . . 
`, SpriteKind.Player)
mySprite4.setPosition(50, 40)
mySprite5 = sprites.create(img`
. . . . 5 5 5 5 5 5 5 5 5 . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . . . 5 5 5 5 5 5 5 5 5 . . . . 
`, SpriteKind.Player)
mySprite5.setPosition(20, 63)
mySprite6 = sprites.create(img`
. . . . 5 5 5 5 5 5 5 5 5 . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . . . 5 5 5 5 5 5 5 5 5 . . . . 
`, SpriteKind.Player)
mySprite6.setPosition(50, 63)
forever(function () {
    if (makerbit.isTouched(makerbit.touchSensorIndex(TouchSensor.T5))) {
        f1()
    }
    if (makerbit.isTouched(makerbit.touchSensorIndex(TouchSensor.T6))) {
        f2()
    }
    if (makerbit.isTouched(makerbit.touchSensorIndex(TouchSensor.T7))) {
        f3()
    }
    if (makerbit.isTouched(makerbit.touchSensorIndex(TouchSensor.T8))) {
        f4()
    }
    if (makerbit.isTouched(makerbit.touchSensorIndex(TouchSensor.T9))) {
        f5()
    }
    if (makerbit.isTouched(makerbit.touchSensorIndex(TouchSensor.T10))) {
        f6()
    }
    pause(200)
})
