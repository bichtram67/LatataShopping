import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, useNavigate } from 'react-router-dom'


const ProtectedRoute = ({children}) => {

    const { currentUser } = useSelector(state => state.user)
    
    if(currentUser?.role === 'admin')
    {
        return <Navigate
    }
}

export default ProtectedRoute
