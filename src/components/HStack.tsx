import { View, Text } from 'react-native'
import React from 'react'

interface IHStack {
    children:React.ReactNode
}

const HStack = ({children}:IHStack) => {
    return (
        <View style={{display:'flex',flexDirection:'row'}}>
            <>
                {children}
            </>
        </View>
    )
}

export default HStack