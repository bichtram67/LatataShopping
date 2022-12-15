import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import OrderList from '../components/MyOrder/OrderList'
import { myOrder } from '../redux/User/userSlice'
import '../sass/Order/order.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { resetActionOrder } from '../redux/Order/orderSlice'

// import MyOrder from '../components/MyOrder/MyOrder'
const MyOrders = () => {

  const dispatch = useDispatch()
  const { myOrders } = useSelector(state => state.user)

  // const dispatch= useDispatch()
  const {successUpdateOrder,successReview} = useSelector(state => state.order)

  useEffect(() => {
    dispatch(myOrder())
  },[])

  console.log(successReview)

  useEffect(() => {
    if(successUpdateOrder){
        toast('Hủy đơn hàng thành công!', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
    if(successReview){
        toast('Đánh giá thành công!', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            
    }
  
  }, []);
  

useEffect(() => {
  dispatch(resetActionOrder())
},[])



  return (
    <div className='order-list'>
            <ToastContainer />
            <div className="container">
              <span className='title'>Đơn hàng của tôi</span>
              <div className='my-order-list'>
                  {
                      myOrders &&
                      
                        myOrders.map(data => (
                          
                          <OrderList data={data} />
                        ))
                      
                      
                  }
              </div>
            </div>

        </div>
    
  )
}

export default MyOrders
