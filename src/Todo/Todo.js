import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { getTodoList, updateCompleted, deleteItemAction } from './TodoActions';
import TodoItem from './TodoItem';

class Todo extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getTodoList();
  }

  render(){
    return (
      <div style={{ paddingTop: 20}}>
      {
        this.props.isLoading && <div align="center" style={{ paddingTop: 20}}><CircularProgress /></div>
      }
      {
        !this.props.isLoading && this.props.todoList?.map((_todo, index) => <TodoItem todo={_todo} handleComplete={this.props.updateCompleted} handleDelete={this.props.deleteItemAction}/>)
      }
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    todoList : state.todos.get('todoList'),
    isLoading: state.todos.get('isFetching'),
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getTodoList,
    updateCompleted,
    deleteItemAction,
  },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Todo);