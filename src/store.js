import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import GalleryReducer from './GalleryReducer';
import CreateSagaMiddleware from 'redux-saga';
import GalleryWatcher from './GallerySaga';

const sagaMiddleware = CreateSagaMiddleware();

const store = createStore(GalleryReducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(GalleryWatcher);

export default store;