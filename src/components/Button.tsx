import { TouchableOpacity, StyleSheet, TouchableOpacityProps } from 'react-native'
import { Feather } from '@expo/vector-icons';

type Props = TouchableOpacityProps & {}

export function Button({ ...rest }: Props) {
    return (
        <TouchableOpacity {...rest} style={styles.button}>
            <Feather 
                name="plus-circle"
                color="#F2F2F2"
                size={20}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 52,
        height: 52,
        backgroundColor: "#1E6F9F",
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    }
})