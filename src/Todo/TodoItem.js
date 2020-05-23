import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import DoneIcon from '@material-ui/icons/Done';

const TodoItem = (props) => {
  const { todo } = props;
  return (
    <Card elevation={5} style={{ margin: 10,  textDecoration: todo.completed ? 'line-through' : ''  }} >
      <Typography variant="h5" align="center">{todo.title}</Typography>
      <div align="center">
      <IconButton onClick={() => props.handleComplete(todo.id)}><DoneIcon /></IconButton>
      <IconButton onClick={() => props.handleDelete(todo.id)}><DeleteIcon /></IconButton>
      </div>
      </Card>
  );
}
export default TodoItem;