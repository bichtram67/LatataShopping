const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema
const addressDeliverySchema = new mongoose.Schema(
        {
           addresses: [
            {
                name: {
                    ty
                }
            }
           ]
            userId: {
                type: ObjectId,
                ref: 'User',
                required: true
            }
        }
)


module.exports  = mongoose.model('Address',addressDeliverySchema)