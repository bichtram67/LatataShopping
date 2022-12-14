import React from 'react'
import banner from '../../assets/images/home/banner_watch_series.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getProduct } from '../../redux/Product/productSlice'
import ListProduct from '../ListProduct'

const ListWatchesSeries = () => {

    const listProduct = useSelector(state => state.product.listProduct)
    const listWatc

  return (
    <div className='list-watches'>
        <div className="banner">
            <Link to=''>
                <img src={banner} alt="" />
            </Link>
        </div>

        <div className="list-product-watches">
            
            <ListProduct list_product={listProduct} quantity={1} />
            
        </div>

    </div>
  )
}

export default ListWatchesSeries
