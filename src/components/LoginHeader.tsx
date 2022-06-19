import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { brandColor } from '../constant'

const LoginHeader = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Tıkla Gelsin</Text>
        </View>
    )
}

export default LoginHeader

const styles = StyleSheet.create({
    container:{
        height:200,
        width:'100%',
        backgroundColor:brandColor,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    logo:{
        color:'#fff',
        fontSize:32,
        paddingBottom:20
    }
})