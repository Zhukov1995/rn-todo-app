import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

import Navbar from './src/components/Navbar';
import MainScreen from './src/screens/MainScreen';
import ItemScreen from './src/screens/ItemScreen';

export default function App() {
  const [todoId, setTodoId] = useState(null);
  const [todos, setTodos] = useState([]);
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./src/assest/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./src/assest/fonts/Roboto-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const addTodo = (title) => {
    const todo = {
      id: Date.now().toString(),
      title: title
    }
    setTodos(prev => [...prev, todo]);
  }

  const deleteTodo = (id) => {
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
          onPress: () => {
            setTodoId(null);
            const newTodos = todos.filter(item => item.id !== id);
            setTodos(newTodos);
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

  const saveChange = (id, text) => {
    setTodos(todos => todos.map(todo => {
      if (todo.id === id) {
        todo.title = text;
      }
      return todo;
    }))
  }

  let screen = <MainScreen addTodo={addTodo} deleteTodo={deleteTodo} todos={todos} openTodo={(id) => setTodoId(id)} />;

  if (todoId) {
    const targetTodo = todos.filter(item => item.id === todoId)[0];
    screen = (
      <ItemScreen
        targetTodo={targetTodo}
        closeTodo={setTodoId}
        deleteTodo={deleteTodo}
        saveChange={saveChange}
      />
    )
  }


  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Navbar title='_Список задач_' />
      <View style={styles.content}>
        {screen}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  }
});
