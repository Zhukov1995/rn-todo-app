import React, { useState } from "react";
import { View, StyleSheet, TextInput, Alert, Keyboard } from 'react-native';

import { THEME } from "../theme";
import AppButton from "./ui/AppButton";

const AddTodo = ({ onSubmit }) => {
    const [value, setValue] = useState('');

    const onValidate = () => {
        if (value !== '') {
            onSubmit(value);
            setValue('');
            Keyboard.dismiss();
        } else {
            Alert.alert('Значение не может быть пустым!');
        }
    }

    return (
        <View style={styles.block}>
            <TextInput
                maxLength={250}
                style={styles.input}
                placeholder="Новая задача..."
                onChangeText={setValue}
                value={value}
                autoCorrect={true}
                autoCapitalize='sentences'
            />
            <AppButton onPress={onValidate} color={THEME.MAIN_COLOR}>Добавить</AppButton>
        </View>
    )
}

export default AddTodo;


const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    input: {
        fontSize: 16,
        fontFamily: 'Roboto-Regular',
        width: '70%',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: THEME.MAIN_COLOR,
        padding: 10,
    }
});
