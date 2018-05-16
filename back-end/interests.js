//interests data stored here

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
    }

]

let parks = [
    {
        name: 'Jeanne-Mance Park',
        description: 'Climb the famous Mont Royal mountain, or just enjoy the view.',
        coordinates: { lat: 45.515245, long: -73.583023},
        address: 'Av du Parc & Avenue du Mont-Royal'
    },
    {
        name: 'Sir Wilfrid-Laurier Park',
        description: 'Roomy park featuring an outdoor winning pool, playgrounds & ballfields, and free WIFI',
        coordinates: { lat: 45.530053, long: -73.586840},
        address: 'Mentana St & Avenue Laurier E'
    },
    {
        name: 'Parc du Portugal',
        description: 'Small park with beautiful gazebo',
        coordinates: { lat: 45.519062, long: -73.583885},
        address: 'Marie-Anne St E & St Laurent Blvd'
    },
    {
        name: 'Parc des Amériques',
        description: 'Small park, hosting site of the famous Montreal Fringe Festival',
        coordinates: { lat: 45.518372, long: -73.581798},
        address: 'Rue Rachel E & St Laurent Blvd'
    }

]

let bars = {
    expensive: [
         {
            name: 'The Wiggle Room',
            description: 'Voted best cocktails in Montreal, nightly burlesque shows',
            coordinates: { lat: 45.516096, long: -73.577712},
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
            coordinates: { lat: 45.515077, long: -73.574579},
            address: '3709 St Laurent Blvd'
        },
        {
            name: 'Buvette Chez Simone',
            description: 'Convivial wine bar with rotating list of vintages & tapas in urban digs with moody lighting',
            coordinates: { lat: 45.518822, long: -73.593503},
            address: '4869 Park Ave'
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
        }

    ]
}

let historical = [
    {
        name: 'Leonard Cohens home',
        description: 'The legendary singer/poets Montreal home',
        coordinates: { lat: 45.519025, long: -73.583421},
        address: '6 Rue Vallières'
    },
    {
        name: 'Mordecai Richler Gazebo',
        description: 'The legendary Montreal authors tribute Gazebo',
        coordinates: { lat: 45.513795, long: -73.585420},
        address: '4060 Park Ave'
    },
    {
        name: 'Ancienne École des beaux-arts de Montréal',
        description: 'Labyrinthic, dilapidated space full of history.',
        coordinates: { lat: 45.511337, long: -73.570998},
        address: '3450 St Urbain St'
    }

]

module.exports = {
    museums: museums, 
    parks: parks,
    barsExpensive: bars.expensive,
    barsCheap: bars.cheap,
    historical: historical
}

//const interests = require('./interests.js');

