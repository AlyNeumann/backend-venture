const interests = require('./interests');
const restaurants = require('./restaurants');

//this will be for the functions
let userRestaurants = {};
let userInterests = {};
let currentUserInterestsGenerated = {};
let currentUserRestosGenerated = {};
let feelingLuckyOptions = {};


//user session Id
function genSessionId() {
    let sessionId = Math.floor(Math.random() * 10000000);
    return sessionId;
}

//joins sessionId to user restaurant preferences 
function sessionIdRestos(latinMexCheap, latinMexExpensive, asianCheap, asianExpensive, sessionId) {
    userRestaurants[sessionId] = {
        latinMexCheap,
        latinMexExpensive,
        asianCheap,
        asianExpensive
    }
    return userRestaurants[sessionId];

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
    return userInterests[sessionId];

}



//will return an array of only the chosen interests (based on value of true)
function getInterests(x) {

    let objectKeys = Object.keys(x)
    return objectKeys.filter((key) => {
        return x[key];
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

function getSubsetResto(restosArr) {
    let newArr = [];
    restosArr.forEach(resto => {
        newArr = newArr.concat(restaurants[resto])
    })
    return newArr;
}


// restaurants and interests in seperately
function feelingLucky(data) {
    newArr = [];
    Object.keys(data).forEach((EL, ID) => {
        data[EL].forEach((el, id) => {
            newArr.push(el)
        })
    })
    return newArr;
}

//function to join lists
function joinLucky() {
    let allRestos = feelingLucky(restaurants);
    let allInterests = feelingLucky(interests);
    let allOptions = allRestos.concat(allInterests);
    return allOptions;

}

//randomize lucky for 8 options
function randomizeLucky(sessionId) {
    let allChoices = joinLucky();
    let numbersMap = {};
    let randomNumber = Math.floor(Math.random() * allChoices.length);
    let ret = [];
    if (allChoices.length < 4) return feelingLuckyOptions[sessionId] = allChoices;
    for (let i = 0; i < 4; i++) {
        while (numbersMap[randomNumber]) randomNumber = Math.floor(Math.random() * allChoices.length);
        numbersMap[randomNumber] = true;
        ret.push(allChoices[randomNumber]);
    }
    return feelingLuckyOptions[sessionId] = ret
}




//function to generate interest options (6 total)
function interestOptions(interestChoices, sessionId) {
    let interestsArray = getSubsetInterest(interestChoices)

    let numbersMap = {};
    let randomNumber = Math.floor(Math.random() * interestsArray.length);
    let ret = [];
    if (interestsArray.length < 8) return currentUserInterestsGenerated[sessionId] = interestsArray;
    for (let i = 0; i < 6; i++) {
        while (numbersMap[randomNumber]) randomNumber = Math.floor(Math.random() * interestsArray.length);
        numbersMap[randomNumber] = true;
        ret.push(interestsArray[randomNumber]);
    }
    console.log(ret.length)
    return currentUserInterestsGenerated[sessionId] = ret;

}

//function to generate restaurant options (2 total)
function restoOptions(restoChoices, sessionId) {
    let restosArray = getSubsetResto(restoChoices);
    console.log(restoChoices)
    let numbersMap = {};
    let randomNumber = Math.floor(Math.random() * restosArray.length);
    let ret = [];
    if (restosArray.length < 2) return currentUserRestosGenerated[sessionId] = restosArray;
    for (let i = 0; i < 2; i++) {
        while (numbersMap[randomNumber]) randomNumber = Math.floor(Math.random() * restosArray.length);
        numbersMap[randomNumber] = true;
        ret.push(restosArray[randomNumber]);
    }
    return currentUserRestosGenerated[sessionId] = ret;

}

//get first two interest options to send to front
function firstTwoInterests(sessionId) {
    console.log(currentUserInterestsGenerated);
    let x = currentUserInterestsGenerated[sessionId];
    let firstChoices = x.slice(0, 2)
    return firstChoices;
}
//get second two interest options to send to front
function secondTwoInterests(sessionId) {
    let x = currentUserInterestsGenerated[sessionId];
    let secondChoices = x.slice(2, 4);
    return secondChoices;
}

//called in api.js to get the 2 restaurants
function getRestos(sessionId) {
    console.log(currentUserRestosGenerated)
    return currentUserRestosGenerated[sessionId];
}

//if they don't pick any restos, send this 
function thirdTwoInterests(sessionId) {
    let x = currentUserInterestsGenerated[sessionId];
    let thirdTwoInterests = x.slice(6, 8);
    return thirdTwoInterests;
}

//get last two interests to send to front (fourth activity, last one after restos)
function lastTwoInterests(sessionId) {
    let x = currentUserInterestsGenerated[sessionId];
    let fourthChoices = x.slice(4, 6);
    return fourthChoices;
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
    lastTwoInterests,
    getRestos,
    randomizeLucky,
    currentUserRestosGenerated,
    thirdTwoInterests
}



