import React, { useEffect, useState } from 'react'
import { LinkingOptions, NavigationContainer } from '@react-navigation/native'
import AuthNavigation from './AuthNavigation'
import { useUser } from '../context/UserContext'
import Loading from '../components/Loading'
import AsyncStorage from '@react-native-async-storage/async-storage'
import MainNavigation from './MainNavigation'
import { BasketProvider } from '../context/BasketContext'
import * as Linking from 'expo-linking'
import { Text } from 'react-native'

const Navigation = () => {
    const [loading, setLoading] = useState(true)
    const {userState,userDispatch} = useUser()
    const {user} = userState
    useEffect(() => {
        const getUser = async()=>{
            const user = await AsyncStorage.getItem('user')
            if(user){
                userDispatch({type:'login',email:user})
                setLoading(false)
            }else{
                setLoading(false)
            }
        }
        getUser()
    }, [])
    if(loading){return(<Loading/>)}
    return (
        <>
            {user?(
                <BasketProvider>
                    <MainNavigation/>
                </BasketProvider>
            ):(        
                <AuthNavigation/>
            )}
        </>
    )
}

export default Navigation