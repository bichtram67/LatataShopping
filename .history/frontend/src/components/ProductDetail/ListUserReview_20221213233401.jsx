import React from 'react'
import StarRating from '../../components/StarRating'
const ListUserReview = ({data}) => {
  return (
    <div className="product-review-list flex">
                        <div className="review-detail flex">
                            <div className="review-avatar">
                                <img src={data?.avatar?.url} alt="" />
                            </div>
                            <div className="review-content">
                                <span>{data?.name}</span> <br />
                                <StarRating rating={data?.rating}/> <br />
                                <p className='time-review'>2022-11-30 09:07</p>
                                <p className='content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quia eveniet nulla alias, tempore molestias repudiandae quam dolorem suscipit assumenda soluta praesentium aliquam, autem sapiente necessitatibus modi laborum asperiores temporibus.</p>
                            </div>
                        </div>
                        
                   
                    </div>
  )
}

export default ListUserReview
