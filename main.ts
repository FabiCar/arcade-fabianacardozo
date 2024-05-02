namespace SpriteKind {
    export const Objetivo = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Dino.vy == 0) {
        Dino.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.coral0, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.splatter)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(50)
    game.setGameOverEffect(true, effects.smiles)
    game.setGameOverEffect(false, effects.splatter)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.starField)
})
let Jamón: Sprite = null
let Dino: Sprite = null
info.setLife(3)
info.setScore(0)
effects.bubbles.startScreenEffect(2000)
scene.setBackgroundImage(assets.image`myImage`)
music.play(music.stringPlayable("B A G A G F A C5 ", 140), music.PlaybackMode.UntilDone)
tiles.setCurrentTilemap(tilemap`Level one`)
tiles.setTileAt(tiles.getTileLocation(2, 8), assets.tile`transparency16`)
Dino = sprites.create(img`
    ........................
    ............cc..........
    ............ccc.........
    ........ccc.ccccccc.....
    ........ccccc555555cc...
    ........ccb5555555555c..
    .....ccc.b55555ff15555c.
    .....cccb5555555ff55555c
    ......cb555555555555d55c
    ....c.b555555555bb55555c
    ....ccb555ddd5555b13bbc.
    ....ccd55ddddd555b3335c.
    .....cdd5ddddddd55b335c.
    ...c.bddddb555bbbd555c..
    ...ccdddddbb55555bccc...
    ...ccdddddddcc555bcc....
    ...ccddddddddbcccbcccc..
    .ccbddddddd55dbbbbc55c..
    ccddddddddd555dbbcc5c...
    cddddddbbbdd555bbccc....
    .ccddddbbbbdd55bcc......
    ...cccbbbbbdddbcddcc....
    .....cccccdd555dcccc....
    ..........cccccc........
    `, SpriteKind.Player)
tiles.placeOnRandomTile(Dino, sprites.dungeon.doorOpenNorth)
controller.moveSprite(Dino, 84, 0)
let Serpiente = sprites.create(img`
    . . . . . . c c c c c c c . . . 
    . . . . . c f f 6 6 f f 7 c . . 
    . . . . c 7 6 6 6 6 6 6 7 6 c . 
    . . . c 7 7 7 7 7 7 7 7 7 7 c . 
    . . . c 7 8 1 f f 1 6 7 7 7 c . 
    . . . f 6 f 1 f f 1 f 7 7 7 f . 
    . . . f 6 f 2 2 2 2 f 7 7 7 f . 
    . . c c 6 f 2 2 2 2 f 7 7 6 f . 
    . c 7 7 7 7 2 2 2 2 7 7 f c . . 
    c 7 1 1 1 7 7 7 7 7 c c 7 7 c . 
    f 1 1 1 1 1 7 7 7 f c 6 7 7 7 c 
    f 1 1 1 1 1 1 6 f c c 6 6 6 c c 
    f 6 1 1 1 1 1 6 6 c 6 6 6 c . . 
    f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
    . f 6 1 1 1 1 6 6 6 6 6 c . . . 
    . . f f c c c c c c c c . . . . 
    `, SpriteKind.Enemy)
Serpiente.setPosition(150, 170)
let Hongo = sprites.create(img`
    ........................
    .....bbbbb..............
    ....b33333bb............
    ...b33331113b...........
    ...b333311113b..........
    ..b1133331113bc.........
    .b11133333333bbb........
    bb1133113333bbbc.bbbb...
    cbb3311113bbddbcb3311b..
    cbbbbddddbbdddcbb33113c.
    .cbbbbddbbbddbbddb3333bc
    ..ccbbbbbbbbccbddbbbddbc
    ....cccccccb.ccbbbbbddbc
    ......b1ddb....ccbbbbbc.
    .....b11ddb.....bccccc..
    .....b1ddbb.....bddb....
    `, SpriteKind.Enemy)
Hongo.setPosition(1230, 120)
for (let value of tiles.getTilesByType(sprites.dungeon.chestOpen)) {
    Jamón = sprites.create(img`
        ...........222222ee.............
        .........2233333bbeee...........
        .......2233d1111333bee..........
        ......23ddd111dd1d33eee.........
        .....23d1333d1d33d13bee.........
        ....23d133333d1d33313eee........
        ...2311333333ddd3333dbeee.......
        ..2313333333333ddd33d3e44e......
        ..21d3333333333ddd333db44ee.....
        .2313333333333dd33333db444ee....
        .2dd3333333333d333333d3b444e....
        2311d333333333d333333ddbb444e...
        2d131d33333333d333333d1b6644e...
        2d33dd33333333d333333d1b44444e..
        21333d3333333d3333333d1644664ee.
        21333d333333d33333333d16b64464be
        21333dddd33dd33333333d1646446b6e
        2133333dd11dd33333333d1644b6446e
        e133333d1d31d33333333d1b4446446e
        e1333331d3331333333331d6bb44b6e.
        e1333331dd331b3333333136bb6bb6e.
        e13333331dd1db33333331b6b66bbe..
        edd33333311db3333333dd6bb6bbe...
        e3d3333333d333333333136beebbe...
        .edd3333333d3333333ddbfeebbe....
        .e3dd33333dd3333333d3efeeee.....
        ..e3dd333d1333333dd3bfffff......
        ...e311111ddd333dddbffeef.......
        ....eed1d33d111113befeff........
        ......eeb333dd13beffff..........
        ........eeeefffffee.............
        ................................
        `, SpriteKind.Food)
    tiles.placeOnTile(Jamón, value)
}
game.onUpdate(function () {
    Dino.ay = 200
    scene.cameraFollowSprite(Dino)
})
forever(function () {
    if (Dino.overlapsWith(Serpiente)) {
        scene.cameraShake(4, 1000)
        tiles.placeOnRandomTile(Dino, sprites.dungeon.doorOpenNorth)
        Serpiente.setPosition(150, 170)
        info.changeLifeBy(-1)
        game.splash("Has perdido una vida")
    }
    if (Dino.overlapsWith(Hongo)) {
        scene.cameraShake(4, 1000)
        tiles.placeOnRandomTile(Dino, sprites.castle.shrub)
        Hongo.setPosition(1230, 120)
        info.changeLifeBy(-1)
        game.splash("Has perdido una vida")
    }
})
