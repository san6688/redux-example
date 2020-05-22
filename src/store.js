import React from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import GalleryReducer from './GalleryReducer';
import TodoReducer from './Todo/TodoReducer';
import CreateSagaMiddleware from 'redux-saga';
import GalleryWatcher from './GallerySaga';
import todoSagaWatcher from './Todo/TodoSaga'

const sagaMiddleware = CreateSagaMiddleware();

const store = createStore(combineReducers({
  todos: TodoReducer,
  gallery: GalleryReducer,
}),applyMiddleware(sagaMiddleware));

sagaMiddleware.run(todoSagaWatcher);

export default store;