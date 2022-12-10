const mongoose = require('mongoose');


const { ObjectId } = mongoose.Schema


const orderSchema = mongoose.Schema({
    const date = new Date();
    const june = moment(date.getTime());
    june.tz('Asia/Bangkok').format('ha z')
    console.log(june)
    orderItems: [{
        productId: {
            type: ObjectId
        },
        name: {
            type: String
        },
        price: {
            type: Number
        },
        image: {
            type: String
        },
        quantity: {
            type: Number
        },  
        
    }],
    name: String,
    address: String,
    phoneNo: {
        type: String,
    },
    note: {
        type: String
    },
    quantity: { type: Number  },
    shippingFee: {
        type: Number,
        default: 0.0
    },
    totalPrice: {
        type: Number,
        default: 0.0
    },
    status: {
        type: String,
        default: 'PENDING',
        enum: [
          'PENDING',
          'DELIVERING',
          'DONE',
          'CANCELLED',
        ],
      },
    payment: {
        type: String,
        default: 'COD',
        enum: [
          'COD',
          'PAYPAL'
        ],
    },
    deliveredAt:{
        type: Date
    },
    createAt: {
        type: Date,
        default: Date.now()
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    
})

module.exports = mongoose.model('Order',orderSchema)


