import * as TodoActionTypes from './TodoActionType';

export const getTodoListSuccess = (todoList) => {
  return {
    type: TodoActionTypes.GET_TODOS_SUCCESS,
    payload: { responseData: todoList }
  }
}

export const getTodoListError = () => {
  return {
    type: TodoActionTypes.GET_TODOS_FAILURE
  }
}

export const getTodoList = () => {
  return {
    type: TodoActionTypes.GET_TODOS_REQUEST
  }
}

export const updateCompleted = (id) => {
  return {
    type: TodoActionTypes.UPDATE_TODO_COMPLETE,
    payload: { id } 
  }
}

export const updateCompletedSuccess = () => {
  return {
    type: TodoActionTypes.UPDATE_TODO_COMPLETE_SUCCESS
  }
}

export const deleteItemAction = (id) => {
  return {
    type: TodoActionTypes.DELETE_ITEM,
    payload: { id } 
  }
}

export const deleteItemSucess = () => {
  return {
    type: TodoActionTypes.DELETE_ITEM_SUCCESS
  }
}