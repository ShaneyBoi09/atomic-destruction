namespace SpriteKind {
    export const PortalMaker = SpriteKind.create()
    export const PortalMaker2 = SpriteKind.create()
    export const EDOOR = SpriteKind.create()
    export const NukeBlownUp = SpriteKind.create()
    export const PortalMaker3 = SpriteKind.create()
    export const PortalMaker4 = SpriteKind.create()
    export const Edoor2 = SpriteKind.create()
    export const PortalMaker5 = SpriteKind.create()
    export const PortalMaker6 = SpriteKind.create()
    export const PortalMaker7 = SpriteKind.create()
    export const Edoor3 = SpriteKind.create()
    export const Edoor4 = SpriteKind.create()
    export const PortalMaker8 = SpriteKind.create()
    export const SupaDupaBadEnemy = SpriteKind.create()
    export const SuperReveal = SpriteKind.create()
    export const DragonFight = SpriteKind.create()
    export const Harpoon = SpriteKind.create()
    export const HarpoonHT = SpriteKind.create()
    export const EProjectile = SpriteKind.create()
    export const Stuck = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.gameOver(false)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart.angle = 90
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f f f f f f f f f f . . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . f f f f f f f f f f f f f f . 
        . f . f f f f f f f f f f . f . 
        . f . . f f f f f f f f . 8 8 8 
        . f . . . f f f f f f . . 8 8 8 
        f f f . . f f f f f f . . 8 8 8 
        f . f . . f f f f f f . . 8 8 8 
        f . f . . f f f f f f . . . f . 
        . . . . . f f . f f f f . . . . 
        . . . . f f f . f f f f f f . . 
        . . f f f f f . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f f f f f f f f f f . . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . f f f f f f f f f f f f f f . 
        . f . f f f f f f f f f f . f . 
        . f . . f f f f f f f f . 8 8 8 
        . f . . . f f f f f f . . 8 8 8 
        f f f . . f f f f f f . . 8 8 8 
        f . f . . f f f f f f . . 8 8 8 
        f . f . . f f f f f f . . . f . 
        . . . . f f f . f f f . . . . . 
        . . f f f f f . f f f f . . . . 
        . . . . . . . . f f f f f f . . 
        `],
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.PortalMaker7, function (sprite, otherSprite) {
    color.startFade(color.originalPalette, color.Black)
    timer.after(200, function () {
        tiles.setCurrentTilemap(tilemap`level32`)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
        color.startFade(color.Black, color.originalPalette)
        tiles.placeOnRandomTile(mySprite2, assets.tile`myTile2`)
        mySprite2.setKind(SpriteKind.PortalMaker8)
    })
})
sprites.onOverlap(SpriteKind.Harpoon, SpriteKind.DragonFight, function (sprite, otherSprite) {
    myDart.setKind(SpriteKind.HarpoonHT)
    mySprite4.setKind(SpriteKind.Stuck)
    mySprite4.follow(myDart)
    myDart.follow(mySprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Edoor4, function (sprite, otherSprite) {
    animation.runImageAnimation(
    myEnemy,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . c c c c . . . . . . . . 
        . . c c 2 2 2 2 c c . . . . . . 
        . c 2 2 2 2 2 2 2 2 c . . . . . 
        c 2 2 2 2 2 1 f 2 2 2 c . . . . 
        c 2 2 2 2 2 f f 2 2 2 2 c . . . 
        c 2 2 2 2 2 2 2 2 2 2 2 c . . . 
        c c 5 5 1 5 2 2 2 2 2 2 4 c . . 
        c 2 3 3 3 2 2 2 2 2 4 4 4 c . . 
        . 5 2 2 2 2 2 2 2 2 4 4 4 c . . 
        . . c 5 5 c 2 2 5 4 4 4 4 c c . 
        . c 5 5 c 2 2 5 5 4 4 4 4 c 4 c 
        . c c c c c c 4 4 4 4 4 4 4 4 c 
        . . . c c c c 4 2 2 b 4 4 4 c . 
        . . c c c c c 5 2 2 b c c c . . 
        . . c 5 5 5 c d 2 2 b c . . . . 
        `,img`
        . . . . c c c c c . . . . . . . 
        . . c c 2 2 2 2 2 c . . . . . . 
        . c 2 2 2 2 1 f 2 2 c . . . . . 
        c 2 2 2 2 2 f f 2 2 2 c . . . . 
        c 2 2 2 2 2 2 2 2 2 2 2 c . . . 
        c c 5 5 1 5 2 2 2 2 2 2 c . . . 
        c 2 3 3 3 2 2 2 2 2 2 2 4 c . . 
        c 2 3 3 3 2 2 2 2 2 4 4 4 c . . 
        . c 2 2 2 2 5 2 2 2 4 4 4 c . . 
        . . c 5 5 c 2 2 5 4 4 4 4 c . . 
        . c 5 5 c 2 2 5 5 4 4 4 4 c c c 
        . c c c c c c 4 4 4 4 4 4 4 4 c 
        . . . . c c c 5 2 2 5 4 4 4 c . 
        . . . . . c 4 2 2 5 5 c c c . . 
        . . . . c c c c c c c . . . . . 
        . . . . c 5 5 5 c . . . . . . . 
        `,img`
        . . . . c c c c c . . . . . . . 
        . . c c 2 2 2 2 2 c . . . . . . 
        . c 2 2 2 2 1 f 2 2 c . . . . . 
        c 2 2 2 2 2 f f 2 2 2 c . . . . 
        c 2 2 2 2 2 2 2 2 2 2 2 c . . . 
        c c 5 5 1 5 2 2 2 2 2 2 c . . . 
        c 2 3 3 3 2 2 2 2 2 2 2 4 c . . 
        c 2 2 2 2 2 2 2 2 2 4 4 4 c . . 
        . c 2 2 2 2 5 2 2 2 4 4 4 c . . 
        . . c 5 5 c 2 2 5 4 4 4 4 c . . 
        . c 5 5 c 2 2 5 5 4 4 4 4 c c c 
        . c c c c c c 4 4 4 4 4 4 4 4 c 
        . . . . c c 5 2 2 5 4 4 4 c c . 
        . . . . c 4 2 2 5 5 c c c . . . 
        . . . . c c c c c c c . . . . . 
        . . . . c 5 5 5 c . . . . . . . 
        `,img`
        . . . . c c c c c . . . . . . . 
        . . c c 2 2 2 2 2 c . . . . . . 
        . c 2 2 2 2 1 f 2 2 c . . . . . 
        c 2 2 2 2 2 f f 2 2 2 c . . . . 
        c 2 2 2 2 2 2 2 2 2 2 2 c . . . 
        c c 5 5 1 5 2 2 2 2 2 2 c . . . 
        c 2 3 3 3 2 2 2 2 2 2 2 4 c . . 
        c 2 2 2 2 2 2 2 2 2 4 4 4 c . . 
        . c 2 2 2 2 5 2 2 2 4 4 4 c . . 
        . . c 5 5 c 2 2 5 4 4 4 4 c . . 
        . c 5 5 c 2 2 5 5 4 4 4 4 c c . 
        . c c c c c 5 5 4 4 4 4 4 4 c c 
        . . . c c 2 2 5 2 2 4 4 4 4 4 c 
        . . . . c 5 2 2 5 5 c c c c c c 
        . . . . c c c c c c . . . . . . 
        . . . . . c 5 5 5 c . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . c c c c . . . . . . . . 
        . . c c 2 2 2 2 c c . . . . . . 
        . c 2 2 2 2 2 2 2 2 c . . . . . 
        c 2 2 2 2 2 1 f 2 2 2 c . . . . 
        c 2 2 2 2 2 f f 2 2 2 2 c . . . 
        c c 5 5 1 5 2 2 2 2 2 2 c . . . 
        c c 3 3 5 5 2 2 2 2 2 2 4 c . . 
        c 2 3 3 3 2 2 2 2 2 4 4 4 c . . 
        . 5 2 2 2 2 2 2 2 2 4 4 4 c . . 
        . . c 5 5 c 2 2 5 4 4 4 4 c . . 
        . c 5 5 c 2 2 5 5 4 4 4 4 c c c 
        . c c c c c c 4 4 4 4 4 4 4 4 c 
        . . . c c c c 4 2 2 5 4 4 4 c c 
        . . . c 5 c c 5 2 2 5 c c c . . 
        . . . c c c 4 2 2 5 c . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . c c c c . . . . . . . . 
        . . c c 2 2 2 2 c c . . . . . . 
        . c 2 2 2 2 2 2 2 2 c . . . . . 
        c 2 2 2 2 2 1 f 2 2 2 c . . . . 
        c 2 2 2 2 2 f f 2 2 2 2 c . . . 
        c 2 2 2 2 2 2 2 2 2 2 2 c . . . 
        c c 5 5 1 5 2 2 2 2 2 2 4 c . . 
        c 2 3 3 3 2 2 2 2 2 4 4 4 c . . 
        . 5 2 2 2 2 2 2 2 2 4 4 4 c . . 
        . . c 5 5 c 2 2 5 4 4 4 4 c . . 
        . c 5 5 c 2 2 5 5 4 4 4 4 c c c 
        . c c c c c c 4 4 4 4 4 4 4 4 c 
        . . . c c c c 4 2 2 5 4 4 c c . 
        . . c 5 5 c c c 2 2 5 c c . . . 
        . . c c c c c 4 2 2 c . . . . . 
        `],
    100,
    true
    )
    myEnemy.follow(mySprite, 35)
})
controller.combos.attachCombo("B + R", function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    myDart.setKind(SpriteKind.Projectile)
    mySprite.setImage(assets.image`destroyer1`)
    myDart.setPosition(mySprite.x, mySprite.y)
    myDart.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . f f . . 
        . . . . . . . . . . . . . . f . 
        . . . . . . . . . . . . . . . f 
        . . . . . . . . . . . . . . . f 
        . . . . . . . . . . . . . . . f 
        . . . . . . . . . . . . . . f . 
        . . . . . . . . . . . . . f . . 
        f f f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . f . . 
        . . . . . . . . . . . . . . f . 
        . . . . . . . . . . . . . . . f 
        . . . . . . . . . . . . . . . f 
        . . . . . . . . . . . . . . . f 
        . . . . . . . . . . . . . . f . 
        . . . . . . . . . . . . f f . . 
        `)
    myDart.setKind(SpriteKind.Harpoon)
    myDart.throwDart()
})
sprites.onOverlap(SpriteKind.NukeBlownUp, SpriteKind.Enemy, function (sprite, otherSprite) {
    color.startFade(color.originalPalette, color.White)
    timer.after(200, function () {
        sprites.destroy(myEnemy)
        color.startFade(color.White, color.originalPalette)
    })
})
controller.combos.attachCombo("A + U", function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    myDart.setKind(SpriteKind.Projectile)
    mySprite.setImage(assets.image`destroyer2`)
    myDart.setPosition(mySprite.x, mySprite.y)
    myDart.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . 2 5 5 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    myDart.setKind(SpriteKind.Projectile)
    myDart.throwDart()
})
controller.combos.attachCombo("A + D", function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    myDart.setKind(SpriteKind.Projectile)
    mySprite.setImage(assets.image`destroyer0`)
    myDart.setPosition(mySprite.x, mySprite.y)
    myDart.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . 2 5 5 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    myDart.setKind(SpriteKind.Projectile)
    myDart.throwDart()
})
sprites.onOverlap(SpriteKind.NukeBlownUp, SpriteKind.Edoor2, function (sprite, otherSprite) {
    color.startFade(color.originalPalette, color.Black)
    timer.after(200, function () {
        tiles.setCurrentTilemap(tilemap`level21`)
        color.startFade(color.Black, color.originalPalette)
        tiles.placeOnRandomTile(mySprite2, assets.tile`myTile2`)
        mySprite2.setKind(SpriteKind.PortalMaker6)
    })
})
sprites.onOverlap(SpriteKind.SuperReveal, SpriteKind.SupaDupaBadEnemy, function (sprite, otherSprite) {
    sprites.destroy(mySprite5)
    game.showLongText("My spies have been watching you. And I have to say, you are one powerful cyborg. When I saw you kill my son, I was devastated. Now, I'll have to kill YOU with my bare hands- I mean paws.", DialogLayout.Bottom)
    timer.after(500, function () {
        game.showLongText("Let the games begin!", DialogLayout.Bottom)
        mySprite4.setKind(SpriteKind.DragonFight)
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.PortalMaker6, function (sprite, otherSprite) {
    color.startFade(color.originalPalette, color.Black)
    timer.after(200, function () {
        tiles.setCurrentTilemap(tilemap`level24`)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
        color.startFade(color.Black, color.originalPalette)
        tiles.placeOnRandomTile(mySprite2, assets.tile`myTile2`)
        mySprite2.setKind(SpriteKind.PortalMaker7)
        mySprite3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . b . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Edoor3)
        tiles.placeOnRandomTile(mySprite3, assets.tile`myTile6`)
        myEnemy = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        tiles.placeOnRandomTile(myEnemy, sprites.dungeon.hazardLava1)
        MyEnemyTrigger = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . c . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Edoor4)
        tiles.placeOnRandomTile(MyEnemyTrigger, assets.tile`myTile8`)
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.PortalMaker, function (sprite, otherSprite) {
    color.startFade(color.originalPalette, color.Black)
    timer.after(200, function () {
        tiles.setCurrentTilemap(tilemap`level0`)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
        color.startFade(color.Black, color.originalPalette)
        tiles.placeOnRandomTile(mySprite2, assets.tile`myTile2`)
        mySprite2.setKind(SpriteKind.PortalMaker2)
    })
})
sprites.onOverlap(SpriteKind.NukeBlownUp, SpriteKind.EDOOR, function (sprite, otherSprite) {
    color.startFade(color.originalPalette, color.Black)
    timer.after(200, function () {
        tiles.setCurrentTilemap(tilemap`level15`)
        color.startFade(color.Black, color.originalPalette)
        tiles.placeOnRandomTile(mySprite2, assets.tile`myTile2`)
        mySprite2.setKind(SpriteKind.PortalMaker4)
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.PortalMaker8, function (sprite, otherSprite) {
    color.startFade(color.originalPalette, color.Black)
    timer.after(200, function () {
        tiles.setCurrentTilemap(tilemap`level36`)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
        color.startFade(color.Black, color.originalPalette)
        mySprite4.setImage(assets.image`Flame Thrower`)
        tiles.placeOnRandomTile(mySprite4, assets.tile`myTile6`)
        mySprite5 = sprites.create(img`
            1 . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.SuperReveal)
        mySprite5.setPosition(mySprite.x, mySprite.y)
        scene.cameraFollowSprite(mySprite)
        timer.after(500, function () {
            mySprite5.follow(mySprite4)
        })
    })
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart.angle = 270
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f f f f f f f f f f . . . 
        . . f f f 7 7 7 7 7 7 f f f . . 
        . . f f f f f f f f f f f f . . 
        . . d d d d d d d d d d d d . . 
        . d f f f f f f f f f f f f d . 
        . f . f f f f 8 f f f f f . f . 
        . f . . f f f f f f f f . 8 8 8 
        . f . . . f f f f f f . . 8 8 8 
        f f f . . f f f f f f . . 8 7 8 
        f . f . . f f f f f f . . 8 8 8 
        f . f . . f f f f f f . . . f . 
        . . . . . f f . f f f f . . . . 
        . . . . f f f . f f f f f f . . 
        . . f f f f f . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f f f f f f f f f f . . . 
        . . f f f 7 7 7 7 7 7 f f f . . 
        . . f f f f f f f f f f f f . . 
        . . d d d d d d d d d d d d . . 
        . d f f f f f f f f f f f f d . 
        . f . f f f f 8 f f f f f . f . 
        . f . . f f f f f f f f . 8 8 8 
        . f . . . f f f f f f . . 8 8 8 
        f f f . . f f f f f f . . 8 7 8 
        f . f . . f f f f f f . . 8 8 8 
        f . f . . f f f f f f . . . f . 
        . . . . f f f . f f f . . . . . 
        . . f f f f f . f f f f . . . . 
        . . . . . . . . f f f f f f . . 
        `],
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.NukeBlownUp, SpriteKind.Edoor3, function (sprite, otherSprite) {
    color.startFade(color.originalPalette, color.Black)
    timer.after(200, function () {
        tiles.setCurrentTilemap(tilemap`level28`)
        color.startFade(color.Black, color.originalPalette)
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.HarpoonHT, function (sprite, otherSprite) {
    myDart.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    myDart.setKind(SpriteKind.Harpoon)
    myDart.follow(mySprite, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.PortalMaker2, function (sprite, otherSprite) {
    color.startFade(color.originalPalette, color.Black)
    timer.after(200, function () {
        tiles.setCurrentTilemap(tilemap`level8`)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
        color.startFade(color.Black, color.originalPalette)
        tiles.placeOnRandomTile(mySprite2, assets.tile`myTile2`)
        mySprite2.setKind(SpriteKind.PortalMaker3)
        mySprite3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . b . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.EDOOR)
        tiles.placeOnRandomTile(mySprite3, assets.tile`myTile6`)
    })
})
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    myDart.setKind(SpriteKind.NukeBlownUp)
    animation.runImageAnimation(
    myDart,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . 2 5 5 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 4 . . . . . 
        . . . . 2 . . . . 4 4 . . . . . 
        . . . . 2 4 . . 4 5 4 . . . . . 
        . . . . . 2 4 d 5 5 4 . . . . . 
        . . . . . 2 5 5 5 5 4 . . . . . 
        . . . . . . 2 5 5 5 5 4 . . . . 
        . . . . . . 2 5 4 2 4 4 . . . . 
        . . . . . . 4 4 . . 2 4 4 . . . 
        . . . . . 4 4 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . 3 . . . . . . . . . . . 4 . . 
        . 3 3 . . . . . . . . . 4 4 . . 
        . 3 d 3 . . 4 4 . . 4 4 d 4 . . 
        . . 3 5 3 4 5 5 4 4 d d 4 4 . . 
        . . 3 d 5 d 1 1 d 5 5 d 4 4 . . 
        . . 4 5 5 1 1 1 1 5 1 1 5 4 . . 
        . 4 5 5 5 5 1 1 5 1 1 1 d 4 4 . 
        . 4 d 5 1 1 5 5 5 1 1 1 5 5 4 . 
        . 4 4 5 1 1 5 5 5 5 5 d 5 5 4 . 
        . . 4 3 d 5 5 5 d 5 5 d d d 4 . 
        . 4 5 5 d 5 5 5 d d d 5 5 4 . . 
        . 4 5 5 d 3 5 d d 3 d 5 5 4 . . 
        . 4 4 d d 4 d d d 4 3 d d 4 . . 
        . . 4 5 4 4 4 4 4 4 4 4 4 . . . 
        . 4 5 4 . . 4 4 4 . . . 4 4 . . 
        . 4 4 . . . . . . . . . . 4 4 . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . b b . b b b . . . . . 
        . . . . b 1 1 b 1 1 1 b . . . . 
        . . b b 3 1 1 d d 1 d d b b . . 
        . b 1 1 d d b b b b b 1 1 b . . 
        . b 1 1 1 b . . . . . b d d b . 
        . . 3 d d b . . . . . b d 1 1 b 
        . b 1 d 3 . . . . . . . b 1 1 b 
        . b 1 1 b . . . . . . b b 1 d b 
        . b 1 d b . . . . . . b d 3 d b 
        . b b d d b . . . . b d d d b . 
        . b d d d d b . b b 3 d d 3 b . 
        . . b d d 3 3 b d 3 3 b b b . . 
        . . . b b b d d d d d b . . . . 
        . . . . . . b b b b b . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    false
    )
})
controller.combos.attachCombo("A + L", function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    myDart.setKind(SpriteKind.Projectile)
    mySprite.setImage(assets.image`destroyer`)
    myDart.setPosition(mySprite.x, mySprite.y)
    myDart.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . 2 5 5 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    myDart.setKind(SpriteKind.Projectile)
    myDart.throwDart()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.PortalMaker4, function (sprite, otherSprite) {
    color.startFade(color.originalPalette, color.Black)
    timer.after(200, function () {
        tiles.setCurrentTilemap(tilemap`level17`)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
        color.startFade(color.Black, color.originalPalette)
        tiles.placeOnRandomTile(mySprite2, assets.tile`myTile2`)
        mySprite2.setKind(SpriteKind.PortalMaker3)
        mySprite3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . b . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Edoor2)
        tiles.placeOnRandomTile(mySprite3, assets.tile`myTile6`)
    })
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f f f f f f f f f f . . . 
        . . f f 7 7 7 7 7 7 f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . d d d d d d d d d d d d . . 
        . d f f f f f f f f f f f f d . 
        . f . f f f f 8 f f f f f . f . 
        . f . . f f f f f f f f . 8 8 8 
        . f . . . f f f f f f . . 8 8 8 
        f f f . . f f f f f f . . 8 7 8 
        f . f . . f f f f f f . . 8 8 8 
        f . f . . f f f f f f . . . f . 
        . . . . . f f . f f f f . . . . 
        . . . . f f f . f f f f f f . . 
        . . f f f f f . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f f f f f f f f f f . . . 
        . . f f 7 7 7 7 7 7 f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . d d d d d d d d d d d d . . 
        . d f f f f f f f f f f f f d . 
        . f . f f f f 8 f f f f f . f . 
        . f . . f f f f f f f f . 8 8 8 
        . f . . . f f f f f f . . 8 8 8 
        f f f . . f f f f f f . . 8 7 8 
        f . f . . f f f f f f . . 8 8 8 
        f . f . . f f f f f f . . . f . 
        . . . . f f f . f f f . . . . . 
        . . f f f f f . f f f f . . . . 
        . . . . . . . . f f f f f f . . 
        `],
    200,
    true
    )
    myDart.angle = 180
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.PortalMaker3, function (sprite, otherSprite) {
    color.startFade(color.originalPalette, color.Black)
    timer.after(200, function () {
        tiles.setCurrentTilemap(tilemap`level13`)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
        color.startFade(color.Black, color.originalPalette)
        tiles.placeOnRandomTile(mySprite2, assets.tile`myTile2`)
        mySprite2.setKind(SpriteKind.PortalMaker4)
    })
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f f f f f f f f f f . . . 
        . . f f f f 7 7 7 7 7 7 f f . . 
        . . f f f f f f f f f f f f . . 
        . . d d d d d d d d d d d d . . 
        . d f f f f f f f f f f f f d . 
        . f . f f f f f 8 f f f f . f . 
        8 8 8 . f f f f f f f f . . f . 
        8 8 8 . . f f f f f f . . . f . 
        8 7 8 . . f f f f f f . . f f f 
        8 8 8 . . f f f f f f . . f . f 
        . f . . . f f f f f f . . f . f 
        . . . . f f f f . f f . . . . . 
        . . f f f f f f . f f f . . . . 
        . . . . . . . . . f f f f f . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f f f f f f f f f f . . . 
        . . f f f f 7 7 7 7 7 7 f f . . 
        . . f f f f f f f f f f f f . . 
        . . d d d d d d d d d d d d . . 
        . d f f f f f f f f f f f f d . 
        . f . f f f f f 8 f f f f . f . 
        8 8 8 . f f f f f f f f . . f . 
        8 8 8 . . f f f f f f . . . f . 
        8 7 8 . . f f f f f f . . f f f 
        8 8 8 . . f f f f f f . . f . f 
        . f . . . f f f f f f . . f . f 
        . . . . . f f f . f f f . . . . 
        . . . . f f f f . f f f f f . . 
        . . f f f f f f . . . . . . . . 
        `],
    200,
    true
    )
    myDart.angle = 0
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.PortalMaker5, function (sprite, otherSprite) {
    color.startFade(color.originalPalette, color.Black)
    timer.after(200, function () {
        tiles.setCurrentTilemap(tilemap`level17`)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
        color.startFade(color.Black, color.originalPalette)
        tiles.placeOnRandomTile(mySprite2, assets.tile`myTile2`)
        mySprite2.setKind(SpriteKind.PortalMaker6)
        mySprite3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . b . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Edoor2)
        tiles.placeOnRandomTile(mySprite3, assets.tile`myTile6`)
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Stuck, function (sprite, otherSprite) {
    game.showLongText("I surrender! I surrender! I surrender! Just get me off of this harpoon!", DialogLayout.Bottom)
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    myEnemy.follow(myDart, 100)
    myEnemy.sayText("OOF")
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    game.gameOver(false)
})
controller.combos.attachCombo("B + L", function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    myDart.setKind(SpriteKind.Projectile)
    mySprite.setImage(assets.image`destroyer`)
    myDart.setPosition(mySprite.x, mySprite.y)
    myDart.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . f f . . . . . . . . . . . . 
        . f . . . . . . . . . . . . . . 
        f . . . . . . . . . . . . . . . 
        f . . . . . . . . . . . . . . . 
        f . . . . . . . . . . . . . . . 
        . f . . . . . . . . . . . . . . 
        . . f . . . . . . . . . . . . . 
        . . f f f f f f f f f f f f f f 
        . . f . . . . . . . . . . . . . 
        . f . . . . . . . . . . . . . . 
        f . . . . . . . . . . . . . . . 
        f . . . . . . . . . . . . . . . 
        f . . . . . . . . . . . . . . . 
        . f . . . . . . . . . . . . . . 
        . . f f . . . . . . . . . . . . 
        `)
    myDart.setKind(SpriteKind.Harpoon)
    myDart.throwDart()
})
controller.combos.attachCombo("A + R", function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    myDart.setKind(SpriteKind.Projectile)
    mySprite.setImage(assets.image`destroyer1`)
    myDart.setPosition(mySprite.x, mySprite.y)
    myDart.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . 2 5 5 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    myDart.setKind(SpriteKind.Projectile)
    myDart.throwDart()
})
scene.onHitWall(SpriteKind.Harpoon, function (sprite, location) {
    myDart.setKind(SpriteKind.HarpoonHT)
    myDart.follow(mySprite)
})
let DragonBall: Sprite = null
let MyEnemyTrigger: Sprite = null
let mySprite3: Sprite = null
let mySprite5: Sprite = null
let myEnemy: Sprite = null
let myDart: Dart = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
let mySprite4: Sprite = null
tiles.setCurrentTilemap(tilemap`level`)
mySprite4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.SupaDupaBadEnemy)
mySprite = sprites.create(assets.image`destroyer`, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 1 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.PortalMaker)
tiles.placeOnRandomTile(mySprite2, assets.tile`myTile2`)
myDart = darts.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
forever(function () {
    if (mySprite4.kind() == SpriteKind.DragonFight) {
        DragonBall = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . 6 6 6 6 6 6 6 . . . . 
            . . . 6 6 2 2 2 2 2 2 2 6 6 . . 
            . . 6 6 2 2 2 2 2 2 2 2 2 6 6 . 
            . . 6 2 2 4 4 4 4 4 4 4 2 2 6 . 
            . 6 2 2 4 4 5 5 5 5 5 4 4 2 2 6 
            . 6 2 2 4 5 5 5 5 5 5 5 4 2 2 6 
            . 6 2 2 4 5 5 5 5 5 5 5 4 2 2 6 
            . 6 2 2 4 5 5 5 5 5 5 5 4 2 2 6 
            . 6 2 2 4 5 5 5 5 5 5 5 4 2 2 6 
            . 6 2 2 4 5 5 5 5 5 5 5 4 2 2 6 
            . 6 2 2 4 4 5 5 5 5 5 4 4 2 2 6 
            . . 6 2 2 4 4 4 4 4 4 4 2 2 6 . 
            . . 6 6 2 2 2 2 2 2 2 2 2 6 6 . 
            . . . 6 6 2 2 2 2 2 2 2 6 6 . . 
            . . . . . 6 6 6 6 6 6 6 . . . . 
            `, SpriteKind.EProjectile)
        DragonBall.setBounceOnWall(true)
        DragonBall.startEffect(effects.fire, 5000)
        tiles.placeOnRandomTile(DragonBall, assets.tile`myTile0`)
        DragonBall.follow(mySprite, 5)
    }
})
