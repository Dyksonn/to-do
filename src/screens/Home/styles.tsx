import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1A1A1A",
    },
    form: {
        flexDirection: "row",
        paddingHorizontal: 24,
        marginTop: -22
    },
    headerTask: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#808080',
        marginHorizontal: 24,
        marginTop: 32,
        paddingBottom: 21
    },
    containerCount: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8
    },
    titleCount: {
        color: "#4EA8DE",
        fontSize: 14,
        fontFamily: "Inter_700Bold"
    },
    bubbleCount: {
        width: 20,
        height: 20,
        borderRadius: 20 / 2,
        backgroundColor: "#333333",
        justifyContent: "center",
        alignItems: "center"
    },
    count: {
        color: "#D9D9D9",
        fontSize: 12,
        fontFamily: "Inter_700Bold"
    },
    containerTask: {
        marginTop: 20
    },
    contentTask: {
        paddingHorizontal: 24,
        paddingBottom: 90
    }
})