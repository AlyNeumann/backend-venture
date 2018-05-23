//resto data stored here

let asian = {
    expensive: [
        {
            name: 'Sushi Momo Vegetalien',
            description: 'Rustic-chic bistro specializing in creative vegan sushi rolls & Japanese entrees.',
            coordinates: { lat: 45.518112, long: -73.569495 },
            address: '3609 St Denis St, Montreal, QC H2X 3L6',
            imageLocation: 'https://venturemtl.club:4000/images/SushiMomo.jpg'
        
        },
        {
            name: 'Mito Sushi',
            description: 'Puisqu’on ne fait rien d’ordinaire, nos Itamae ont revisité les sushis incontournables en leur ajoutant leur touche de créativité ; les subtilités de ces indispensables vous feront craquer.',
            coordinates: { lat: 45.518845, long: -73.587720 },
            address: '101 Avenue du Mont-Royal O, Montréal, QC H2T 2S9',
            imageLocation: 'https://venturemtl.club:4000/images/MitoSushi.jpg'
        },
        {
            name: 'Kinoya Izakaya',
            description: 'A Izakaya, a Japanese pub, combining the traits of a bar and a restaurant, serves drinks and tapas style food that are best  enjoyed by sharing.',
            coordinates: { lat: 45.521963, long: -73.579212},
            address: '4250 St Denis St, Montreal, QC H2J 2K8',
            imageLocation: 'https://venturemtl.club:4000/images/KinoyaIzakaya.jpg'

        },
        {
            name: 'Big in Japan',
            description: 'Casual Japanese brasserie, serving up hearty comfort fare, sandwiches & desserts, plus beer & sake.',
            coordinates: { lat: 45.515097, long: -73.574830},
            address: '3723 Boul St-Laurent, Montréal, QC H2X 2V7',
            imageLocation: 'https://venturemtl.club:4000/images/BigInJapan.jpg'
        }
    ]
    ,
    cheap: [
        {
            name: 'Ramen Ya',
            description: 'Japanese soups, noodle dishes & sake in a casual setting with wooden touches & a wraparound counter.',
            coordinates: { lat: 45.518514, long: -73.583266 },
            address: '4274 Boul St-Laurent, Montréal, QC H2W 1Z3',
            imageLocation: 'https://venturemtl.club:4000/images/RamenYa.jpg'
        },
        {
            name: 'Ichi Sushi',
            description: 'Extensive menu of creative sushi rolls (some in soy-paper wraps) & miso soups to take away.',
            coordinates: { lat: 45.520494, long: -73.586166 },
            address: '23 Avenue du Mont-Royal E, Montréal, QC',
            imageLocation: 'https://venturemtl.club:4000/images/IchiSushi.jpeg'
        },
        {
            name: 'Noren',
            description: 'Cozy and casual Japanese restaurant with vegetarian options.',
            coordinates: { lat: 45.517157, long: -73.582692},
            address: '77 Rue Rachel O, Montréal, QC H2W 1G2',
            imageLocation: 'https://venturemtl.club:4000/images/Noren.jpg'
        },
        {
            name: 'Chez Mein',
            description: 'A Montreal classic. Best 2$ you will ever spend!',
            coordinates: { lat: 45.515057, long: -73.575469},
            address: '3766 Boul St-Laurent, Montréal, QC H2W 1X6',
            imageLocation: 'https://venturemtl.club:4000/images/ChezMein.jpg'
             
        }
    ]
}

let latinMex = {
    expensive: [
        {
            name: 'Casa Minhota',
            description: 'Traditional Portuguese, select wine list & festive ambience',
            coordinates: { lat: 45.516516, long: -73.578135 },
            address: '3959 Boul St-Laurent, Montréal, QC H2W 1Y4',
            imageLocation: 'https://venturemtl.club:4000/images/CasaMinhota.jpg'

        },
        {
            name: 'Resto La Sala Rosa',
            description: 'Eatery serving tapas and paellas, entertainment upstairs on select nights',
            coordinates: { lat: 45.521849, long: -73.590429 },
            address: '4848 Boul St-Laurent, Montréal, QC H2T 1R5',
            imageLocation: 'https://venturemtl.club:4000/images/SalaRosa.jpg'

        },
        {
            name: 'Los Planes Gourmet',
            description: 'late-night Salvadoran food, cosy environment',
            coordinates: { lat: 45.521407, long: -73.576809},
            address: '4115 St Denis St, Montreal, QC H2W 2M7',
            imageLocation: 'https://venturemtl.club:4000/images/LosPlanesGourmet.jpg'
        },
        {
            name: 'Pintxo',
            description: 'Chef Alonso Ortiz’s inventive Basque bites & tasting menus in an art-filled room with fine wines.',
            coordinates: { lat: 45.523257, long: -73.583348},
            address: '330 Avenue du Mont-Royal E, Montréal, QC H2T 1P8',
            imageLocation: 'https://venturemtl.club:4000/images/Pinxto.jpg'
        }

    ],
    cheap: [
        {
            name: 'T&T Tacos et Tortas',
            description: 'Mexican food & Cocktail/Wine Bar',
            coordinates: { lat: 45.517468, long: -73.582390 },
            address: '51 Rue Rachel O, Montréal, QC H2W 1G2',
            imageLocation: 'https://venturemtl.club:4000/images/T&T.jpg'

        },
        {
            name: 'Rotisserie Romados',
            description: 'Montreals favourite Portuguese grilled chicken and sandwiches.',
            coordinates: { lat: 45.519285, long: -73.580757 },
            address: '115 Rue Rachel E, Montréal, QC H2W 1C8',
            imageLocation: 'https://venturemtl.club:4000/images/Romados.jpg'

        },
        {
            name: 'Arepera',        
            description: 'Casual Venezuelan fare for vegans, meat eaters & gluten-free diners in a brightly painted space.',
            coordinates: { lat: 45.514827, long: -73.571977},
            address: '73 Rue Prince Arthur E, Montréal, QC H2X 2Y6',
            imageLocation: 'https://venturemtl.club:4000/images/Arepera.jpg'
        },
        {
            name: 'Sabor Latino 2',
            description: 'Specialty supermarket & eatery offering casual Latin American dishes like tacos, fajitas & arepas.',
            coordinates: { lat: 45.519448, long: -73.584607},
            address: '4387 Boul St-Laurent, Montréal, QC H2W 1Z8',
            imageLocation: 'https://venturemtl.club:4000/images/SaborLatino.jpg'

        }

    ]
}

let european = {
    expensive:[
        {
            name: 'Au Pied de Cochon',
            description: 'Chef Martin Picard’s hearty Québécois fare, starring foie gras & pork, served in a lively space.',
            coordinates: { lat: 45.522136, long: -73.574369},
            address: '536 Avenue Duluth E, Montréal, QC H2L 1A9',
            imageLocation: 'https://venturemtl.club:4000/images/AuPiedDeCochon.jpg'

        },
        {
            name: 'L\'Académie',
            description: 'Casual, BYOB chain spot offering Italian & French dishes, with mussel specials & a kids\' menu.',
            coordinates: { lat: 45.520925, long: -73.575894},
            address: '4051 St Denis St, Montreal, QC H2W 2M7',
            imageLocation: 'https://venturemtl.club:4000/images/Lacademie.jpg'
        },
        {
            name: 'La Prunelle',
            description:  'Seasonal & eclectic French fare in a BYOB venue with tasting menus, overlooking cobblestone streets.',
            coordinates: { lat: 45.520087, long: -73.576625},
            address:  '327 Avenue Duluth E, Montréal, QC H2W 1J1',
            imageLocation: 'https://venturemtl.club:4000/images/Prunelle.jpg'
        },
        {
            name: 'Les Deux Gamins',
            description: 'Bi-level, Parisian-style bistro offering updated French fare in a casual atmosphere.',
            coordinates: { lat: 45.515472, long: -73.570962},
            address: '170 Rue Prince Arthur E, Montréal, QC H2X 3B7',
            imageLocation: 'https://venturemtl.club:4000/images/LesDeuxGamins.jpg'

        }
    ],
    cheap:[
        {
            name: 'La Banquise',
            description: 'All-night diner for Québécois grub & local microbrews, with many poutine options & hefty breakfasts.',    
            coordinates: { lat: 45.525304, long: -73.574703},
            address: '994 Rue Rachel E, Montréal, QC H2J 2J3',
            imageLocation: 'https://venturemtl.club:4000/images/Banquis.jpg'
        },
        {
            name: 'Pitarifique',
            description: 'Delicious pitas, fries, and burgers win a casual setting.',
            coordinates: { lat: 45.517782, long: -73.581721},
            address: '4160 Boulevard Saint-Laurent, Montréal, QC H2W 1Y8',
            imageLocation: 'https://venturemtl.club:4000/images/Pitarifique.jpg'
              
        },
        {
            name: 'Dirty Pizza',
            description: 'Casual spot for poutines & hot dogs with many toppings, including pesto, bacon & jalapeño sauce.',
            coordinates: { lat: 45.520516, long: -73.586150},
            address: '25 Mont-Royal Ave E, Montreal, QC H2T 1N4',
            imageLocation: 'https://venturemtl.club:4000/images/DirtyPizza.jpg'
        },
        {
            name: 'Amelia’s',
            description: 'Classic & gourmet pizzas, along with hearty sandwiches & pasta, served in a comfy brick-walled cafe.',
            coordinates: { lat: 45.510741, long: -73.572666},
            address:'201 Milton St, Montreal, QC H2X 1V5',
            imageLocation: 'https://venturemtl.club:4000/images/Amelias.jpg'

        }


    ]
}

module.exports = {
    asianExpensive: asian.expensive,
    asianCheap: asian.cheap,
    latinMexExpensive: latinMex.expensive,
    latinMexCheap: latinMex.cheap,
    europeanExpensive: european.expensive,
    europeanCheap: european.cheap
}


