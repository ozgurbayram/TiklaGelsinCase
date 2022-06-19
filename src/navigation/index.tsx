import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthNavigation from './AuthNavigation'

const Navigation = () => {
    return (
        <NavigationContainer>
            <AuthNavigation/>
        </NavigationContainer>
    )
}

export default Navigation