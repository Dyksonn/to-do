import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'
import { TaskProps } from '../screens/Home';

type Props = {
    task: TaskProps;
    onChecked: () => void;
    onRemove: () => void;
}

export function Task({ task, onChecked, onRemove } : Props) {
    return (
        <View style={[styles.containerActive, task.isChecked && styles.container]}>
            <TouchableOpacity 
                style={styles.buttonChecked}
                onPress={onChecked}
            >
                <View style={[styles.checked, task.isChecked && styles.isChecked]}>
                    {task.isChecked && (
                        <Ionicons 
                            name="checkmark"
                            size={13}
                            color="#F2F2F2"
                        />
                    )}
                </View>
            </TouchableOpacity>
            
            <Text style={[styles.text, task.isChecked && styles.textChecked]}>
                {task.title}
            </Text>

            <TouchableOpacity 
                onPress={onRemove}
                style={styles.button}
            >
                <FontAwesome5 
                    name="trash-alt"
                    color="#808080"
                    size={15}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 0,
    },
    containerActive: {
        width: '100%',
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
        backgroundColor: "#262626",
        borderRadius: 8,
        marginBottom: 8,
        borderWidth: 1,
        borderColor: "#333333"
    },
    info: {
        flexDirection: "row",
        alignItems: 'center',
        gap: 12
    },
    buttonChecked: {
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    checked: {
        width: 17,
        height: 17,
        borderRadius: 17 / 2,
        borderColor: "#4EA8DE",
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    isChecked: {
        backgroundColor: "#5E60CE",
        borderColor: "#5E60CE"
    },
    text: {
        flex: 1,
        color: "#F2F2F2",
        fontSize: 14,
        fontFamily: "Inter_400Regular",
        marginLeft: 8
    },
    textChecked: {
         textDecorationLine: "underline line-through",
         color: "#808080"
    },
    button: {
        width: 32,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center'
    }
})