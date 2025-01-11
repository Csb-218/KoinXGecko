const axios = require("axios")
require("dotenv").config()

const COIN_GECKO = axios.create({
    baseURL:process.env.COIN_GECKO_BASE_URL,
    headers:{
        "x-cg-demo-api-key":process.env.COIN_GECKO_API_KEY
    }
})

module.exports={COIN_GECKO}