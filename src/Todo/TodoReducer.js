import React from 'react';
import * as Immutable from 'immutable';
import * as actionType from './TodoActionType';

const initialState = Immutable.Map({
  isFetching: false,
  todoList: Immutable.List(),
});

const TodoReducer = (state = initialState, action) => {
  switch(action.type){
    case actionType.GET_TODOS_SUCCESS:{
      const apiResponse = action.payload.responseData;
      return state.set('isFetching', false)
                  .set('todoList',Immutable.List(apiResponse));
    }
    case actionType.GET_TODOS_REQUEST: {
      return state.set('isFetching', true);
    }
    default: {
      return state;
    }    
  }
}

export default TodoReducer;