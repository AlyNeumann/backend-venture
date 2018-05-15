//this will be for the functions
let userPreferences = {}

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

//function to process options
function checkOptions() {

}

module.exports = {
    userName,
    checkOptions,
    genSessionId,
    sessionIdJoin
}
