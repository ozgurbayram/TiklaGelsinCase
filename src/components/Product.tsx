import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import AnimatedPressable from './AnimatedPressable'
import { useBasket } from '../context/BasketContext'

interface IProduct {
    id:number
    name:string
    price:number
    discount?:number
    ingredients:string[]
    image:string
    isList?:boolean
    count?:number
}

const Product = ({
    id,
    name,
    price,
    image,
    discount,
    ingredients,
    isList,
    count
}:IProduct) => {
    const {basketState,basketDispatch} =useBasket()
    const addToBasket =()=>{
        basketDispatch({type:'add',product:{
            id,
            name,
            price,
            image,
            ingredients,
            discount,
            count:1
        }})
    }
    const increase = ()=>{
        basketDispatch({type:'increase',id:id})
    }
    const decrease =()=>{
        if(count==1){
            basketDispatch({type:'remove',id:id})
        }else{
            basketDispatch({type:'decrease',id:id})
        }
    }
    return (
        <View style={styles.product}>
            <View style={styles.left}>
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
            </View>
            {isList?(
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
            ):(
                <View style={styles.count}>
                    <AnimatedPressable
                        onPress={increase}
                        style={styles.countButton}
                    >
                        <Text>+</Text>
                    </AnimatedPressable>
                    <Text style={styles.countText}>{count} Adet</Text>
                    <AnimatedPressable
                        onPress={decrease}
                        style={styles.countButton}
                    >
                        <Text>-</Text>
                    </AnimatedPressable>
                </View>
            )}
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
    
    icon:{
        color:'#fff'
    },
    countButton:{
        backgroundColor:'#fff',
        padding:12,
        borderRadius:80,
    },
    count:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'30%',
    },
    countText:{
        color:'#fff',
        fontSize:16
    },
    left:{
        width:'50%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
    }
})