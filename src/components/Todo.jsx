import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const Todo = ({ todo, deleteTodo, onOpen }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            style={styles.todo}
            onLongPress={() => deleteTodo(todo.id)}
            delayLongPress={1000}
            onPress={() => onOpen(todo.id)}        >
            <Text style={styles.text}>{todo.title}</Text>
        </TouchableOpacity>
    )
}

export default Todo;

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#ecebeb',
        borderRadius: 5,
        marginBottom: 10,
        shadowColor: '#858484',
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.3,
    },
    text: {
        fontSize: 16,
        fontFamily: 'Roboto-Regular',
    }
})