import React from 'react'
import Create from '../components/Create'
import Dashboard from '../components/Dashboard'
import TopBar from '../components/TopBar'
import View from '../components/View'
import { Navigate } from 'react-router-dom'

    const AppRouter = [
        {
            path:'/',
            element:<><TopBar/><Dashboard/></>
        },
        {
            path:'/user/:id',
            element:<><TopBar/><View/></>
        },
        {
            path:'/create',
            element:<><TopBar/><Create/></>
        },
        {
            path:'/*',
            element:<Navigate to='/'/>
        },
    ]

export default AppRouter