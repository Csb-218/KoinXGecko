var cron = require('node-cron');
const coin = require("../models/coinsModel");
const {COIN_GECKO}= require('../lib/axios');


const updateCoins = async () => {

    try{

        const response_bitcoin = await COIN_GECKO.get('/coins/bitcoin')
        const response_ethereum = await COIN_GECKO.get('/coins/ethereum')
        const response_matic_network = await COIN_GECKO.get('/coins/matic-network')

        if(response_bitcoin.status === 200){

            let {data:bitcoinData} = response_bitcoin
            let bitcoin_current_price = bitcoinData.market_data.current_price.usd
            let bitcoin_market_cap = bitcoinData.market_data.market_cap.usd
            let bitcoin_market_cap_change = bitcoinData.market_data.market_cap_change_percentage_24h


            const bitcoin = new coin({
                name:"bitcoin",
                price:bitcoin_current_price,
                market_cap:bitcoin_market_cap,
                market_cap_change_percentage_24h:bitcoin_market_cap_change
            })

            // validate and save
            if(coin.validate(bitcoin)){
                bitcoin.save()
                console.log("updated bitcoin")
            } 
            
        }

        if(response_ethereum.status === 200){

            let {data:ethereumData} = response_ethereum
            let ethereum_current_price = ethereumData.market_data.current_price.usd
            let ethereum_market_cap = ethereumData.market_data.market_cap.usd
            let ethereum_market_cap_change = ethereumData.market_data.market_cap_change_percentage_24h


            const ethereum = new coin({
                name:"ethereum",
                price:ethereum_current_price,
                market_cap:ethereum_market_cap,
                market_cap_change_percentage_24h:ethereum_market_cap_change
            })

           
            // validate and save
            if(coin.validate(ethereum)){
                ethereum.save()
                console.log("updated ethereum")
            } 
        }

        if(response_matic_network.status === 200){

            let {data: matic_network_data} = response_matic_network
            let matic_network_current_price = matic_network_data.market_data.current_price.usd
            let matic_network_market_cap = matic_network_data.market_data.market_cap.usd
            let matic_network_market_cap_change = matic_network_data.market_data.market_cap_change_percentage_24h


            const matic_network = new coin({
                name:"matic-network",
                price:matic_network_current_price,
                market_cap:matic_network_market_cap,
                market_cap_change_percentage_24h:matic_network_market_cap_change
            })
           
            // validate and save
            if(coin.validate(matic_network)){
                matic_network.save();
                console.log("updated matic-network");
            } 
        }


    }catch(error){
        console.error(error)
    }
}

var check_stat_service = cron.schedule('* 2 * * *', () =>  {

    // updates every 2 hours
    updateCoins()

    console.log('Update every 2 hours');
  }, 
  {
    name:"Update coin stats every 2 hours",
    runOnInit:true,
  });
  

module.exports = {check_stat_service,updateCoins}
  