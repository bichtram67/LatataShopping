const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema
const addressDeliverySchema = new mongoose.Schema(
        {
           addresses: [
            {
                name: {
                    type: String,
                },
                phone: {
                    type: String,
                },
                address: {
                    type: String,
                },
                address
            }
           ],
            userId: {
                type: ObjectId,
                ref: 'User',
                required: true
            }
        }
)


module.exports  = mongoose.model('Address',addressDeliverySchema)