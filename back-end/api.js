const venture = require('./venture')
const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const fs = require('fs')

app.use(express.static('public'))

app.use(bodyParser.raw({ type: '*/*', limit: '50mb' }))

/*End Points Here*/

//Gets the username 
app.get('/userName', (req, res) => {

})
//Receives the first activity body
app.post('/userPreferenceFirstActivity', (req, res) => {

})
//Receives the second activity body
app.get('/getSecondActivity', (req,res) => {

})
//Receives the third activity (restaurant)
app.get('/getThirdActivity', (req,res) => {

})
//Receives the fourth activity
app.get('/getFourthActivity', (req,res) => {

})


app.listen(4000, () => console.log('Listening on port 4000!'))

