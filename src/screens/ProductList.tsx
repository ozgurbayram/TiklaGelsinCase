import { View, Text, Button, FlatList, StatusBar } from 'react-native'
import React from 'react'
import { getProducts } from '../utils/getProducts'
import Loading from '../components/Loading'
import Product from '../components/Product'

const ProductList = () => {
    const data = getProducts()
    const renderItem =(item)=>{
        return(
            <Product key={item.index} {...item.item} isList={true} />
        )
    }
    if(!data){(<Loading/>)}
    return (
        <View style={{flex:1,backgroundColor:'#fff'}}>
            <StatusBar barStyle={"dark-content"} backgroundColor="#fff"/>
            <FlatList
                data={data}
                renderItem={renderItem}
            />
        </View>
    )
}

export default ProductList