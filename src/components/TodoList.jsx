import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import Todo from './Todo';

const TodoList = ({ todos, deleteTodo, openTodo }) => {

    return (
        <FlatList
            style={styles.todoList}
            keyExtractor={item => item.id}
            data={todos}
            renderItem={({ item }) => <Todo todo={item} deleteTodo={deleteTodo} onOpen={openTodo}/>}
        />
    )
}

export default TodoList;


const styles = StyleSheet.create({
    todoList: {
        marginTop: 10,
        height: '85%',
    }
});