const mongoose = require('mongoose');


const { ObjectId } = mongoose.Schema


const orderSchema = mongoose.Schema({
    orderItems: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Cart'
    }],
    address: String,
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
        default: 'PROCESSING',
        enum: [
          'PROCESSING',
          'DELIVERING',
          'DONE',
          'CANCEL',
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
        required: true,
        ref: 'User'
    },
    
    
    

})

const order = mongoose.model('Order',orderSchema)


module.exports = { order }