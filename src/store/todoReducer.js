import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    todos: [],
    todoId: null,
    loading: false,
    error: null
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: {
            reducer: (state, action) => {
                const todo = { id: action.payload.id, title: action.payload.title }
                state.todos.push(todo);
            },
            prepare: (id, title) => {
                return { payload: { id, title } }
            }
        },
        removeTodo(state, action) {
            const newTodos = state.todos.filter(item => item.id !== action.payload);
            state.todos = newTodos;
        },
        updateTodo: {
            reducer: (state, action) => {
                state.todos = state.todos.map(todo => {
                    if (todo.id === action.payload.id) {
                        todo.title = action.payload.text
                    }
                    return todo;
                })
            },
            prepare: (id, text) => {
                return {
                    payload: {
                        id,
                        text
                    }
                }
            }
        },
        setTodoId(state, action) {
            state.todoId = action.payload
        },
        showLoader(state) {
            state.loading = true
        },
        hideLoader(state) {
            state.loading = false
        },
        showError(state, action) {
            state.error = action.payload
        },
        clearError(state) {
            state.error = null
        },
        fetchTodos(state, action) {
            state.todos = action.payload
        },
    }
})

export const {
    addTodo,
    removeTodo,
    updateTodo,
    setTodoId,
    fetchTodos,
    showError,
    clearError,
    showLoader,
    hideLoader
} = todoSlice.actions;
export default todoSlice.reducer;