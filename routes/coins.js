var express = require('express');
var router = express.Router();

const {statsCheck} = require("../controllers/statsController")
const {deviationCheckCoin} = require("../controllers/deviationController")

/* GET coins listing. */
router.get('/stats', statsCheck);

router.get('/deviation/:coin',deviationCheckCoin);



module.exports = router;