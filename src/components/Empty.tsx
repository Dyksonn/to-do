import { View, Image, StyleSheet, Text } from 'react-native';

import clipboard from '../assets/Clipboard.png';

export function Empty() {
    return (
        <View style={styles.container}>
            <Image 
                source={clipboard}
                style={styles.image}
                resizeMode='cover'
            />

            <Text style={[styles.text, styles.bold]}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={styles.text}>Crie tarefas e organize seus itens a fazer</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 48
    },
    image: {
        width: 56,
        height: 56,
        marginBottom: 16
    },
    text: {
        fontSize: 14,
        color: "#808080",
        fontFamily: "Inter_400Regular",
        textAlign: 'center'
    },
    bold: {
        fontFamily: 'Inter_700Bold'
    }
})