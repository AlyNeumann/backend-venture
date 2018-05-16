//resto data stored here

let asian = {
    expensive: [
        {
            name: 'Sushi Momo Vegetalien',
            description: 'Rustic-chic bistro specializing in creative vegan sushi rolls & Japanese entrees.',
            coordinates: { lat: 45.518112, long: -73.569495 },
            address: '3609 St Denis Str'
        },
        {
            name: 'Mito Sushi',
            description: 'Puisqu’on ne fait rien d’ordinaire, nos Itamae ont revisité les sushis incontournables en leur ajoutant leur touche de créativité ; les subtilités de ces indispensables vous feront craquer.',
            coordinates: { lat: 45.518845, long: -73.587720 },
            address: '101 Mont-Royal Ave W'
        }]
    ,
    cheap: [
        {
            name: 'Ramen Ya',
            description: 'Japanese soups, noodle dishes & sake in a casual setting with wooden touches & a wraparound counter.',
            coordinates: { lat: 45.518514, long: -73.583266 },
            address: '4274 St Laurent Blvd'
        },
        {
            name: 'Ichi Sushi',
            description: 'Extensive menu of creative sushi rolls (some in soy-paper wraps) & miso soups to take away.',
            coordinates: { lat: 45.520494, long: -73.586166 },
            address: '23 Mont-Royal Ave E'
        }
    ]
}

let latinMex = {
    expensive: [
        {
            name: 'Casa Minhota',
            description: 'Traditional Portuguese, select wine list & festive ambience',
            coordinates: { at: 45.516516, long: -73.578135 },
            address: '3959 St Laurent Blvd”'

        },
        {
            name: 'La Sala Rosa',
            description: 'Eatery serving tapas and paellas, entertainment upstairs on select nights',
            coordinates: { lat: 45.521849, long: -73.590429 },
            address: '4848 St Laurent Blvd'

        }

    ],
    cheap: [
        {
            name: 'T&T Tacos et Tortas',
            description: 'Mexican food & Cocktail/Wine Bar',
            coordinates: { lat: 45.517468, long: -73.582390 },
            address: '51 Rachel St W'

        },
        {
            name: 'Rotisserie Romados',
            description: 'Montreals favourite Portuguese grilled chicken and sandwiches.',
            coordinates: { lat: 5.519285, long: -73.580757 },
            address: ''

        }

    ]
}

module.exports = {
    asianExpensive: asian.expensive,
    latinMexExpensive: latinMex.expensive,
}

//const restaurants = require('./restaurants.js');
// ['latinMexExpensive'].map(key => restaurants[key])
