import { StyleSheet, View, Image} from 'react-native'

import logo from "../assets/logo.png";

export function Header() {
    return (
        <View style={styles.header}>
            <Image 
                source={logo}
                style={styles.image}
                resizeMode="cover"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#0D0D0D",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 60
    },
    image: {
        width: 110,
        height: 32,
    },
})