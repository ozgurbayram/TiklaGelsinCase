import { View, Text, ActivityIndicator, Modal } from 'react-native'
import React from 'react'
import { brandColor } from '../constant'

const Loading = () => {
    return(
        <Modal transparent statusBarTranslucent>
            <View style={{
                flex:1,
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:brandColor,
                opacity:0.7
            }}>
                <ActivityIndicator 
                    size={"large"}
                    color="#fff"
                    />
            </View>
        </Modal>
    )
}

export default Loading