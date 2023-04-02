import { View, Pressable, StyleSheet } from "react-native-web";
import { MaterialIcons } from "@expo/vector-icons/MaterialIcons";

export default function IconButton({ icon, label, onPress }){
    return(
        <Pressable style={styles.circleButtonContainer} onPress={onPress}>
            <MaterialIcons name={icon} sise={24} color="#FFF" />
            <Text style={ styles.iconButtonLabel }>{ label }</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    iconButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconButtonLabel: {
        color: '#fff',
        marginTop: 12,
    },
});