import { View, Text, Button } from 'react-native'
import React from 'react'
import { useUser } from '../context/UserContext'

const ProductList = () => {
    const {userDispatch} = useUser()
    return (
    <View>
      <Text>ProductList</Text>
      <Button title='Logout' onPress={()=>{
        userDispatch({type:'logout'})
      }}/>
    </View>
  )
}

export default ProductList