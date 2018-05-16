const venture = require('./venture')
const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const fs = require('fs')

app.use(express.static('public'))

app.use(bodyParser.raw({ type: '*/*', limit: '50mb' }))

let serverState = {
    firstOptions: [],
    secondOptions: [],
    thirdOptions: [],
    fourthOptions: []
}



//Receives the body of preferences & sends back first two choices
//parse info coming from front, attach it to session ID so it can be references by other end poitns
app.post('/userPreferenceFirstActivity', (req, res) => {
    let parsed = JSON.parse(req.body.toString())

    let latinMexCheap = parsed.latinMex.cheap;
    let latinMexExpensive = parsed.latinMex.expensive;
    let asianCheap = parsed.asian.cheap;
    let asianExpensive = parsed.asian.expensive;
    let barsExpensive = parsed.bars.expensive;
    let barsCheap = parsed.bars.cheap;
    let museums = parsed.museums;
    let parks = parsed.parks;
    let historical = parsed.historical;
    //join session ids to user preferences, seperated into two maps
    let userRestos = venture.sessionIdRestos(latinMexCheap, latinMexExpensive, asianCheap, asianExpensive)
    let userInterests = venture.sessionIdInterests(barsExpensive, barsCheap, museums, parks, historical)
    //remove the false booleans, left with two arrays of user preferences
    let restoChoices = venture.getInterests(userRestos)
    let interestChoices = venture.getInterests(userInterests)
    let interestOptions = venture.interestOptions(interestChoices)
    console.log(interestOptions)
    res.send(JSON.stringify(interestOptions))

})

//sends second round of choices (interests)
app.get('/getSecondActivity', (req,res) => {
    
})

//sends third round of choices (restaurants)
app.get('/getThirdActivity', (req,res) => {
//must call venture.restoOptions() and push to server state
})

//sends fourth round of choices (interests)
//sends back to welcome screen
app.get('/getFourthActivity', (req,res) => {

})




app.listen(4000, () => console.log('Listening on port 4000!'))

