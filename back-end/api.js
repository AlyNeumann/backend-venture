const venture = require('./venture')
const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const fs = require('fs')

app.use(express.static('public'))

app.use(bodyParser.raw({ type: '*/*', limit: '50mb' }))

/*End Points Here*/

//Gets the username & session key
app.get('/userName', (req, res) => {

})
//Receives the body of preferences & sends back first two choices
app.post('/userPreferenceFirstActivity', (req, res) => {

})
//sends second round of choices
app.get('/getSecondActivity', (req,res) => {

})
//sends third round of choices (restaurant)
app.get('/getThirdActivity', (req,res) => {

})
//sends fourth round of choices
app.get('/getFourthActivity', (req,res) => {

})


app.listen(4000, () => console.log('Listening on port 4000!'))

