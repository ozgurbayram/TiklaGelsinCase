import { View, Text, Image } from 'react-native'
import React from 'react'
import AnimatedPressable from './AnimatedPressable'
import { useUser } from '../context/UserContext'
import { useNavigation } from '@react-navigation/native'
import { MainScreenProps } from 'types'
import basketIcon from '../../assets/icons/basket.png'
import logoutIcon from '../../assets/icons/logout.png'

export const LeftLogout = ()=>{
    const {userDispatch} = useUser()
    const logout = () =>{
        userDispatch({type:'logout'})
    }
    return (
        <AnimatedPressable
            onPress={logout}
        >
            <Image 
                source={logoutIcon}
                style={{
                    width:25,
                    height:25,
                }}
            />
        </AnimatedPressable>
    )
}

export const RightBasket = () =>{
    const navigation= useNavigation()
    const goToBasket =()=>{
        navigation.navigate('Basket')
    }
    return (
        <AnimatedPressable onPress={goToBasket}>
            <Image
                source={basketIcon}
                style={{
                    width:30,
                    height:30
                }}
            />
        </AnimatedPressable>
    )
}
