//this will be for the functions
let userPreferences = {}

//once a activity is used and sent to front, add it here so we don't repeat!
let usedChoices = {}

//for user name
function genSessionId() {
    let sessionId = Math.floor(Math.random() * 10000000)
}

//joins sessionId to user preferences 
function sessionIdJoin({latinMexCheap, latinMexExpensive, asianCheap, asianExpensive, barsExpensive, barsCheap, museums, parks, historical}) {
    let sessionId = genSessionId();
    userPreferences[sessionId] = {
        latinMexCheap, 
        latinMexExpensive, 
        asianCheap, 
        asianExpensive,
        barsExpensive,
        barsCheap,
        museums,
        parks,
        historical
    } 
}

//function to generate first two options
//make temporary map that stores the options sent so the other functions don't use it later... no repeats!
function firstOptions() {

}

//function to generate second two options 
function secondOptions() {

}

//function to generate third/resto options
function thirdOptions() {

}

//function to generate fourth options
function fourthOptions() {

} 

module.exports = {
    genSessionId,
    firstOptions,
    secondOptions,
    thirdOptions,
    fourthOptions,
    sessionIdJoin
}
