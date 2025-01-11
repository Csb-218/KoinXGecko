const coinModel = require("../models/coinsModel")


const statsCheck = async(req,res) =>{
    const {coin} = req.query 

    if(coin){
        try {

            const query = { name : coin };
    

            const response = await coinModel.findOne(query)

    
            if(!response) return res.status(404).json({ message: `coin '${coin}' not found ` }) 
    
            return res.status(200).json(response)
        }
        catch (error) {
            return res.status(500).json({ message: 'Internal server error' }) 
        }
    }else{
        try {

            const coins_response = []
            
            const bitcoin_query = {name:"bitcoin"}
            const bitcoin_response = await coinModel.find(bitcoin_query).sort({"updatedAt" : -1})

            const ethereum_query = {name:"ethereum"}
            const ethereum_response = await coinModel.find(ethereum_query).sort({"updatedAt" : -1})

            const matic_query = {name:"matic-network"}
            const matic_response = await coinModel.find(matic_query).sort({"updatedAt" : -1})


            if(bitcoin_response.length>0) coins_response.push(bitcoin_response[0])
            
            if(ethereum_response.length>0) coins_response.push(ethereum_response[0])
            
            if(matic_response.length>0) coins_response.push(matic_response[0])
    
            return res.status(200).json(coins_response)
        }
        catch (error) {
            return res.status(500).json({ message: 'Internal server error' }) 
        }
    }


}

const statsCheckCoin = async(req,res)=>{
    const {coin} = req.params

    try {

        const query = { name : coin };

        const response = await coinModel.findOne(query).sort({"updatedAt" : -1})

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





module.exports = {statsCheckCoin,statsCheckCoinAll,statsCheck}