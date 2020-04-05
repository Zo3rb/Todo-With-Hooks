import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import SingleTodo from './SingleTodo';



const TodoList = props => {
    return (
        <Paper>
            <List>
                <SingleTodo
                    todos={props.todos}
                    deleteTodo={props.deleteTodo}
                    editTodo={props.editTodo}
                    completedTodo={props.completedTodo}
                />
                <Divider />
            </List>
        </Paper>
    );
}

export default TodoList;
