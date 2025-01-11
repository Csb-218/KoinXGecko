const coinModel = require("../models/coinsModel")
const { calculateStandardDeviation } = require("../utils/helper.util")

const deviationCheckCoin = async (req, res) => {

    const { coin } = req.query

    if (coin) {
        try {

            const query = { name: coin };

            const coins = await coinModel.find(query);

            if (coins.length < 1) return res.status(404).json({ message: `coin '${coin}' not found ` })

            const coin_prices = coins.map(coin => coin.price)

            let standardDeviation = calculateStandardDeviation(coin_prices)

            return res.status(200).json({"deviation":standardDeviation})
        }
        catch (error) {
            return res.status(500).json({ message: 'Internal server error' })
        }
    }else{

        try{
            const deviation_response = []
            
            const bitcoin_query = {name:"bitcoin"}
            const bitcoin_response = await coinModel.find(bitcoin_query)

            const ethereum_query = {name:"ethereum"}
            const ethereum_response = await coinModel.find(ethereum_query)

            const matic_query = {name:"matic-network"}
            const matic_response = await coinModel.find(matic_query)

            if(bitcoin_response.length>0){

                const coin_prices = bitcoin_response.map(coin => coin.price)

                let standardDeviation = calculateStandardDeviation(coin_prices)

                let bitcoin_deviation = {
                    "coin":"bitcoin",
                    "deviation":standardDeviation
                }

                deviation_response.push(bitcoin_deviation)
                console.log(bitcoin_deviation)
            } 
            
            if(ethereum_response.length>0){

                const coin_prices = ethereum_response.map(coin => coin.price)

                let standardDeviation = calculateStandardDeviation(coin_prices)

                let ethereum_deviation = {
                    "coin":"ethereum",
                    "deviation":standardDeviation
                }

                deviation_response.push(ethereum_deviation)
            }
                
            if(matic_response.length>0){

                const coin_prices = matic_response.map(coin => coin.price)

                let standardDeviation = calculateStandardDeviation(coin_prices)

                let matic_deviation = {
                    "coin":"matic",
                    "deviation":standardDeviation
                }

                deviation_response.push(matic_deviation)

            }

            return res.status(200).json(deviation_response)

        }catch(error){
            return res.status(500).json({ message: 'Internal server error' })

        }

    }





}

module.exports = { deviationCheckCoin }