import React from "react";
import { View, StyleSheet, Image } from "react-native";

import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";

const MainScreen = ({ addTodo, todos, deleteTodo, openTodo }) => {

    return (
        <View>
            <AddTodo onSubmit={addTodo} />
            <>
                {!todos.length ?
                    <Image resizeMode='center' source={require('../assest/no-items.png')} style={styles.img} />
                    :
                    <TodoList todos={todos} deleteTodo={deleteTodo} openTodo={openTodo} />
                }
            </>
        </View>
    )
}

export default MainScreen;


const styles = StyleSheet.create({
    img: {
        width: '100%',
    },
})