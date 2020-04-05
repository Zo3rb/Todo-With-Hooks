import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TodoList from './TodoList';
import TaskForm from './TaskForm';
import uuid from 'uuid/v4'

const Todos = () => {

    const initialTodos = []
    const [todos, setTodos] = useState(initialTodos)
    const [title, setTitle] = useState('')

    const onFormSubmit = e => {
        e.preventDefault()
        setTodos([...todos, { id: uuid(), task: title, isCompleted: false }])
        setTitle('')
    }

    const oninputChange = e => {
        setTitle(e.target.value)
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const deleteAllTodos = () => {
        setTodos([])
    }

    const editTodo = id => {
        const item = todos.find(todo => todo.id === id)
        setTodos(todos.filter(todo => todo.id !== id))
        setTitle(item.task)
    }

    const completedTodo = id => {
        const updatedTodos = todos.map(todo => {
            return todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        })
        setTodos(updatedTodos)
    }

    return (
        <Paper style={{ background: '#2c3e50', minHeight: '100vh', color: '#ecf0f1' }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={{ textAlign: 'center', margin: 'auto' }}>
                        Todo App With Hooks and Material UI
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify="center" style={{ marginTop: '50px' }}>
                <Grid item xs={11} md={8}>
                    <TaskForm onFormSubmit={onFormSubmit}
                        title={title}
                        oninputChange={oninputChange}
                        deleteAllTodos={deleteAllTodos}
                    />
                    <TodoList todos={todos}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                        completedTodo={completedTodo}
                    />
                </Grid>
            </Grid>
            <Grid container justify="center">
                <Grid item xs={6} md={5}>
                    <Button variant="contained"
                        color="secondary"
                        style={{ margin: '10px auto', display: 'block', width: "100%" }}
                        onClick={deleteAllTodos}
                        disabled={!todos.length}
                    >
                        Clear All Tasks
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default Todos;
