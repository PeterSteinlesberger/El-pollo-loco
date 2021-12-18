const level1 = new Level(
    [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Cocina(),
        new Cocina(),
        new Cocina(),
        new Cocina(),
        new Cocina(),
        new Cocina(),
        new Cocina(),
        new Cocina(),
        new Cocina(),
        new Cocina(),
        new Cocina(),
        new Cocina(),
        new Endboss()
    ],
    [
        new Cloud('img/5.Fondo/Capas/4.nubes/1.png', 600),
        new Cloud('img/5.Fondo/Capas/4.nubes/1.png', 1800),
        new Cloud('img/5.Fondo/Capas/4.nubes/2.png', 2900),
        new Cloud('img/5.Fondo/Capas/4.nubes/1.png', 4400),
        new Cloud('img/5.Fondo/Capas/4.nubes/2.png', 6400)
    ],
    [

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 0),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 0),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0),
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719),
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 2),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 719 * 2),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 719 * 2),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 719 * 2),
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 3),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719 * 3),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719 * 3),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719 * 3),
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 4),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 719 * 4),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 719 * 4),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 719 * 4),
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 5),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719 * 5),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719 * 5),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719 * 5),
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 6),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 719 * 6),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 719 * 6),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 719 * 6),
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 7),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719 * 7),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719 * 7),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719 * 7),
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 8),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 719 * 8),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 719 * 8),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 719 * 8),
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 9),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719 * 9),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719 * 9),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719 * 9),
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 10),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 719 * 10),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 719 * 10),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 719 * 10)
    ],
    [
        new Coin('img/8.Coin/Moneda1.png', 4200, 220),
        new Coin('img/8.Coin/Moneda1.png', 4240, 180),
        new Coin('img/8.Coin/Moneda1.png', 4280, 140),
        new Coin('img/8.Coin/Moneda1.png', 4320, 180),
        new Coin('img/8.Coin/Moneda1.png', 4360, 220),
        new Coin('img/8.Coin/Moneda1.png', 930, 360),
        new Coin('img/8.Coin/Moneda1.png', 1330, 360),
        new Coin('img/8.Coin/Moneda1.png', 3030, 360),
        new Coin('img/8.Coin/Moneda1.png', 2240, 180),
        new Coin('img/8.Coin/Moneda1.png', 2280, 140),
        new Coin('img/8.Coin/Moneda1.png', 2320, 180),  
        new Coin('img/8.Coin/Moneda1.png', 4630, 360),
        new Coin('img/8.Coin/Moneda1.png', 5330, 360),
        new Coin('img/8.Coin/Moneda1.png', 6030, 360)   
    ]
);