const express = require('express')
const app = express()
const cors = require('cors')

const { getHouses, deleteHouse, createHouse, updateHouse } = require('./controller.js')

app.use(express.json())
app.use(cors())


app.get('/api/houses', getHouses)
app.delete('/api/houses/:id', deleteHouse)
app.post('/api/houses', createHouse)
app.put('/api/houses/:id', updateHouse)

const port = process.env.PORT || 4004

app.listen(port, () => console.log(`Server listening on port ${port}`))