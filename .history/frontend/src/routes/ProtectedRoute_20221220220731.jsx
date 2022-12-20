import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, useNavigate } from 'react-router-dom'


const ProtectedRoute = ({isAdmin,  Component,...rest}) => {

    const { currentUser } = useSelector(state => state.user)
  return (
    <React.Fragment>
   
        <Route
            {...rest}
            render={props => {
                
                if (!currentUser) {
                    return Navigate('/dang-nhap')
                }
                if (isAdmin === true && currentUser?.role !== 'admin') {
                    return Navigate('/')
                }

                return element = { <>}
            }}
        />
    
</React.Fragment>
  )
}

export default ProtectedRoute
