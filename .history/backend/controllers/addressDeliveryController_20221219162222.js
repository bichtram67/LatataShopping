const ErrorHandler = require('../utils/errorHandler')
const catchAsyncError = require('../middlewares/catchAsyncErrors')
const Address = require('../models/addressDelivery')

// add address
exports.addAddress = catchAsyncError( async (req,res,next) => {

    const {name,phone,address} = req.body
   const userId = req.user[0]._id
    const addressModel = await Address.findOne({userId: userId})

    console.log(addressModel)

      if(!addressModel)
        {
            addressModel.addresses.push({
                name,
                phone,
                address,
                address_default: 1
            })
            await addressModel.save()
        }
        else{
            addressModel.addresses.push({
                name,
                phone,
                address,
            })
            await addressModel.save()
        }


        res.status(201).json({      
            success: true,
            address: addressModel
        })
 
  
  })