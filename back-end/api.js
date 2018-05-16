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
    let userPrefs = venture.sessionIdJoin(latinMexCheap, latinMexExpensive, asianCheap, asianExpensive, barsExpensive, barsCheap, museums, parks, historical)
    venture.getInterests(userPrefs)

    res.send(console.log('that worked good job Aly!'))
    //must call and send venture.firstOptions() (interests) and push to server state


})

//sends second round of choices (interests)
app.get('/getSecondActivity', (req,res) => {
    //must call venture.secondOptions() and push to server state
})

//sends third round of choices (restaurants)
app.get('/getThirdActivity', (req,res) => {
//must call venture.thirdOptions() and push to server state
})

//sends fourth round of choices (interests)
//sends back to welcome screen
app.get('/getFourthActivity', (req,res) => {
//must call venture.fourthOptions() and push to server state
})




app.listen(4000, () => console.log('Listening on port 4000!'))

