import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Login'
import { AuthStackParamList } from 'types'
import LoginHeader from '../components/LoginHeader'

const Stack = createNativeStackNavigator<AuthStackParamList>()

const AuthNavigation = () => {
    return (
        /* @ts-ignore */        
        <Stack.Navigator>
            <Stack.Screen 
                name="Login" 
                component={Login}
                options={{
                    headerShown:false
                }}
            />
        </Stack.Navigator>     
    )
}

export default AuthNavigation