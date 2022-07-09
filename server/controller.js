let houses = require('./db.json')
let nextId = 4

module.exports = {
    
    getHouses: (req, res) => {
        res.status(200).send(houses)
    },

    deleteHouse: (req, res) => {
        const { id } = req.params
        let idx = houses.findIndex(house => house.id === +id)
        houses.splice(idx, 1)
        res.status(200).send(houses)
    },

    createHouse: (req, res) => {
        const { address, price, imageURL } = req.body
        houses.push({
            id: nextId,
            address: address,
            price: price,
            imageURL: imageURL
        })
        nextId++
        res.status(200).send(houses)
    },

    updateHouse: (req, res) => {
        const { id } = req.params
        const { type } = req.body
        let i = houses.findIndex(house => house.id === +id)
        if(houses[i].price <= 10000 && type === 'minus') res.status(400).send('Cannot go below 10,000')
        else { type === 'plus'? houses[i].price += 10000: houses[i].price -= 10000   
            res.status(200).send(houses)
        }      
    }

}