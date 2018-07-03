const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Go to Hell Ashu!'))

app.listen(process.env.PORT, () => console.log('Example app listening on port 3000!'))