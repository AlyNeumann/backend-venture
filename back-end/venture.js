const interests = require('./interests.js');
const restaurants = require('./restaurants.js');

//this will be for the functions
let userRestaurants = {}
let userInterests = {}
let sessionId = genSessionId();

//user session Id
function genSessionId() {
    let sessionId = Math.floor(Math.random() * 10000000)
}

//joins sessionId to user restaurant preferences 
function sessionIdRestos({ latinMexCheap, latinMexExpensive, asianCheap, asianExpensive}) {
    userRestaurants[sessionId] = {
        latinMexCheap,
        latinMexExpensive,
        asianCheap,
        asianExpensive
    }
    return userRestaurants[sessionId]

}

//joins sessionId to user interest preferences //returns
function sessionIdInterests({ barsExpensive, barsCheap, museums, parks, historical }) {
    userInterests[sessionId] = {
        barsExpensive,
        barsCheap,
        museums,
        parks,
        historical
    }
    return userInterests[sessionId]

}



//will return only the chosen interests (based on value of true)
function getInterests(userPrefs) {

    let objectKeys = Object.keys(userPrefs)
    return objectKeys.filter((key) => {
        return userPrefs[key]
    })
}

function getSubsetInterest(interests) {
    let currentInterest = [];
    if(interests.museums) {
        currentInterest.push(museums);
    }
    if(interests.parks) {
        currentInterest.push(parks);
    }
    if(interests.barsExpensive) {
        currentInterest.push(barsExpensive);
    }
    if(interests.barsCheap) {
        currentInterest.push(barsCheap);
    }
    if(interests.historical) {
        currentInterest.push(historical)
    }
    return currentInterest;
}

function getSubsetResto() {
    let currentResto = []
    if(restaurants.asianExpensive) {
        currentResto.push(asianExpensive);
    }
    if(restaurants.asianCheap) {
        currentResto.push(asianCheap);
    }
    if(restaurants.latinMexExpensive) {
        currentResto.push(latinMexExpensive);
    }
    if(restaurants.latinMexCheap) {
        currentResto.push(latinMexCheap)
    }
    return currentResto;
}

//function to generate interest options (6 total)
//make temporary map that stores the options sent so the other functions don't use it later... no repeats!
function interestOptions() {
    //push options to numbers map to avoid repeats once picked
    
    let numbersMap = {}
    let randomNumber = Math.floor(Math.random() * interestsArray.length);
    let ret = []

    for (let i = 0; i >= 6; i++) {
        while (numbersMap[randomNumber]) randomNumber = Math.floor(Math.random() * interestsArray.length);
        numbersMap[randomNumber] = true;
        ret.push(interestsArray[randomNumber])
    }
    return ret;
}

//function to generate restaurant options (2 total)
function restoOptions() {
    let restosArray = getInterests(userRestaurants)
    let numbersMap = {}
    let randomNumber = Math.floor(Math.random() * restosArray.length);
    let ret = []

    for (let i = 0; i >= 2; i++) {
        while (numbersMap[randomNumber]) randomNumber = Math.floor(Math.random() * restosArray.length);
        numbersMap[randomNumber] = true;
        ret.push(restosArray[randomNumber])
    }
    return ret;
}


module.exports = {
    genSessionId,
    interestOptions,
    restoOptions,
    sessionIdRestos,
    sessionIdInterests,
    getInterests,
    getSubsetInterest
}
