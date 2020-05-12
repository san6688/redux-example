import React from 'react';
import * as Immutable from 'immutable';
import * as actionType from './GalleryActionType';

const initialState = Immutable.Map({
  isFetching: false,
  photos: Immutable.List(),
});

const GalleryReducer = (state = initialState, action) => {
  switch(action.type){
    case actionType.FETCH_PHOTOS_SUCCESS:{
      const apiResponse = action.payload.responseData;
      return state.set('isFetching', false)
                  .set('photos',Immutable.List(apiResponse));
    }
    case actionType.FETCH_PHOTOS_REQUEST: {
      return state.set('isFetching', true);
    }
    default: {
      return state;
    }    
  }
}

export default GalleryReducer;