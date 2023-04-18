import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

const AppButton = ({ children, onPress, color, width }) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
            <View style={{ ...styles.button, backgroundColor: color, width: width }}>
                <Text style={styles.text}>{children}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default AppButton;

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff'
    }
})