namespace SpriteKind {
    export const Coin = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.gameOver(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (supercat.vy == 0) {
        supercat.vy = -160
    }
})
let coin: Sprite = null
let supercat: Sprite = null
scene.setBackgroundColor(9)
supercat = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f . . . 
    . . . . . . . . . . . . f f . . 
    . . . . . . . . . . . . f 5 f . 
    . . . . . . . . . . . . f f f f 
    f f f f f f f f f f f f f . . . 
    . . . f f f f f f f f f f . . . 
    . . . f f f f f f f f f f . . . 
    . . . f . f . . . . f . f . . . 
    . . . f . f . . . . f . f . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(supercat, 100, 0)
tiles.setCurrentTilemap(tilemap`level2`)
supercat.ay = 400
scene.cameraFollowSprite(supercat)
for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
    coin = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(coin, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
game.onUpdate(function () {
    supercat.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . f . . . 
        . . . . . . . . . . . . f f . . 
        . . . . . . . . . . . . f 5 f . 
        . . . . . . . . . . . . f f f f 
        f f f f f f f f f f f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . f . f . . . . f . f . . . 
        . . . f . f . . . . f . f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    if (supercat.vy < 0) {
        supercat.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . f . . . . 
            f . . . . . . . . . . f f . . . 
            f . . . . . . . . . . f 5 f . . 
            f . . . . . . . . . f f f f f . 
            f . . . . . . . . f f f . . . . 
            f f . . . . . . . f f f f f f . 
            . f . . . . . f f f f f . . . . 
            . f f f f f f f f f f f f f f . 
            . . . . f f f f f f f . . . . . 
            . . . . f f f . . . . . . . . . 
            . . . . f . f . . . . . . . . . 
            . . . . f . f . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (0 == 0) {
    	
    } else {
    	
    }
    if (supercat.vx < 0) {
        supercat.image.flipX()
    }
})
