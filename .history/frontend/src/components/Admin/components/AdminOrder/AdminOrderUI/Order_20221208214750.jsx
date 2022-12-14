import React from "react";
import { useDispatch } from "react-redux";
// import {
//   createOrderGhn,
//   PrintOrderGhn,
// } from "../../../../../actions/GhnAction";
// import { deleteOrder, getAllOrder, ShippingOrder } from "../../../../../actions/OrderAction";


function Order(props) {

  let cancelOrder = false

  return (
    
      <div className="order-list">
        <div className="order-list-items">
          {/* {orderItems.map((item) => ( */}
            <div className="order-items-item">
              <span className="img">
                <img src='https://res.cloudinary.com/dx8xengfd/image/upload/v1667458148/avatars/iPhone_14_Pro_Max-Pur1_sfdzzu.jpg' alt="image"></img>
              </span>
              <span className="qty">Số lượng: 10</span>
              <span className="name">Iphone 14 promax</span>
              <span className="price">100000</span>
            </div>
          {/* ))} */}
        </div>
        <div className="toatalPrice">
          <span>Tổng tiền: 100000</span>
        </div>
        <div className="order-info">
          <div className="order-info-address">
            <b>Địa chỉ : </b> {"  "}
            {'bichtram'},{""}
            {'Long An'}, {'Cần Giuộc'},{"  "}
            {'Truong Binh'}, {'300'},{" "}
            {'0909xxxx'}
          </div>
        </div>

        {paymentResult ? (
          <div className="order-payment-check">
            Paid : 10/10/2022
          </div>
        ) : (
          ""
        )}

        <div className="order-bottom">
          {status === "shipping" ? (
            <div className="order-status">
              <span>
                Đã xác nhận{" "}
                {paymentMethod === "payOnline" ? (
                  <span>& Đã thanh toán</span>
                ) : (
                  ""
                )}
              </span>
            </div>
          ) : (
            ""
          )}

          <div className="order-button">
            {status === "pendding" && cancelOrder === false ? (
              <>
                <button
                  className="shipping"
                  
                >
                  Xác nhận đơn hàng
                </button>

              </>
            ) : (''
            )}

            {
              cancelOrder === true ? (<>
              <span> Khách yêu cầu hủy đơn </span>
                <button
                  className="shipping"
                  
                >
                  Hủy đơn
                </button>

              </>) : ''
            }

            {/* {status === "shipping" ? (
              <button
                className="shipping"
                onClick={() => handlePrintOrder(order)}
              >
                In đơn hàng
              </button>
            ) : (
              ""
            )} */}
          </div>
        </div>
      </div>
    
  );
}

export default Order;
