require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


const data = {
	color: "red",
	value: "#f00"
}


app.get('/', (req, res)=>{
    res.send('Winter is coming')
})

app.get('/clubs', (req, res)=>{

    res.send('<h1>Welcome to the FightClub</h1>')

})

app.get('/data', (req, res)=>{
    res.json(data);
})


app.listen(port, ()=>{
    console.log(`server listening on port ${port}...`)
})
