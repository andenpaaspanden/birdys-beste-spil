radio.onReceivedNumber(function (receivedNumber) {
    Fjende = game.createSprite(receivedNumber, 0)
    basic.pause(500)
    Fjende.change(LedSpriteProperty.Y, 1)
    basic.pause(500)
    Fjende.change(LedSpriteProperty.Y, 1)
    basic.pause(500)
    Fjende.change(LedSpriteProperty.Y, 1)
    basic.pause(500)
    Fjende.change(LedSpriteProperty.Y, 1)
    if (Fjende.isTouching(skib)) {
        game.removeLife(1)
    }
    Fjende.delete()
})
input.onButtonPressed(Button.A, function () {
    skib.change(LedSpriteProperty.X, -1)
    basic.pause(50)
})
input.onButtonPressed(Button.AB, function () {
    skud = game.createSprite(skib.get(LedSpriteProperty.X), 3)
    basic.pause(500)
    skud.change(LedSpriteProperty.Y, -1)
    basic.pause(500)
    skud.change(LedSpriteProperty.Y, -1)
    basic.pause(500)
    skud.change(LedSpriteProperty.Y, -1)
    basic.pause(500)
    skud.change(LedSpriteProperty.Y, -1)
    radio.sendNumber(skud.get(LedSpriteProperty.X))
    skud.delete()
    basic.pause(200)
})
input.onButtonPressed(Button.B, function () {
    skib.change(LedSpriteProperty.X, 1)
    basic.pause(50)
})
let skud: game.LedSprite = null
let Fjende: game.LedSprite = null
let skib: game.LedSprite = null
let CodeKey = 0
radio.setGroup(CodeKey)
game.setLife(2)
skib = game.createSprite(2, 4)
