import { View, Text, ActivityIndicator, Modal } from 'react-native'
import React from 'react'

const Loading = () => {
    return(
        <Modal transparent>
            <ActivityIndicator 
                size={"large"}
                color="#333"
            />
        </Modal>
    )
}

export default Loading