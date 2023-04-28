import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { useSelector } from "react-redux";

import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";

const MainScreen = ({ alert }) => {
    const todos = useSelector(state => state.todos);

    return (
        <View>
            <AddTodo />
            <>
                {!todos.length ?
                    <Image resizeMode='center' source={require('../assest/no-items.png')} style={styles.img} />
                    :
                    <TodoList alert={alert} />
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