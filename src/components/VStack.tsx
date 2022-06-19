import { View, Text } from 'react-native'
import React from 'react'

interface IVstack {
    children:React.ReactNode
}

const VStack = ({children}:IVstack) => {
    return (
        <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            <>
                {children}
            </>
        </View>
    )
}

export default VStack