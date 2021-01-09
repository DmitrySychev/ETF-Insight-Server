const express = require('express')
const ETFctrl = require('../controllers/etf.controller')

const router = express.Router()

router.post('/etfs', ETFctrl.createETF)
router.put('/etfs/:id', ETFctrl.updateETF)
router.delete('/etfs/:id', ETFctrl.deleteETF)
router.get('/etfs/:id', ETFctrl.getETFById)
router.get('/etfs', ETFctrl.getETFs)

module.exports = router