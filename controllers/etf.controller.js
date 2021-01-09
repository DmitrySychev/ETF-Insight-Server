const ETF = require('../models/etf.model')

createETF = (req, res) => {
    const body = req.body

    if(!body) {
        return res.status(400).json({ 
            success: false,
            error: 'You must provide a ETF'
        })
    }

    const etf = new ETF(body)

    if (!etf) {
        return res.status(400).json({ sucess: false, error: err })
    }

    etf
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: etf._id,
                message: 'ETF created!',
            })
        })
        .catch(error => {
            return res.status(400).json({ 
                error,
                message: 'ETF not created!',
            })
        })
}

updateETF = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false, 
            error: 'You must provide a body to update',
        })
    }

    ETF.findOne({ _id: req.params.id }, (err, etf) => {
        if (err) {
            return res.status(404).json({ 
                err,
                message: 'ETF not found!',
            })
        }
        etf.symbol = body.symbol
        etf.name = body.name
        etf.asset_class = body.asset_class
        etf.assets = body.assets
        etf.price = body.price
        etf
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: etf._id,
                    message: 'ETF updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'ETF not updated!',
                })
            })
    })
}

deleteETF = async (req, res) => {
    await ETF.findOneAndDelete({ _id: req.params.id}, (err, etf) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!etf) {
            return res
                .status(404)
                .json({ success: false, error: 'ETF not found' })
        }

        return res.status(200).json({ success: true, data: etf })
    }).catch(err => console.log(err))
}

getETFById = async (req, res) => {
    await ETF.findOne({ _id: req.params.id }, (err, etf) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!etf) {
            return res
                .status(404)
                .json({ success: false, error: 'ETF not found' })
        }
        return res.status(200).json({ success: true, data: etf })
    }).catch(err => console.log(err))
}

// Get All without pagination
// getETFs = async (req, res,) => {
//     await ETF.find({}, (err, etfs) => {
//         if (err) {
//             return res.status(400).json({ success: false, error: err })
//         }
//         if (!etfs.length) {
//             return res
//                 .status(404)
//                 .json({ success: false, error: 'There are no ETFs in the database' })
//         }
//         return res.status(200).json({ success: true, data: etfs })
//     }).lean().catch(err => console.log(err))
// }

getETFs = async (req, res,) => {
    await ETF.find({}, (err, etfs) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!etfs.length) {
            return res
                .status(404)
                .json({ success: false, error: 'There are no ETFs in the database' })
        }
        const pageCount = Math.ceil(etfs.length / 10);
        let page = parseInt(req.query.p);
        if (!page) { page = 1;}
        if (page > pageCount) {
          page = pageCount
        }
        return res.status(200).json({
            success: true,
            "page": page,
            "pageCount": pageCount,
            "data": etfs.slice(page * 10 - 10, page * 10)
          });
    }).lean().catch(err => console.log(err))
}


module.exports = {
    createETF,
    updateETF, 
    deleteETF,
    getETFs,
    getETFById,
}