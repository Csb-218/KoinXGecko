var express = require('express');
var router = express.Router();

const {statsCheckCoin,statsCheckCoinAll} = require("../controllers/statsController")
const {deviationCheckCoin} = require("../controllers/deviationController")

/* GET coins listing. */
router.get('/stats', statsCheckCoinAll);

router.get('/stats/:coin',statsCheckCoin);

router.get('/deviation/:coin',deviationCheckCoin);



module.exports = router;