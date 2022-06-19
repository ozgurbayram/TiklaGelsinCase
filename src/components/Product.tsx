import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import AnimatedPressable from './AnimatedPressable'
import VStack from './VStack'

interface IProduct {
    id:number
    name:string
    price:number
    discount?:number
    ingredients:string[]
    image:string
}

const Product = ({
    id,
    name,
    price,
    image,
    discount,
    ingredients,
}:IProduct) => {

    const addToBasket =()=>{
    }

    return (
        <View style={styles.product}>
            <VStack>
                <Image
                    source={{
                        uri:image,
                        width:45,
                        height:45,
                    }}
                    style={{borderRadius:40,marginRight:5}}
                />
                <View>
                    <Text style={styles.productName}>{name}</Text>
                    <Text style={styles.ingredients}>İçindekiler:{ingredients.join(',')}</Text>
                </View>
            </VStack>
            <AnimatedPressable
                onPress={()=>{
                    addToBasket()
                }}
                style={styles.button}
            >
                <>
                    <Text>{price}Tl Sepete Ekle</Text>
                </>
            </AnimatedPressable>
        </View>
    )
}

export default React.memo(Product)

const styles = StyleSheet.create({
    product:{
        width:'100%',
        borderBottomColor:'#fff',
        borderBottomWidth:1,
        backgroundColor:'#e91c34',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:15
    },
    button:{
        backgroundColor:'#fff',
        padding:10,
        borderRadius:15
    },
    productName:{
        color:'#fff',
        fontWeight:'bold',
    },
    ingredients:{
        color:'#fff',
    },
    addOrRemove:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        padding:10,
        justifyContent:'space-between'
    },
    count:{
        fontSize:18,
        color:'#fff',
        paddingHorizontal:10
    },
    icon:{
        color:'#fff'
    }
})