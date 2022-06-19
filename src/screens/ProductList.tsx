import { View, FlatList, StatusBar, TextInput } from 'react-native'
import React, { useCallback, useState } from 'react'
import { getProducts } from '../utils/getProducts'
import Loading from '../components/Loading'
import Product from '../components/Product'
import SearchComponent from '../components/SearchComponent'

const ProductList = () => {
    const [data, setData] = useState(getProducts())
    const [query, setQuery] = useState()
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