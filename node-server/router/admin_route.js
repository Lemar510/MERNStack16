const express = require('express')

const router = express.Router({caseSensitive: true})

router.get('/helloRouter',(req, res)=> {
    res.send('<h3> Express Router helps removing the burden of route table from main application!!! </h3>')
})