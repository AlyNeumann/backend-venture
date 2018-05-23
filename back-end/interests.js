//interests data stored here

let historical = [
    {
        name: 'Leonard Cohen\'s home',
        description: 'The legendary singer/poets Montreal home',
        coordinates: { lat: 45.519025, long: -73.583421 },
        address: '6 Rue Vallières, Montréal, QC H2W 1C2',
        imageLocation: 'https://venturemtl.club/images/LeonardHome.jpg'
    },
    {
        name: 'Mordecai Richler Gazebo',
        description: 'The legendary Montreal author\'s controversial tribute Gazebo',
        coordinates: { lat: 45.513795, long: -73.585420 },
        address: '4060 Av du Parc, Montréal, QC H2W 1S8',
        imageLocation: 'https://venturemtl.club/images/mordecai-richler.JPG'
    },
    {
        name: 'Ancienne École des beaux-arts de Montréal',
        description: 'Labyrinthic, dilapidated space full of history.',
        coordinates: { lat: 45.511337, long: -73.570998 },
        address: '3450 Rue Saint-Urbain, Montréal, QC H2X 2N5',
        imageLocation: 'https://venturemtl.club/images/AncienneEcole.jpg'
    },
    {
        name: 'Paroisse Saint-Jean-Baptiste',
        description: 'Surprisingly beautiful church with a world class organ',
        coordinates: { lat: 45.521213, long: -73.579856 },
        address: '4237 Henri Julien Ave, Montréal, QC H2W 1E5',
        imageLocation: 'https://venturemtl.club/images/ParoisseSaintJeanBaptiste.JPG'
    },
    {
        name: "Musée de l'Hotel Dieu de Montréal",
        description: 'The Musée des Hospitalières de l’Hôtel-Dieu de Montréal houses unique heritage that presents Montreal’s history from its very earliest days',
        coordinates: { lat: 45.513319, long: -73.576901 },
        address: '201 Avenue des Pins, Montréal, QC',
        imageLocation: 'https://venturemtl.club/images/HotelDieu.JPG'
    },
    {
        name: 'Percival Molson Memorial Stadium',
        description: '24,000-seat football stadium that hosts Alouettes & McGill Redmen games, plus a running track.',
        coordinates: { lat: 45.509493, long: -73.579775 },
        address: '475 Avenue des Pins, Montréal, QC H2W 1S4',
        imageLocation: 'https://venturemtl.club/images/PercivalStadium.jpg'
    },
    {
        name: 'Monument to Sir George-Étienne Cartier',
        description: 'The Sir George Etienne Cartier Monument is a monument in Mount Royal Park to George-Étienne Cartier by sculptor George William Hill (1862–1934).',
        coordinates: { lat: 45.513690, long: -73.582432 },
        address: 'Park Ave, Montreal, QC H2W 1S8',
        imageLocation: 'https://venturemtl.club/images/SirGeorgeMonument.jpg'
    },

]

let parks = [
    {
        name: 'Jeanne-Mance Parc',
        description: 'Climb the famous Mont Royal mountain, or just enjoy the view.',
        coordinates: { lat: 45.515245, long: -73.583023 },
        address: 'Av du Parc & Avenue du Mont-Royal',
        imageLocation: 'https://venturemtl.club/images/Jeanne_mance_park.jpg'
    },
    {
        name: 'Sir Wilfrid-Laurier Parc',
        description: 'Roomy park featuring an outdoor swimming pool, playgrounds & ballfields, and free WIFI',
        coordinates: { lat: 45.530053, long: -73.586840 },
        address: 'Mentana St & Avenue Laurier E',
        imageLocation: 'https://venturemtl.club/images/Parc_Laurier.JPG'
    },
    {
        name: 'Parc du Portugal',
        description: 'Small park with beautiful gazebo',
        coordinates: { lat: 45.519062, long: -73.583885 },
        address: 'Marie-Anne St E & St Laurent Blvd',
        imageLocation: 'https://venturemtl.club/images/ParcDuPortugal.jpg'
    },
    {
        name: 'Parc des Amériques',
        description: 'Small park, hosting site of the famous Montreal Fringe Festival',
        coordinates: { lat: 45.518372, long: -73.581798 },
        address: 'Rue Rachel E & St Laurent Blvd',
        imageLocation: 'https://venturemtl.club/images/ParcDesAmeriques.jpg'
    },
    {
        name: 'Parc Saint-Michel',
        description: "Cute lil' place, quaint for a jaunt",
        coordinates: { lat: 45.524327, long: -73.591727 },
        address: '149 Laurier Ave, H2T 1E7',
        imageLocation: 'https://venturemtl.club/images/ParcSaintMichel.jpg'
    },
    {
        name: 'Square Saint Louis Montreal',
        description: 'Lovely parc of the square',
        coordinates: { lat: 45.516789, long: -73.569351 },
        address: '312 Rue du Square Saint Louis, QC H2X 1A5',
        imageLocation: 'https://venturemtl.club/images/SquareSaintLouis.jpg'
    },
    {
        name: 'Park la Fontaine',
        description: 'Trails, fields & ponds for paddleboating & skating, with both English- & French-style landscaping.',
        coordinates: { lat: 45.518926, long: -73.566867 },
        address: '1619 QC-138, Montréal, QC H2L 3A7',
        imageLocation: 'https://venturemtl.club/images/ParkLaFontaine.JPG'
    },
    {
        name: 'Parc des Carrières',
        description: 'Small park, lovely parc, for a lovely time',
        coordinates: { lat: 45.533932, long: -73.593468 },
        address: 'Parc des Carrières, Montréal, QC H2S 2G1',
        imageLocation: 'https://venturemtl.club/images/parcDesCarrieres.jpg'
    },

]

let museums = [
    {
        name: 'les Fusiliers Mont-Royal Museum',
        description: 'Le régiment des Fusiliers Mont-Royal, tel qu’on le connaît aujourd’hui, constitue le plus ancien bataillon francophone de milice à avoir survécu jusqu’ici.',
        coordinates: { lat: 45.518012, long: -73.572168 },
        address: '3721 Avenue Henri-Julien, Montréal, QC H2X 3H4',
        imageLocation: 'https://venturemtl.club/images/Fusiliers_Mont-Royal.jpg'
    },
    {
        name: 'Jacques Rousseau House',
        description: 'House, of Jean-Jacques Rousseau',
        coordinates: { lat: 45.520181, long: -73.583276 },
        address: '4333 Coloniale Ave, Montreal, QC H2W 2C5',
        imageLocation: 'https://venturemtl.club/images/JacquesRousseau.jpg'
    },
    {
        name: 'Rone Face Mural',
        description: 'A mural of a Face Artist Rone',
        coordinates: { lat: 45.516604, long: -73.576828 },
        address: '3897 Rue Saint-Dominique, Montréal, QC H2W 2A2',
        imageLocation: 'https://venturemtl.club/images/Rone.jpeg'
    },
    {
        name: 'Montreal Jewish Museum',
        description: 'The Museum of Jewish Montreal (MJM) is a not-for-profit organization that collects, maps, and shares the history and experiences of the Montreal Jewish community online and through walking tours, exhibits, and other public programming.',
        coordinates: { lat: 45.516949, long: -73.579716 },
        address: '4040 Boul St-Laurent R01, Montréal, QC H2W 1Y8',
        imageLocation: 'https://venturemtl.club/images/JewishMuseum.jpeg'
    },
    {
        name: "L'Artothèque",
        description: 'A groovy art place for groovy peeps',
        coordinates: { lat: 45.533133, long: -73.595110 },
        address: '5720 St Andre St, Montreal, QC H2S 2K1',
        imageLocation: 'https://venturemtl.club/images/larthotheque.jpg'
    },
    {
        name: 'Musée des pompiers de Montréal',
        description: 'A museum to honor the good fight',
        coordinates: { lat: 45.523110, long: -73.593343 },
        address: '5100 Boul St-Laurent, Montréal, QC H2T 1R8',
        imageLocation: 'https://venturemtl.club/images/MuseePompiers.JPG'
    },
    {
        name: 'Écomusée du fier monde',
        description: "Community museum in a 1920s bathhouse, showcasing the area's working-class roots & labour history.",
        coordinates: { lat: 45.520179, long: -73.563753 },
        address: '2050 Rue Amherst, Montréal, QC H2L 3L8',
        imageLocation: 'https://venturemtl.club/images/Ecomusee.jpg'
    },
    {
        name: 'Redpath Museum',
        description: 'Natural history & world cultures galleries showcasing dinosaur skeletons, extinct species & mummies.',
        coordinates: { lat: 45.504468, long: -73.577382 },
        address: '859 Rue Sherbrooke O, Montréal, QC H3A 0C4',
        imageLocation: 'https://venturemtl.club/images/Redpath.JPG'
    },

]


let bars = {
    expensive: [
        {
            name: 'The Wiggle Room',
            description: 'Voted best cocktails in Montreal, nightly burlesque shows',
            coordinates: { lat: 45.516096, long: -73.577712 },
            address: '3874 Boul St-Laurent, Montréal, QC H2W 1Y2',
            imageLocation: 'https://venturemtl.club/images/WiggleRoom.jpg'
        },
        {
            name: 'Bootlegger',
            description: 'Fancy cocktails, live music, 1920s vibes',
            coordinates: { lat: 45.513194, long: -73.570679 },
            address: '3956 Boul St-Laurent, Montréal, QC H2W 1Y3',
            imageLocation: 'https://venturemtl.club/images/Bootlegger.jpg'
        },
        {
            name: 'Tokyo Bar',
            description: 'This splashy, long-running nightspot has DJs, dancing, & cocktails featured on a hip terrace',
            coordinates: { lat: 45.515077, long: -73.574579 },
            address: '3709 Boul St-Laurent, Montréal, QC H2X 2V7',
            imageLocation: 'https://venturemtl.club/images/TokyoBar.jpg'
        },
        {
            name: 'Buvette Chez Simone',
            description: 'Convivial wine bar with rotating list of vintages & tapas in urban digs with moody lighting',
            coordinates: { lat: 45.518822, long: -73.593503 },
            address: '4869 Av du Parc, Montréal, QC H2V 4E7',
            imageLocation: 'https://venturemtl.club/images/Buvette-Chez-Simone.jpg'
        },
        {
            name: 'Mayfair Cocktail Bar',
            description: 'Posh lounge with a Victorian-era vibe featuring fancy drinks & teas, plus oyster & champagne events.',
            coordinates: { lat: 45.522533, long: -73.577705},
            address: '451 Rue Rachel E, Montréal, QC H2J 2H1',
            imageLocation: 'https://venturemtl.club/images/Mayfair.jpg'

        },
        {
            name: 'Diese Onze Live Jazz Bar',
            description: 'In a snug, romantic basement, this jazz club boasts live music nightly, plus a bistro menu.',
            coordinates: { lat: 45.521407, long: -73.576809},
            address: '4115 St Denis St, Montreal, QC H2W 2M7',
            imageLocation: 'https://venturemtl.club/images/DieseOnze.jpg'
        }
    ],
    cheap: [
        {
            name: 'La P’tite grenouille',
            description: 'Festive late-night bar offering poutine, burgers & other hearty pub fare, live bands & DJs.',
            coordinates: { lat: 45.512884, long: -73.569970 },
            address: '3435 Boul St-Laurent, Montréal, QC H2X 2T6',
            imageLocation: 'https://venturemtl.club/images/Grenouille.jpg'
        },
        {
            name: 'Blizzarts',
            description: 'Bar with themed DJ nights (ranging from reggae to rap), plus candlelit booths & dance floors.',
            coordinates: { lat: 45.516634, long: -73.578900 },
            address: '3956 Boul St-Laurent, Montréal, QC H2W 1Y3',
            imageLocation: 'https://venturemtl.club/images/Blizzarts.jpg'
        },
        {
            name: 'Fitzroy',
            description: "15 tables de billard et ses 3 tables de baby-foot! Le Fitzroy, c'est le rendez-vous des joueurs de billard et le rassembleur des amateurs d’événements sportifs de tous genres",
            coordinates: { lat: 45.525248, long: -73.581954 },
            address: '551 Avenue du Mont-Royal E, Montréal, QC H2J 1W5',
            imageLocation: 'https://venturemtl.club/images/Fitzroy.jpg'
        },
        {
            name: 'McKibbins irish pub',
            description: 'Great service, awesome food, great prices and good selection of beer.',
            coordinates: { lat: 45.513410, long: -73.571244 },
            address: '3515 Boul St-Laurent, Montréal, QC H2X 2T6',
            imageLocation: 'https://venturemtl.club/images/McKibbins.jpg'
        },
        {
            name: 'Auprès de ma Blonde',
            description: 'Late-night food, cozy, casual!',
            coordinates: { lat: 45.519798 , long: -73.573130},
            address: '3845 Rue Saint-Denis, Montréal, QC H2W 2M4',
            imageLocation: 'https://venturemtl.club/images/AupresdemaBlonde.jpg'
        },
        {
            name: 'La Salon Daomé',
            description: 'Laid-back nightclub with a roster of international DJs spinning electronic music, plus theme nights.',
            coordinates: { lat: 45.521538, long: -73.585241},
            address: '141 Avenue du Mont-Royal E, Montréal, QC',
            imageLocation: 'https://venturemtl.club/images/SalonDaome.jpg'

        },
        {
            name: 'Quai Des Brumes',
            description: 'Quaint institution for local French literary events, blues & alternative bands & art shows.',
            coordinates: { lat: 45.523949, long: -73.582529},
            address: '4481 Rue Saint-Denis, Montréal, QC H2J 2L2',
            imageLocation: 'https://venturemtl.club/images/QuaiDesBrumes.jpg'
              
        },
        {
            name: 'Le Réservoir',
            description: 'Popular brewpub providing draft microbrews, global tapas with vegetarian options & a rooftop patio.',
            coordinates: { lat: 45.517281, long: -73.579346},       
            address: '9 Avenue Duluth E, Montréal, QC H2W 1Y7',
            imageLocation: 'https://venturemtl.club/images/Reservoir.jpg'
        }

    ]
}

module.exports = {
    museums: museums,
    parks: parks,
    barsExpensive: bars.expensive,
    barsCheap: bars.cheap,
    historical: historical
}



