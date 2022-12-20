import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, useNavigate } from 'react-router-dom'


const ProtectedRoute = ({isAdmin,component: Component,...rest}) => {

    const { currentUser } = useSelector(state => state.user)
    const navigate = useNavigate()
  return (
    <React.Fragment>
   
        <Route
            {...rest}
            render={props => {
                
                if (isAdmin === true && user.role !== 'admin') {
                    return Navigate('/')
                }

                return <Component {...props} />
            }}
        />
    
</React.Fragment>
  )
}

export default ProtectedRoute
