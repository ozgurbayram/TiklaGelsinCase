import { Pressable, StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
const AnimatedPress = Animated.createAnimatedComponent(Pressable)
interface IAnimatedPress {
    children:React.ReactNode
    onPress: ()=> void
    style?:StyleProp<ViewStyle>
    disabled?:boolean
}

const AnimatedPressable = ({
    children,
    onPress,
    style,
    disabled
}:IAnimatedPress) => {
    const scale = useSharedValue(1)
    const animatedStyle = useAnimatedStyle(()=>{
        return {
            transform:[{
                scale:scale.value
            }]
        }
    })
    const onPressIn = ()=>{
        scale.value = withTiming(0.8)
    }
    const onPressOut = ()=>{
        scale.value = withTiming(1)
    }
    return (
        <AnimatedPress
            onPress={onPress}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            disabled={disabled}
            style={[style,animatedStyle]}
        >
            <>
                {children}
            </>
        </AnimatedPress>
    )
}

export default AnimatedPressable