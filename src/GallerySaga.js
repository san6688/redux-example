import { takeEvery, put, call, takeLatest } from 'redux-saga/effects';
import { FETCH_PHOTOS_REQUEST } from './GalleryActionType';
import { getPhotosSuccess } from './GalleryActions';
import axios from "axios";
 
export default function* galleryWatcher(){
  yield takeEvery(FETCH_PHOTOS_REQUEST,getPhotosWorker);
}

function* getPhotosWorker(){
  const response = yield call(getPhotosFromApi);
  yield put(getPhotosSuccess(response.data));
}

function getPhotosFromApi(){  
  return axios.get('https://picsum.photos/v2/list?page=1&limit=10');
}