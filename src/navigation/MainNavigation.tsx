import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MainStackParamList} from 'types'
import ProductList from '../screens/ProductList'
import Basket from '../screens/Basket'

const MainStack = createNativeStackNavigator<MainStackParamList>()
const MainNavigation = () => {
    return (
        /* @ts-ignore */
        <MainStack.Navigator>
            <MainStack.Screen name='ProductList' component={ProductList}/>
            <MainStack.Screen name="Basket" component={Basket}/>
        </MainStack.Navigator>
    )
}

export default MainNavigation