import React, { useState } from "react";
import { View, StyleSheet, TextInput, Alert, Keyboard } from 'react-native';
import { useDispatch } from "react-redux";

import { THEME } from "../theme";
import AppButton from "./ui/AppButton";
import { addTodo } from "../store/todoReducer";
import { Fetch } from "../service/fetch";

const AddTodo = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    // добавляем в базу данных и в state
    const addTodoFetch = async () => {
        const data = await Fetch.post(value);
        dispatch(addTodo(data.id, value));
    }

    // если значение пусто выводим Alert, и ничего не добавляем 
    const onValidate = () => {
        if (value !== '') {
            addTodoFetch()
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
