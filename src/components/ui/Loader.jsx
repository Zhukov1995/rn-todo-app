import React from "react";
import { View, StyleSheet, ActivityIndicator } from 'react-native';

import { THEME } from "../../theme";

const Loader = () => {
    return (
        <View style={styles.container} >
            <ActivityIndicator size='large' color={THEME.MAIN_COLOR} />
        </View>
    )
}

export default Loader;

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        justifyContent: 'center'
    },
})