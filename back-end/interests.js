//interests data stored here

let historical = [
    {
        name: 'Leonard Cohens home',
        description: 'The legendary singer/poets Montreal home',
        coordinates: { lat: 45.519025, long: -73.583421 },
        address: '6 Rue Vallières'
    },
    {
        name: 'Mordecai Richler Gazebo',
        description: 'The legendary Montreal authors tribute Gazebo',
        coordinates: { lat: 45.513795, long: -73.585420 },
        address: '4060 Park Ave'
    },
    {
        name: 'Ancienne École des beaux-arts de Montréal',
        description: 'Labyrinthic, dilapidated space full of history.',
        coordinates: { lat: 45.511337, long: -73.570998 },
        address: '3450 St Urbain St'
    },
    {
        name: 'Paroisse Saint-Jean-Baptiste',
        description: 'Surprisingly beautiful church with a world class organ',
        coordinates: { lat: 45.521213, long: -73.579856 },
        address: '4237 Henri Julien Ave, QC H2W 1E5'
    },
    {
        name: "Musée  de l'Hotel Dieu de Montréal",
        description: 'The Musée des Hospitalières de l’Hôtel-Dieu de Montréal houses unique heritage that presents Montreal’s history from its very earliest days',
        coordinates: { lat: 45.513319, long: -73.576901 },
        address: '201 Pine Ave W, QC H2W 1R5'
    },
    {
        name: 'Percival Molson Memorial Stadium',
        description: '24,000-seat football stadium that hosts Alouettes & McGill Redmen games, plus a running track.',
        coordinates: { lat: 45.509493, long: -73.579775 },
        address: '475 Pine Ave W, QC H2W 1S4'
    },
    {
        name: 'Monument to Sir George-Étienne Cartier',
        description: 'The Sir George Etienne Cartier Monument is a monument in Mount Royal Park to George-Étienne Cartier by sculptor George William Hill (1862–1934).',
        coordinates: { lat: 45.513690, long: -73.582432 },
        address: 'Park Ave, Montreal, QC H2W 1S8'
    },

]

let parks = [
    {
        name: 'Jeanne-Mance Park',
        description: 'Climb the famous Mont Royal mountain, or just enjoy the view.',
        coordinates: { lat: 45.515245, long: -73.583023 },
        address: 'Av du Parc & Avenue du Mont-Royal'
    },
    {
        name: 'Sir Wilfrid-Laurier Park',
        description: 'Roomy park featuring an outdoor swimming pool, playgrounds & ballfields, and free WIFI',
        coordinates: { lat: 45.530053, long: -73.586840 },
        address: 'Mentana St & Avenue Laurier E'
    },
    {
        name: 'Parc du Portugal',
        description: 'Small park with beautiful gazebo',
        coordinates: { lat: 45.519062, long: -73.583885 },
        address: 'Marie-Anne St E & St Laurent Blvd'
    },
    {
        name: 'Parc des Amériques',
        description: 'Small park, hosting site of the famous Montreal Fringe Festival',
        coordinates: { lat: 45.518372, long: -73.581798 },
        address: 'Rue Rachel E & St Laurent Blvd'
    },
    {
        name: 'Parc Saint-Michel',
        description: "Cute lil' place, quaint for a jaunt",
        coordinates: { lat: 45.524327, long: -73.591727 },
        address: '149 Laurier Ave, H2T 1E7'
    },
    {
        name: 'Square Saint Louis Montreal',
        description: 'Lovely parc of the square',
        coordinates: { lat: 45.516789, long: -73.569351 },
        address: '312 Rue du Square Saint Louis,QC H2X 1A5'
    },
    {
        name: 'Park la Fontaine',
        description: 'Trails, fields & ponds for paddleboating & skating, with both English- & French-style landscaping.',
        coordinates: { lat: 45.518926, long: -73.566867 },
        address: '1619 QC-138, QC H2L 3A7'
    },
    {
        name: 'Parc des Carrières',
        description: 'Small park, lovely parc, for a lovely time',
        coordinates: { lat: 45.533932, long: -73.593468 },
        address: 'Boyer Street, QC H2S 2G1'
    },

]

let museums = [
    {
        name: 'les Fusiliers Mont-Royal Museum',
        description: 'Le régiment des Fusiliers Mont-Royal, tel qu’on le connaît aujourd’hui, constitue le plus ancien bataillon francophone de milice à avoir survécu jusqu’ici.',
        coordinates: { lat: 45.518012, long: -73.572168 },
        address: '3721 Avenue Henri Julien'
    },
    {
        name: 'Jacques Rousseau House',
        description: 'House, of Jean-Jacques Rousseau',
        coordinates: { lat: 45.520181, long: -73.583276 },
        address: '4333 Coloniale Ave'
    },
    {
        name: 'Rone Face Mural',
        description: 'A mural of a Face Artist Rone',
        coordinates: { lat: 45.516604, long: -73.576828 },
        address: '3897 St Dominique St'
    },
    {
        name: 'Montreal Jewish Museum',
        description: 'The Museum of Jewish Montreal (MJM) is a not-for-profit organization that collects, maps, and shares the history and experiences of the Montreal Jewish community online and through walking tours, exhibits, and other public programming.',
        coordinates: { lat: 45.516949, long: -73.579716 },
        address: '4040 St Laurent Blvd R01'
    },
    {
        name: "L'Artothèque",
        description: 'A groovy art place for groovy peeps',
        coordinates: { lat: 45.533133, long: -73.595110 },
        address: '5720 St Andre St,QC H2S 2K2'
    },
    {
        name: 'Musée des pompiers de Montréal',
        description: 'A museum to honor the good fight',
        coordinates: { lat: 45.523110, long: -73.593343 },
        address: '5100 St Laurent Blvd, QC H2T 1R8'
    },
    {
        name: 'Écomusée du fier monde',
        description: "Community museum in a 1920s bathhouse, showcasing the area's working-class roots & labour history.",
        coordinates: { lat: 45.520179, long: -73.563753 },
        address: '2050 Amherst St, QC H2L 3L8'
    },
    {
        name: 'Redpath Museum',
        description: 'Natural history & world cultures galleries showcasing dinosaur skeletons, extinct species & mummies.',
        coordinates: { lat: 45.504468, long: -73.577382 },
        address: '859 Sherbrooke St W, QC H3A 0C4'
    },

]


let bars = {
    expensive: [
        {
            name: 'The Wiggle Room',
            description: 'Voted best cocktails in Montreal, nightly burlesque shows',
            coordinates: { lat: 45.516096, long: -73.577712 },
            address: '3874 St Laurent Blvd'
        },
        {
            name: 'Bootlegger',
            description: 'Fancy cocktails, live music, 1920s vibes',
            coordinates: { lat: 45.513194, long: -73.570679 },
            address: '3956 St Laurent Blvd'
        },
        {
            name: 'Tokyo Bar',
            description: 'This splashy, long-running nightspot has DJs, dancing, & cocktails featured on a hip terrace',
            coordinates: { lat: 45.515077, long: -73.574579 },
            address: '3709 St Laurent Blvd'
        },
        {
            name: 'Buvette Chez Simone',
            description: 'Convivial wine bar with rotating list of vintages & tapas in urban digs with moody lighting',
            coordinates: { lat: 45.518822, long: -73.593503 },
            address: '4869 Park Ave'
        },
        {
            name: 'Mayfair Cocktail Bar',
            description: 'Posh lounge with a Victorian-era vibe featuring fancy drinks & teas, plus oyster & champagne events.',
            coordinates: { lat: 45.522533, long: -73.577705},
            address: '451 Rue Rachel E'

        },
        {
            name: 'Diese Onze Live Jazz Bar',
            description: 'In a snug, romantic basement, this jazz club boasts live music nightly, plus a bistro menu.',
            coordinates: { lat: 45.521407, long: -73.576809},
            address: '4115 St Denis St A'
        }
    ],
    cheap: [
        {
            name: 'La P’tite grenouille',
            description: 'Festive late-night bar offering poutine, burgers & other hearty pub fare, live bands & DJs.',
            coordinates: { lat: 45.512884, long: -73.569970 },
            address: '3435 St Laurent Blvd'
        },
        {
            name: 'Blizzarts',
            description: 'Bar with themed DJ nights (ranging from reggae to rap), plus candlelit booths & dance floors.',
            coordinates: { lat: 45.516634, long: -73.578900 },
            address: '3956 St Laurent Blvd'
        },
        {
            name: 'Fitzroy',
            description: "15 tables de billard et ses 3 tables de baby-foot! Le Fitzroy, c'est le rendez-vous des joueurs de billard et le rassembleur des amateurs d’événements sportifs de tous genres",
            coordinates: { lat: 45.525248, long: -73.581954 },
            address: '551 Mont-Royal Ave E'
        },
        {
            name: 'McKibbins irish pub',
            description: 'Great service, awesome food, great prices and good selection of beer.',
            coordinates: { lat: 45.513410, long: -73.571244 },
            address: '3515 St Laurent Blvd'
        },
        {
            name: 'Auprès de ma Blonde',
            description: 'Late-night food, cozy, casual!',
            coordinates: { lat: 45.519798 , long: -73.573130},
            address: '3845 rue St Denis'
        },
        {
            name: 'La Salon Daomé',
            description: 'Laid-back nightclub with a roster of international DJs spinning electronic music, plus theme nights.',
            coordinates: { lat: 45.521538, long: -73.585241},
            address: '141 Mont-Royal Ave E'

        },
        {
            name: 'Quai Des Brumes',
            description: 'Quaint institution for local French literary events, blues & alternative bands & art shows.',
            coordinates: { lat: 45.523949, long: -73.582529},
            address: '4481 St Denis St'
              
        },
        {
            name: 'Réservoir',
            description: 'Popular brewpub providing draft microbrews, global tapas with vegetarian options & a rooftop patio.',
            coordinates: { lat: 45.517281, long: -73.579346},       
            address: '9 Avenue Duluth E'
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



