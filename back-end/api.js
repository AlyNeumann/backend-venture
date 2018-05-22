const venture = require('./venture');
const express = require('express');
const cors = require("cors");
const app = express();


const bodyParser = require('body-parser');
const fs = require('fs');

app.use(express.static('public'));
app.use(cors());

app.use(bodyParser.raw({ type: '*/*', limit: '50mb' }));


//Receives the body of preferences & sends back first two choices
//parse info coming from front, attach it to session ID so it can be references by other end poitns
app.post('/userPreferenceFirstActivity', (req, res) => {
    let parsed = JSON.parse(req.body.toString())

    let latinMexCheap = parsed.latinMex.cheap;
    let latinMexExpensive = parsed.latinMex.expensive;
    let asianCheap = parsed.asian.cheap;
    let asianExpensive = parsed.asian.expensive;
    let europeanExpensive = parsed.european.expensive;
    let europeanCheap = parsed.european.cheap;
    let barsExpensive = parsed.bars.expensive;
    let barsCheap = parsed.bars.cheap;
    let museums = parsed.museums;
    let parks = parsed.parks;
    let historical = parsed.historical;
    let sessionId = venture.genSessionId();
    //join session ids to user preferences, seperated into two maps
    let userRestos = venture.sessionIdRestos(latinMexCheap, latinMexExpensive, asianCheap, asianExpensive, europeanExpensive, europeanCheap, sessionId);
    let userInterests = venture.sessionIdInterests(barsExpensive, barsCheap, museums, parks, historical, sessionId);
    //remove the false booleans, left with two arrays of user preferences
    let restoChoices = venture.getInterests(userRestos);
    let interestChoices = venture.getInterests(userInterests);
    let restoOptions = venture.restoOptions(restoChoices, sessionId);

    //next two lines are to extract two interests to res.send to front
    let interestOptions = venture.interestOptions(interestChoices, sessionId);
    let firstTwoInterests = venture.firstTwoInterests(sessionId); 
    res.send(JSON.stringify({ sessionId: sessionId, firstTwoInterests: firstTwoInterests }));

})

//sends second round of choices (interests)
app.get('/getSecondActivity', (req,res) => {
    let sessionId = req.query.sessionId;
    let secondTwoInterests = venture.secondTwoInterests(sessionId);
    console.log(secondTwoInterests)
    res.send(JSON.stringify({ sessionId, secondTwoInterests}));
})

//sends third round of choices (restaurants)
app.get('/getThirdActivity', (req,res) => {
    let sessionId = req.query.sessionId;
    console.log(sessionId)
    console.log(venture.currentUserRestosGenerated[sessionId])
    if(venture.currentUserRestosGenerated[sessionId].length === 0){
        return res.send(JSON.stringify(venture.thirdTwoInterests(sessionId)))
    }
    let restos = venture.getRestos(sessionId);
    console.log("restos" + restos)
    res.send(JSON.stringify({sessionId, restos}));
})

//sends fourth round of choices (interests)
//sends back to welcome screen
app.get('/getFourthActivity', (req,res) => {
    let sessionId = req.query.sessionId;
    let lastTwoInterests = venture.lastTwoInterests(sessionId);
    res.send(JSON.stringify({sessionId, lastTwoInterests}));
})

//sends back 8 random options & sessionId is generated 
app.get('/feelingLucky', (req,res) => {
    let sessionId = venture.genSessionId();
    let randomAdventure = venture.randomizeLucky(sessionId);
    res.send(JSON.stringify({sessionId, randomAdventure}));
})



app.listen(4000, () => console.log('Listening on port 4000!'));



