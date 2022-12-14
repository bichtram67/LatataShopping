const cloudinary = require('cloudinary').v2
const {CloudinaryStorage } = require('multer-storage-cloudinary')
const multer = require('multer');


// setting up cloudinary config
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})


const storage = new CloudinaryStorage({
    cloudinary,
    allowedFormats: ['jpg', 'png'],
    params: {
        folder: 'images'
    }
  });
  const uploadCloud = multer({ storage });
  
  module.exports = uploadCloud;;