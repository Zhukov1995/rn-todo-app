import { useState } from "react";
import { Modal, View, StyleSheet, TextInput, Alert } from "react-native";

import { THEME } from "../theme";
import AppButton from "./ui/AppButton";

const MyModal = ({ visibleModal, setVisibleModal, saveChange, targetTodo }) => {
    const [value, setValue] = useState(targetTodo.title);

    const onSave = () => {
        if (value !== '') {
            saveChange(targetTodo.id, value);
            setVisibleModal(!visibleModal);
        } else {
            Alert.alert('Значение не может быть менее 3 символов!');
        }
    }

    const onCancel = () => {
        setVisibleModal(!visibleModal);
        setValue(targetTodo.title);
    }

    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={visibleModal}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setVisibleModal(!visibleModal);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <TextInput
                        maxLength={250}
                        style={styles.modalInput}
                        placeholder="Введите новое значение"
                        onChangeText={setValue}
                        value={value}
                    />
                    <View style={styles.buttonGroup}>
                        <AppButton
                            onPress={() => onCancel()}
                            color={THEME.DANGER_COLOR}>
                            Отменить
                        </AppButton>
                        <AppButton
                            onPress={() => onSave()}
                            color={THEME.MAIN_COLOR}>
                            Сохранить
                        </AppButton>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default MyModal;


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        width: '100%',
        height: '100%',
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 0,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 4,
    },
    buttonGroup: {
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalInput: {
        fontSize: 20,
        width: '60%',
        padding: 5,
        marginBottom: 20,
        textAlign: 'center',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: THEME.MAIN_COLOR,
    },
});