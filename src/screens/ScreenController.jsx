import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "react-native";

import MainScreen from "./MainScreen";
import ItemScreen from "./ItemScreen";
import { setTodoId, removeTodo } from "../store/todoReducer";
import { Fetch } from "../service/fetch";

const ScreenController = () => {
    const todoId = useSelector(state => state.todoId);
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    // если пользователь согласен, удаляем из state и из базы данных
    const alert = (id) => {
        const todo = todos.filter(item => item.id === id)[0];
        Alert.alert(
            'Удаление элемента',
            `Вы действительно хотите удалить элемент ${todo.title}?`,
            [
                {
                    text: 'Отмена',
                    onPress: () => { },
                    style: 'cancel',
                },
                {
                    text: 'Удалить',
                    onPress: async () => {
                        dispatch(setTodoId(null));
                        await Fetch.delete(id);
                        dispatch(removeTodo(id));
                    },
                    style: 'destructive',
                },
            ],
            {
                cancelable: true,
                onDismiss: () =>
                    Alert.alert(
                        'This alert was dismissed by tapping outside of the alert dialog.',
                    ),
            },
        );

    }

    // контроллер 

    let screen = <MainScreen alert={alert} />

    if (todoId) {
        const targetTodo = todos.filter(item => item.id === todoId)[0];
        screen = <ItemScreen targetTodo={targetTodo} alert={alert} />
    }

    return screen
}

export default ScreenController;