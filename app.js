const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hi AWS!!!!'))
app.listen(3000, () => console.log('Check log service!!!'))