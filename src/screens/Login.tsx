import { View, Text, TextInput, StyleSheet, Modal, ActivityIndicator, ScrollView } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import AnimatedPressable from '../components/AnimatedPressable'
import { StatusBar } from 'expo-status-bar'
import Loading from '../components/Loading'
import { validateEmail } from '../utils/validateEmail'
import { brandColor } from '../constant'
import { Alert } from 'react-native'
import LoginHeader from '../components/LoginHeader'
import { useUser } from '../context/UserContext'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Login = () => {
    const [buttonStatus, setButtonStatus] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)

    // states
    const [email, setEmail] = useState<string|null>(null)
    const [password, setPassword] = useState<string|null>(null)
    const [error, setError] = useState<string|null>(null)
    // references
    const emailRef = useRef<TextInput|null>(null)
    const passwordRef = useRef<TextInput|null>(null)
    // hooks 
    const user = useUser()
    const login=()=>{
        if(email){
            user?.userDispatch({type:'login',email:email})  
        }
    }
    
    useEffect(() => {
        if(email && validateEmail(email)){
            setError(null)
        }else{
            if(email != null && email?.length!=0){
                setError('Geçersiz e-mail')
            }
        }
    }, [email])

    useEffect(() => {
        if(email && validateEmail(email) && password){
            setButtonStatus(true)
        }
    }, [password])
    useEffect(() => {
        const getData=async()=>{
            const data = await AsyncStorage.getItem('user')
            console.log(data);
        }
        getData()
    }, [])
    
    if(loading){return(<Loading/>)}   
    return (
        <ScrollView style={{
            flex:1,
            backgroundColor:'#fff',
        }} 
        contentContainerStyle={{
            alignItems:'center',
            flex:1,
            justifyContent:'flex-start'
        }}>
            <LoginHeader/>
            <StatusBar backgroundColor={brandColor} style='light'/>
            <View style={{
                width:'80%',
                height:'60%',
                alignItems:'center',
                justifyContent:'space-between'
            }}>
                <View style={{
                    height:'60%',
                    width:'100%',
                    justifyContent:'flex-end',
                }}>
                    <TextInput
                        ref={emailRef}
                        style={styles.input}
                        onChangeText={(e)=>{setEmail(e)}}
                        onEndEditing={()=>{
                            passwordRef.current?.focus()
                        }}
                        returnKeyType="done"
                        placeholder='Email'/>
                    <View style={{marginVertical:20}}>
                        {error&&(
                            <Text>{error}</Text>
                        )}
                    </View>
                    <TextInput 
                        ref={passwordRef}
                        onChangeText={(e)=>{setPassword(e)}}
                        secureTextEntry
                        style={styles.input}
                        placeholder='Şifre'/>
                </View>
                <AnimatedPressable
                    onPress={()=>{login()}}
                    disabled={!buttonStatus}
                    style={[styles.buttonStyle,{opacity:buttonStatus?1:0.5}]}
                    >
                    <Text style={{color:'#fff'}}>Giriş Yap</Text>
                </AnimatedPressable>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    input:{
        borderColor:brandColor,
        borderWidth:2,
        borderRadius:50,
        paddingHorizontal:20,
        paddingVertical:10
    },
    buttonStyle:{
        width:'100%',
        backgroundColor:brandColor,
        alignItems:'center',
        justifyContent:'center',
        padding:20,
        borderRadius:50
    }
})

export default Login