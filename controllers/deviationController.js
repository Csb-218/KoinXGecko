const coinModel = require("../models/coinsModel")


const deviationCheckCoin = async(req,res)=>{
    const {coin} = req.params

    try {

        const query = { name : coin };

        const response = await coinModel.findOne(query)

        if(response.length<1) return res.status(404).json({ message: `coin '${coin}' not found ` }) 

        return res.status(200).json(response)
    }
    catch (error) {
        return res.status(500).json({ message: 'Internal server error' }) 
    }
}

module.exports ={deviationCheckCoin}