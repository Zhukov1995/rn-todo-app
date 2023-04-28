import React, { useCallback, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Navbar from './src/components/Navbar';
import ScreenController from './src/screens/ScreenController';
import Loader from './src/components/ui/Loader';
import { showLoader, hideLoader, fetchTodos } from './src/store/todoReducer';
import { Fetch } from './src/service/fetch';

export default function AppMain() {
  const todos = useSelector(state => state.todos);
  const loading = useSelector(state => state.loading);
  const dispatch = useDispatch();

  // делаем запрос, контролируем loader, записываем в state 
  const getTodo = async () => {
    dispatch(showLoader());
    const newTodos = await Fetch.get();
    dispatch(hideLoader());
    dispatch(fetchTodos(newTodos));
  }

  // избавляемся от лишних запросов
  const loadTodos = useCallback(async () => await getTodo(), [getTodo]);

  useEffect(() => {
    loadTodos();
  }, [todos.length])

  const isLoading = loading ? <Loader /> : <ScreenController />

  return (
    <View>
      <Navbar title='_Список задач_' />
      <View style={styles.content}>
        {isLoading}
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
