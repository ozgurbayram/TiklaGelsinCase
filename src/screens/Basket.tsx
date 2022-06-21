import { View, Text, FlatList, StyleSheet, Alert } from 'react-native'
import React, { useCallback } from 'react'
import { useBasket } from '../context/BasketContext'
import Product from '../components/Product'
import AnimatedPressable from '../components/AnimatedPressable'
import { brandColor } from '../constant'

const Basket = () => {
    const {basketState,basketDispatch} = useBasket()
    const {basket} = basketState
    
    const calculateBasket = useCallback(
        () => {
            return basket.reduce((a,b)=>a+b.price*(b.count?b.count:1),0)
        },
        [basket],
    )

    const calculateDiscount = useCallback(
        () => {
            return basket.reduce((a,b)=>a+b.discount,0)
        },
        [basket],
    )

    const calculateTotal = useCallback(
        ()=>{
            return calculateBasket()-calculateDiscount()
        },
        [calculateBasket]
    )

    const pay = ()=>{
        Alert.alert("Siparişiniz Hazırlanıyor, afiyet olsun :)")
        basketDispatch({type:'clear'})
    }
    const _renderItem = ({item})=>{
        return (
            <Product key={item.id} {...item} isList={false}/>
        )
    }
       
    return (
        <View style={styles.container}>
            <FlatList
                data={basket}
                renderItem={_renderItem}
            />
            <View style={styles.pay}>
                <View style={styles.payDetails}>
                    <Text>Fiyat: {calculateBasket()}Tl</Text>
                    <Text>İndirim: {calculateDiscount()}Tl</Text>
                    <Text>Toplam: {calculateTotal()} Tl</Text>
                </View>
                <AnimatedPressable
                    onPress={pay}
                    disabled={basket.length==0}
                    style={[styles.buyButton,{opacity:basket.length==0?0.5:1}]}
                >
                    <Text style={styles.buttonText}>{calculateTotal()} Tl Satın Al</Text>
                </AnimatedPressable>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    pay:{
        backgroundColor:'#eee',
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:20
    },
    buyButton:{
        backgroundColor:brandColor,
        width:'80%',
        alignItems:'center',
        justifyContent:'center',
        height:50,
        borderRadius:100
    },
    buttonText:{
        color:'#fff',
        fontSize:15
    },
    payDetails:{
        width:'80%',
        alignItems:'flex-start',
        padding:10
    }
})
export default Basket