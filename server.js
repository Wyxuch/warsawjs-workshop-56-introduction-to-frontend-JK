const express = require('express')
const cors = require('cors')
const fs = require('fs')
const app = express()
const port = 3333

app.use(cors());
app.options('*', cors());

app.get('/data', (req, res) => {
    res.send(JSON.parse(fs.readFileSync('./data.json')))
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})