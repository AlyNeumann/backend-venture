//resto data stored here

let asian = {
    expensive: [
        {
            name: 'Sushi Momo Vegetalien',
            description: 'Rustic-chic bistro specializing in creative vegan sushi rolls & Japanese entrees.',
            coordinates: { lat: 45.518112, long: -73.569495 },
            address: '3609 St Denis Str',
            imageLocation: 'http://localhost:4000/images/SushiMomo.jpg'
        
        },
        {
            name: 'Mito Sushi',
            description: 'Puisqu’on ne fait rien d’ordinaire, nos Itamae ont revisité les sushis incontournables en leur ajoutant leur touche de créativité ; les subtilités de ces indispensables vous feront craquer.',
            coordinates: { lat: 45.518845, long: -73.587720 },
            address: '101 Mont-Royal Ave W',
            imageLocation: 'http://localhost:4000/images/MitoSushi.jpg'
        },
        {
            name: 'Kinoya Izakaya',
            description: 'A Izakaya, a Japanese pub, combining the traits of a bar and a restaurant, serves drinks and tapas style food that are best  enjoyed by sharing.',
            coordinates: { lat: 45.521963, long: -73.579212},
            address: '4250 St Denis St',
            imageLocation: 'http://localhost:4000/images/KinoyaIzakaya.jpg'

        },
        {
            name: 'Big in Japan',
            description: 'Casual Japanese brasserie, serving up hearty comfort fare, sandwiches & desserts, plus beer & sake.',
            coordinates: { lat: 45.515097, long: -73.574830},
            address: '3723 St Laurent Blvd',
            imageLocation: 'http://localhost:4000/images/BigInJapan.jpg'
        }
    ]
    ,
    cheap: [
        {
            name: 'Ramen Ya',
            description: 'Japanese soups, noodle dishes & sake in a casual setting with wooden touches & a wraparound counter.',
            coordinates: { lat: 45.518514, long: -73.583266 },
            address: '4274 St Laurent Blvd',
            imageLocation: 'http://localhost:4000/images/RamenYa.jpg'
        },
        {
            name: 'Ichi Sushi',
            description: 'Extensive menu of creative sushi rolls (some in soy-paper wraps) & miso soups to take away.',
            coordinates: { lat: 45.520494, long: -73.586166 },
            address: '23 Mont-Royal Ave E',
            imageLocation: 'http://localhost:4000/images/IchiSushi.jpeg'
        },
        {
            name: 'Noren',
            description: 'Cozy and casual Japanese restaurant with vegetarian options.',
            coordinates: { lat: 45.517157, long: -73.582692},
            address: '77 Rachel St W',
            imageLocation: 'http://localhost:4000/images/Noren.jpg'
        },
        {
            name: 'Chez Mein',
            description: 'A Montreal classic. Best 2$ you will ever spend!',
            coordinates: { lat: 45.515057, long: -73.575469},
            address: '3766 St Laurent Blvd',
            imageLocation: 'http://localhost:4000/images/ChezMein.jpg'
             
        }
    ]
}

let latinMex = {
    expensive: [
        {
            name: 'Casa Minhota',
            description: 'Traditional Portuguese, select wine list & festive ambience',
            coordinates: { lat: 45.516516, long: -73.578135 },
            address: '3959 St Laurent Blvd',
            imageLocation: 'http://localhost:4000/images/CasaMinhota.jpg'

        },
        {
            name: 'Resto La Sala Rosa',
            description: 'Eatery serving tapas and paellas, entertainment upstairs on select nights',
            coordinates: { lat: 45.521849, long: -73.590429 },
            address: '4848 St Laurent Blvd',
            imageLocation: 'http://localhost:4000/images/SalaRosa.jpg'

        },
        {
            name: 'Los Planes Gourmet',
            description: 'late-night Salvadoran food, cosy environment',
            coordinates: { lat: 45.521407, long: -73.576809},
            address: '4115 St Denis St',
            imageLocation: 'http://localhost:4000/images/LosPlanesGourmet.jpg'
        },
        {
            name: 'Pintxo',
            description: 'Chef Alonso Ortiz’s inventive Basque bites & tasting menus in an art-filled room with fine wines.',
            coordinates: { lat: 45.523257, long: -73.583348},
            address: '330 Mont-Royal Ave E',
            imageLocation: 'http://localhost:4000/images/Pinxto.jpg'
        }

    ],
    cheap: [
        {
            name: 'T&T Tacos et Tortas',
            description: 'Mexican food & Cocktail/Wine Bar',
            coordinates: { lat: 45.517468, long: -73.582390 },
            address: '51 Rachel St W',
            imageLocation: 'http://localhost:4000/images/T&T.jpg'

        },
        {
            name: 'Rotisserie Romados',
            description: 'Montreals favourite Portuguese grilled chicken and sandwiches.',
            coordinates: { lat: 45.519285, long: -73.580757 },
            address: '115 Rue Rachel E',
            imageLocation: 'http://localhost:4000/images/Romados.jpg'

        },
        {
            name: 'Arepera',        
            description: 'Casual Venezuelan fare for vegans, meat eaters & gluten-free diners in a brightly painted space.',
            coordinates: { lat: 45.514827, long: -73.571977},
            address: '73 Rue Prince Arthur E',
            imageLocation: 'http://localhost:4000/images/Arepera.jpg'
        },
        {
            name: 'Sabor Latino 2',
            description: 'Specialty supermarket & eatery offering casual Latin American dishes like tacos, fajitas & arepas.',
            coordinates: { lat: 45.519448, long: -73.584607},
            address: '4387 St Laurent Blvd',
            imageLocation: 'http://localhost:4000/images/SaborLatino.jpg'

        }

    ]
}

module.exports = {
    asianExpensive: asian.expensive,
    asianCheap: asian.cheap,
    latinMexExpensive: latinMex.expensive,
    latinMexCheap: latinMex.cheap
}


