import { View, FlatList, StatusBar } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { getProducts } from '../utils/getProducts'
import Loading from '../components/Loading'
import Product from '../components/Product'
import SearchComponent from '../components/SearchComponent'
import * as Linking from 'expo-linking'
import { useBasket } from '../context/BasketContext'
import { useNavigation } from '@react-navigation/native'

const ProductList = () => {
    const [data, setData] = useState(getProducts())
    const {basketDispatch} = useBasket()
    const [query, setQuery] = useState()
    const navigation = useNavigation()
    
    const renderItem =(item)=>{
        return(
            <Product key={item.index} {...item.item} isList={true} />
        )
    }
    
    const filterProducts = useCallback(
        (e:string) => {
            const filtered = data.filter((item)=>{
                return item.name.toLowerCase().includes(e.toLowerCase())
            })
            setData(filtered)
        },
        [query],
    )
    const redirect = (url:string|null)=>{
        if(!url) return
        const id = Linking.parse(url).queryParams['menuId']
        if(id){
            const product = data[id]
            basketDispatch({type:'add',product:{
                ...product,
                count:1
            }})
            navigation.navigate('Basket')
        }
    }

    useEffect(() => {
        Linking.getInitialURL().then(redirect)
    }, [])

    if(!data){(<Loading/>)}
    return (
        <View style={{flex:1,backgroundColor:'#fff'}}>
            <StatusBar barStyle={"dark-content"} backgroundColor="#fff"/>
            <FlatList
                ListHeaderComponent={<SearchComponent onChangeText={filterProducts}/>}
                data={data}
                renderItem={renderItem}
            />
        </View>
    )
}

export default ProductList