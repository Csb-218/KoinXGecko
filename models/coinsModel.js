const mongoose = require('mongoose');

const {Schema,SchemaTypes} = mongoose;


const coinSchema = new Schema({
    
    name:{
        type:SchemaTypes.String,
        required:true
    },
    price:{
        type:SchemaTypes.Number,
        required:true
    },
    market_cap:{
        type:SchemaTypes.Number,
        required:true
    },
    market_cap_change_percentage_24h:{
       type:SchemaTypes.Number,
       required:true
    }  
}
,
{
    timestamps:true
}
)

const coinModel = mongoose.model('coin',  coinSchema);
module.exports = coinModel;