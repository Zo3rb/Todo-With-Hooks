import React, { Fragment, useState } from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

const SingleTodo = props => {

    const iconStyles = {
        marginRight: '10px',
        cursor: 'pointer',
        color: ''
    }

    const renderTodos = () => {
        return props.todos.map(todo => {
            return (
                <ListItem key={todo.id}>
                    <Checkbox checked={props.isCompleted} onClick={() => props.completedTodo(todo.id)} />
                    <ListItemText
                        style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}
                    >
                        {todo.task}
                    </ListItemText>
                    <span className="material-icons"
                        style={{ ...iconStyles, color: 'green' }}
                        onClick={() => props.editTodo(todo.id)}
                    >
                        create
                        </span>
                    <span className="material-icons"
                        style={{ ...iconStyles, color: 'red' }}
                        onClick={() => props.deleteTodo(todo.id)}
                    >
                        delete
                        </span>
                </ListItem>
            )
        })
    }

    const renderWelcome = () => {
        return (
            <Typography variant="h6"
                gutterBottom
                style={{
                    padding: '10px auto', textAlign: 'center', color: 'white', backgroundColor: '#3F51B5'
                }}
            >
                You Can Add Tasks Now
            </Typography>
        )
    }

    return (
        <Fragment>
            {props.todos.length ? renderTodos() : renderWelcome()}
        </Fragment>
    );
}

export default SingleTodo;
