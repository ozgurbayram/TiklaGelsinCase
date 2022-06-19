import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MainStackParamList} from 'types'
import ProductList from '../screens/ProductList'
import Basket from '../screens/Basket'
import { LeftLogout, RightBasket } from '../components/ProductListHeader'
import { brandColor } from '../constant'

const MainStack = createNativeStackNavigator<MainStackParamList>()
const MainNavigation = () => {
    return (
        /* @ts-ignore */
        <MainStack.Navigator>
            <MainStack.Screen 
                options={{
                    headerRight:()=>{
                        return (
                            <RightBasket/>
                        )
                    },
                    headerLeft:()=>{
                        return (
                            <LeftLogout/>
                        )
                    },
                    headerTitleAlign:'center',
                    headerTitle:'Ürün Listesi',
                    headerShadowVisible:false,
                    headerTitleStyle:{
                        color:brandColor
                    }
                }}
                name='ProductList' 
                component={ProductList}/>
            <MainStack.Screen 
                options={{
                    headerTitleAlign:'center',
                    headerTintColor:brandColor,
                    headerShadowVisible:false,
                    headerTitle:'Sepet'
                }}
                name="Basket"
                component={Basket}/>
        </MainStack.Navigator>
    )
}

export default MainNavigation