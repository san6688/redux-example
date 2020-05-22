import { takeEvery, call, put } from 'redux-saga/effects';
import axios from "axios";
import * as TodoActionTypes from './TodoActionType';
import { getTodoListSuccess, updateCompletedSuccess } from './TodoActions';

function* getTodoWorker(){
  const response = yield call(getTodoFromApi);
  yield put(getTodoListSuccess(response.data));
}

function getTodoFromApi(){  
  return axios.get('https://todo-hapi-postgres.herokuapp.com/');
}

function* markTodoComplete(action){
  const id =action.payload.id;
  const response = yield call(updateTodo, id);  
  yield put(updateCompletedSuccess());
}

function updateTodo(id){
  return axios.patch(`https://todo-hapi-postgres.herokuapp.com/${id}`,{completed: true});
}

export default function* todoSagaWatcher(){
  yield takeEvery(TodoActionTypes.GET_TODOS_REQUEST, getTodoWorker);
  yield takeEvery(TodoActionTypes.UPDATE_TODO_COMPLETE, markTodoComplete);
  yield takeEvery(TodoActionTypes.UPDATE_TODO_COMPLETE_SUCCESS,getTodoWorker); 
}