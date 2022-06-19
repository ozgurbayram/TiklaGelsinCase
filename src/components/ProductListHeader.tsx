import { View, Text, Image, Alert } from 'react-native'
import React from 'react'
import AnimatedPressable from './AnimatedPressable'
import { useUser } from '../context/UserContext'
import { useNavigation } from '@react-navigation/native'
import { MainScreenProps } from 'types'
import basketIcon from '../../assets/icons/basket.png'
import logoutIcon from '../../assets/icons/logout.png'
import { useBasket } from '../context/BasketContext'
import { brandColor } from '../constant'

export const LeftLogout = ()=>{
    const {userDispatch} = useUser()
    const logout = () =>{
        Alert.alert("Çıkış Yap","Çıkış yapmak istediğinizden emin misiniz?",[
            {
                text:"Evet",
                onPress:()=>{
                    userDispatch({type:'logout'})
                },
            },
            {
                text:"Hayır",
                onPress:()=>{}
            }
        ])
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
    const {basketState} = useBasket()
    const goToBasket =()=>{
        navigation.navigate('Basket')
    }
    return (
        <AnimatedPressable onPress={goToBasket} style={{display:'flex',flexDirection:'column',alignItems:'flex-end'}}>
            <Text style={{color:brandColor}}>{basketState.basket.length}</Text>
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
