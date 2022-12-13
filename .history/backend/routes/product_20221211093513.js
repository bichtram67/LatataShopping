const express = require('express')
const uploadCloud = require('../utils/cloudinary')
const router = express.Router()

const { getProducts, 
    newProduct, 
    getSingleProduct , 
    updateProduct, 
    deleteProduct, 
    createProductReview, 
    getProductReviews,
    deleteReview} = require('../controllers/productController')

const { isAuthenticatedUser , authorizeRoles } = require('../middlewares/auth')


router.route('/products').gt(getProducts)
router.route('/product/:id').get(getSingleProduct)

router.route('/admin/product/new').post(isAuthenticatedUser,authorizeRoles('admin'),uploadCloud.single('images'),newProduct)

router.route('/admin/product/:id')
                .put(isAuthenticatedUser,authorizeRoles('admin'),updateProduct)
                .delete(isAuthenticatedUser,authorizeRoles('admin'),deleteProduct)



router.route('/review').put(isAuthenticatedUser, createProductReview)
router.route('/reviews').get(isAuthenticatedUser, getProductReviews)
router.route('/reviews').delete(isAuthenticatedUser, deleteReview)

module.exports = router