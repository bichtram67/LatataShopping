import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { createProduct } from "../../../../redux/Admin/adminSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


function AdminCreate(props) {

  const [selectImage,setSelectImage] = useState()

  const { register, handleSubmit } = useForm({ defaultValues: {} });

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const setBaseToFile= (file) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    
  }

  const handleImage = (e) => {
    const file = e.target.files[0]
    
  }

 

  // create product
  const handleOnSubmit = (formData) => {

    const { name,category,price,promotion,stock, description } = formData

    console.log(selectImage)

    const data = {
      name,
      price,
      promotion,
      description,
      images:[{
        url: 'https://cdn.tgdd.vn/Products/Images/42/247508/TimerThumb/iphone-14-pro.jpg'
      }] ,
      category,
      stock,
      reviews: []
    }

    // dispatch(createProduct(data))
    // toast.success('Thêm sản phẩm thành công', {
    //   position: "top-right",
    //   autoClose: 500,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: false,
    //   draggable: false,
    //   progress: undefined,
    //   theme: "light",
    //   });

    // setTimeout(() => {
    //   navigate('/admin/product')
    // },1500)
  }
  
  return (
    <div className="admin-create">
      <ToastContainer />
      <span>Create Product</span>
      <form
        className="admin-create-product"
        onSubmit={handleSubmit(handleOnSubmit)}
       
      >
        <span>Tên sản phẩm</span>
        <input {...register("name")} />

        <span>Danh mục</span>
        <input
          {...register("category")}
          placeholder=""
          type="text"
        />

        <span>Giá</span>
        <input
          {...register("price")}
          placeholder=""
          type="number"
        />

        <span>Giảm giá</span>
        <input {...register("promotion")} placeholder="" type="number" />

        <span>Số lượng</span>
        <input {...register("stock")} placeholder="" type="number" />



        <div className="filter-menu-firm">
          {/* {
            List ? (List.map((item) => MenuFirmProduct(item))) : ''
          } */}
        </div>

           
        <span>Hình ảnh</span>
        <input
          type="file"
          {...register("images")}
          onChange={handleImage}
          multiple
        />

          <span>Chi tiết sản phẩm</span>
          <textarea name="" id="" cols="30" rows="10" 
            {...register('description')} ></textarea>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AdminCreate;
