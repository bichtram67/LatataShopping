const User = require('../models/user');

const jwt = require('jsonwebtoken')


const ErrorHandler = require('../utils/errorHandler')
const catchAsyncError = require('./catchAsyncErrors')

// Check if user is authenticated or not 
exports.isAuthenticatedUser = catchAsyncError( async ( req, res, next) => {

    // const { token } = req.cookies

    // console.log('token in Auth ', token)

    // if(!token){
    //     return next(new ErrorHandler('Login first to access this resource',401))
    // }


    // const decoded = jwt.verify(token, process.env.JWT_SECRET)
    // req.user = await User.findById(decoded.id);

    // next()

    const token = req.headers.authorization

    console.log('token Authorization: ' + token)
    const accessToken = token.split(" ")[1]
    console.log('acce')
    next()

    // if(token){
    //     const accessToken = token.split(" ")[1]
    //     jwt.verify(accessToken, process.env.JWT_SECRET, (err,user) => {
    //         if(err){
    //             res.status(403).json("Token is not valid")
    //         }
    //         req.user = user
    //         next()
    //     })
    // }
    // else{
    //     res.status(401).json("You're not authenticated")
    // }

})





// Handling users roles
exports.authorizeRoles = (...roles) => {
    return (req,res,next) => {
        if(!roles.includes(req.user.role))
        {
            return next(
                new ErrorHandler(`Role (${req.user.role}) is not allowed to access this resource`,403)
                )
        }
        next()
    }
}