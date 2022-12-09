const express = require('express')
const router = express.Router();


const { addToCart, getCart,deleteCart, decreaseQuantity, increaseQuantity } = require('../controllers/cartController')

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

router.route('/cart/add').post(isAuthenticatedUser,addToCart)

router.route('/cart/getCartUser').get(isAuthenticatedUser, authorizeRoles('user') ,getCart)

// router.route('/cart/getAllCart').get(isAuthenticatedUser, authorizeRoles('admin') ,getCart)

router.route('/cart/:id').delete(isAuthenticatedUser,authorizeRoles('user'),deleteCart)

router.route('/cart/decrease/:id').put(isAuthenticatedUser,decreaseQuantity)
router.route('/cart/increase/:id').put(isAuthenticatedUser,increaseQuantity)


module.exports = router