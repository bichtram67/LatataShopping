const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        unique: true,
    }
},
{
    timestamps:true,
    toJSON: {
        transform
    }
}
)

module.exports = mongoose.model("Category", categorySchema);