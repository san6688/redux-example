import React from 'react';
import Card from '@material-ui/core/Card';

const TodoItem = (props) => {
  const { todo } = props;
  return (
    <Card elevation={5} style={{ margin: 10,  textDecoration: todo.completed ? 'line-through' : ''  }} onClick={ () => props.handleClick(todo.id)} >{todo.title}</Card>
  );
}
export default TodoItem;