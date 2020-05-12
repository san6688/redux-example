import * as actionType from './GalleryActionType';

export const getPhotos = () => {
  return {
    type: actionType.FETCH_PHOTOS_REQUEST, 
  }
}

export const getPhotosSuccess = (responseData) => {
  return {
    type: actionType.FETCH_PHOTOS_SUCCESS,
    payload: { responseData }
  }
}

export const getPhotosError = () => {
  return {
    type: actionType.FETCH_PHOTOS_ERROR,
  }
}