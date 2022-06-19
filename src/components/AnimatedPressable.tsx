import { View, Text, Pressable, StyleProp, ViewStyle } from 'react-native'
import React from 'react'

interface IAnimatedPress {
    children:React.ReactNode
    onPress: ()=> void
    style?:StyleProp<ViewStyle>
    disabled:boolean
}

const AnimatedPressable = ({
    children,
    onPress,
    style,
    disabled
}:IAnimatedPress) => {
    return (
        <Pressable
            onPress={onPress}
            disabled={disabled}
            style={[style]}
        >
            <>
                {children}
            </>
        </Pressable>
    )
}

export default AnimatedPressable