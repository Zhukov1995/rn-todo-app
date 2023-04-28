import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import Todo from './Todo';

const TodoList = ({ alert }) => {
    const todos = useSelector(state => state.todos);

    return (
        <FlatList
            style={styles.todoList}
            keyExtractor={item => item.id}
            data={todos}
            renderItem={({ item }) => <Todo alert={alert} todo={item} key={item.id} />}
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