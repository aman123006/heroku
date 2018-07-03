const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Go to Hell Aman! Also screw you'))

app.listen(process.env.PORT, () => console.log('Example app listening on port 3000!'))