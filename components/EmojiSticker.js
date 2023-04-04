import { View, Image } from 'react-native';
import { TapGestureHandler } from 'react-native-gesture-handler';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    useAnimatedGestureHandler,
    withSpring
} from 'react-native-reanimated';

export default function EmojiSticker({ imageSize, stickerSource }) {
    const AnimatedImage = Animated.createAnimatedComponent(Image);
    const scaleimage = useSharedValue(imageSize);
    const onDoubleTap = useAnimatedGestureHandler({
        onActive: () => {
            if (scaleimage.value) {
            scaleimage.value = scaleimage.value * 2;
            }
        },
    });
    const imageStyle = useAnimatedStyle(()=> {
        return{
            width: withSpring(scaleimage.value),
            height: withSpring(scaleimage.value),
        };
    });
    
    return (
        <View style={{ top: -350 }}>
            <TapGestureHandler onGestureEvent={onDoubleTap} numberOfTaps={2}>
                <AnimatedImage
                    source={stickerSource}
                    resizeMode="contain"
                    style={[ imageStyle, {width: imageSize, height: imageSize} ]}
                />
            </TapGestureHandler>
        </View>
    );
}