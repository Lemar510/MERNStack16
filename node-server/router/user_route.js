const express = require('express')
const router = express.Router()

router.get('/info', (req, res) => {
    let firstName = 'Lemar';
    let lastName = 'Saffi';
    let address = 'Cali';

    res.send(`My name is ${firstName} ${lastName} and my address is somewhere in ${address}`)
})

module.exports = router;