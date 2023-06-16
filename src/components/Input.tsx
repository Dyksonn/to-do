import { useState } from 'react'
import { TextInput, TextInputProps, StyleSheet } from 'react-native'

type Props = TextInputProps & {}

export function Input({ ...rest } : Props) {
    const [focused, setFocused] = useState(false);
    return (
        <TextInput 
            {...rest}
            placeholderTextColor="#808080"
            style={[styles.input, focused && styles.inputFocused]}
            onFocus={() => setFocused(!focused)}
            onBlur={() => setFocused(!focused)}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        flex: 1,
        backgroundColor: "#262626",
        padding: 16,
        height: 54,
        color: "#F2F2F2",
        fontFamily: "Inter_400Regular", 
        fontSize: 16,
        marginRight: 10,
        borderRadius: 6
    },
    inputFocused: {
        borderWidth: 1,
        borderColor: '#5E60CE'
    }
})