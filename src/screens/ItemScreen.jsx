import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Feather } from '@expo/vector-icons';

import { THEME } from "../theme";
import MyModal from "../components/MyModal";
import AppButton from "../components/ui/AppButton";


const ItemScreen = ({ targetTodo, closeTodo, deleteTodo, saveChange }) => {
    const [visibleModal, setVisibleModal] = useState(false);

    return (
        <View style={styles.wrapper}>
            <View style={styles.todo}>
                <Text style={styles.text}>{targetTodo.title}</Text>
                <AppButton onPress={() => setVisibleModal(true)} color={THEME.MAIN_COLOR}>
                    <Feather name="edit" size={20} color="#fff" />
                </AppButton>
            </View>
            <View style={styles.buttonGroup}>
                <AppButton onPress={() => closeTodo(null)} color={THEME.GREY_COLOR} width={150}>Назад</AppButton>
                <AppButton onPress={() => deleteTodo(targetTodo.id)} color={THEME.DANGER_COLOR} width={150}>Удалить</AppButton>
            </View>
            <MyModal visibleModal={visibleModal} setVisibleModal={setVisibleModal} saveChange={saveChange} targetTodo={targetTodo} />
        </View>
    )
}




const styles = StyleSheet.create({
    wrapper: {
        height: 300,
        marginTop: 100,
    },
    todo: {
        padding: 20,
        minHeight: 150,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 15,
        shadowColor: '#000',
        backgroundColor: '#fff',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
    },
    text: {
        fontSize: 20,
        flexWrap: 'wrap',
        flexShrink: 1,
        paddingRight: 10,
        fontFamily: 'Roboto-Regular',
    },
    buttonGroup: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})

export default ItemScreen;