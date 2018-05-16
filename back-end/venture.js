const interests = require('./interests');
const restaurants = require('./restaurants');

//this will be for the functions
let userRestaurants = {}
let userInterests = {}
let sessionId = genSessionId();

//user session Id
function genSessionId() {
    let sessionId = Math.floor(Math.random() * 10000000)
}

//joins sessionId to user restaurant preferences 
function sessionIdRestos( latinMexCheap, latinMexExpensive, asianCheap, asianExpensive) {
    userRestaurants[sessionId] = {
        latinMexCheap,
        latinMexExpensive,
        asianCheap,
        asianExpensive
    }
    return userRestaurants[sessionId]

}

//joins sessionId to user interest preferences //returns
function sessionIdInterests(barsExpensive, barsCheap, museums, parks, historical) {
    userInterests[sessionId] = {
        barsExpensive,
        barsCheap,
        museums,
        parks,
        historical
    }
    return userInterests[sessionId]

}

//will return an array of only the chosen interests (based on value of true)
function getInterests(x) {

    let objectKeys = Object.keys(x)
    return objectKeys.filter((key) => {
        return x[key]
    })
}
//the return of the above function needs to interact with the one below....maybe on line 91?
//goes through data base and creates array based on the return of getInterests
//what goes in as a parameter? where is this called?

function getSubsetInterest(interestsArr) {
    return interestsArr.map(interest => interests[interest])
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
function interestOptions(interestChoices) {
    //how do we get result of getInterests function into the getSubsetInterest
    let interestsArray = getSubsetInterest(interestChoices)
    let numbersMap = {}
    let randomNumber = Math.floor(Math.random() * interestsArray.length);
    let ret = []
    if(interestsArray.length < 6) return interestsArray;
    for (let i = 0; i < 6; i++) {
        while (numbersMap[randomNumber]) randomNumber = Math.floor(Math.random() * interestsArray.length);
        numbersMap[randomNumber] = true;
        ret.push(interestsArray[randomNumber])
    }
    return ret;
}

//function to generate restaurant options (2 total)
function restoOptions() {
    let restosArray = getSubsetResto()
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
    getSubsetInterest,
    getSubsetResto
}
