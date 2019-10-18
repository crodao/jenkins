const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.json({ ok: true }))

app.get('/notok', (req, res) => res.json({ ok: false }))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = { app };