const coinModel = require("../models/coinsModel")


const statsCheckCoin = async(req,res)=>{
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

const statsCheckCoinAll = async(req,res)=>{
    
    try {
        const query = {};

        const response = await coinModel.find(query)

        if(response.length<1) return res.status(404).json({ message: `coin '${coin}' not found ` }) 

        return res.status(200).json(response)
    }
    catch (error) {
        return res.status(500).json({ message: 'Internal server error' }) 
    }
}





module.exports = {statsCheckCoin,statsCheckCoinAll}