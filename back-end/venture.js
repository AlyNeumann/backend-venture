const interests = require('./interests');
const restaurants = require('./restaurants');

//this will be for the functions
let userRestaurants = {}
let userInterests = {}
let currentUserInterestsGenerated = {}
let currentUserRestosGenerated = {}


//user session Id
function genSessionId() {
    let sessionId = Math.floor(Math.random() * 10000000)
    return sessionId
}

//joins sessionId to user restaurant preferences 
function sessionIdRestos( latinMexCheap, latinMexExpensive, asianCheap, asianExpensive, sessionId) {
    userRestaurants[sessionId] = {
        latinMexCheap,
        latinMexExpensive,
        asianCheap,
        asianExpensive
    }
    return userRestaurants[sessionId]

}

//joins sessionId to user interest preferences //returns
function sessionIdInterests(barsExpensive, barsCheap, museums, parks, historical, sessionId) {
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
    let newArr = [];
    interestsArr.forEach(interest => {
        newArr = newArr.concat(interests[interest])
    });
    return newArr;
}

//TODO: look at above example
function getSubsetResto(restosArr) {
    return restosArr.map(restos => restaurants[restos])
   
}

//function to generate interest options (6 total)
function interestOptions(interestChoices, sessionId) {
    let interestsArray = getSubsetInterest(interestChoices)
    console.log(interestsArray)
    let numbersMap = {}
    let randomNumber = Math.floor(Math.random() * interestsArray.length);
    let ret = []
    if(interestsArray.length < 6) return interestsArray;
    for (let i = 0; i < 6; i++) {
        while (numbersMap[randomNumber]) randomNumber = Math.floor(Math.random() * interestsArray.length);
        numbersMap[randomNumber] = true;
        ret.push(interestsArray[randomNumber])
    }
    console.log(ret.length)
    return currentUserInterestsGenerated[sessionId] = ret
   
}

//TODO:
//function to generate restaurant options (2 total)
function restoOptions(restoChoices) {
    let restosArray = getSubsetResto(restoChoices)
    console.log(restoChoices)
    let numbersMap = {}
    let randomNumber = Math.floor(Math.random() * restosArray.length);
    let ret = []
    if(restosArray.length < 2) return restosArray;
    for (let i = 0; i < 2; i++) {
        while (numbersMap[randomNumber]) randomNumber = Math.floor(Math.random() * restosArray.length);
        numbersMap[randomNumber] = true;
        ret.push(restosArray[randomNumber])
    }
    return currentUserRestosGenerated[sessionId] = ret
   
}

//get first two interest options to send to front
function firstTwoInterests(sessionId) {
    console.log(currentUserInterestsGenerated);
    let x = currentUserInterestsGenerated[sessionId]
    let firstChoices = x.slice(0,2)
    return firstChoices;
}
//get second two interest options to send to front
function secondTwoInterests(sessionId) {
    let x = currentUserInterestsGenerated[sessionId]
    let secondChoices = x.slice(2,4)
    return secondChoices;
}
//TODO:
//get third two interests to send to front (fourth activity, last one after restos)
function thirdTwoInterests(sessionId) {
    let x = currentUserInterestsGenerated[sessionId]
    let thirdChoices = x.slice(4,6)
    return thirdChoices;
}


module.exports = {
    genSessionId,
    interestOptions,
    restoOptions,
    sessionIdRestos,
    sessionIdInterests,
    getInterests,
    getSubsetInterest,
    getSubsetResto,
    firstTwoInterests,
    secondTwoInterests,
    thirdTwoInterests
}



