import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const TaskForm = props => {
    return (
        <Paper style={{ textAlign: 'center', padding: '10px 0' }}>
            <Typography variant="h6" gutterBottom color="primary">
                Add New Task
            </Typography>
            <form autoComplete="off" onSubmit={props.onFormSubmit}>
                <TextField style={{ width: '50%' }}
                    label="New Task ..."
                    variant="outlined"
                    value={props.title}
                    onChange={props.oninputChange}
                />
                <br />
                <Button
                    variant="contained"
                    color="primary"
                    style={{ margin: '10px auto' }}
                    type="submit"
                    disabled={!props.title.length}
                >
                    Add Task
                </Button>
            </form>
        </Paper>
    );
}

export default TaskForm;
