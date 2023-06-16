import { View, ActivityIndicator } from "react-native";
import {StatusBar} from "expo-status-bar"

export function Loading() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#333333'}}>
            <StatusBar 
                backgroundColor="transparent"
                style="light"
                translucent
            />
            <ActivityIndicator color="#4EA8DE" size="large" />
        </View>
    );
}