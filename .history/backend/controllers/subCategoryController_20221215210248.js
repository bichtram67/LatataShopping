const catchAsyncErrors = require('../middlewares/catchAsyncErrors')
const SubCategory = require('../models/subCategory')
const Category = require('../models/category')
const ErrorHandler = require('../utils/errorHandler')


exports.createSubCategory = catchAsyncErrors( async(req,res, next) => {

    const { category_id, sub_category } = req.body

    const findIdCate = await Category.findById(category_id)

    if(!findIdCate){
        return next(new ErrorHandler('Category_id not found'));
    }

    const duplicateSubCate = await SubCategory.findOne({
        sub_category: req.body.sub_category
    })


    if(duplicateSubCate)
    {
        if(duplicateSubCate.sub_category.includes(sub_category)){
            return next(new ErrorHandler('Sub category is existed'));
        }
    }

    const subCategory = new SubCategory({
        category_id: req.body.category_id,
        sub_category: req.body.sub_category
    })
    try{

       const subcategory = await subCategory.save()

        res.status(201).json({
            success: true,
            subCategory
        })
    }
    catch(err){
        res.status(400).json({
            success: false,
            message: 'Error'
        })
    }
})