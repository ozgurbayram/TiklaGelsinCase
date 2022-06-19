import { View, Text, ActivityIndicator, Modal } from 'react-native'
import React from 'react'

const Loading = () => {
    return(
        <Modal transparent>
            <View style={{
                flex:1,
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'#000',
                opacity:0.4
            }}>
                <ActivityIndicator 
                    size={"large"}
                    color="#333"
                    />
            </View>
        </Modal>
    )
}

export default Loading