import React from 'react';
import * as Immutable from 'immutable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { getPhotos } from './GalleryActions';

const Gallery = (props) => { 
  return (
    <div style={{ margin:50, padding: 50}}>
      <Button color="primary" variant="contained" onClick={() => props.getPhotos()}> Get Photos </Button>
      <div>
      {
        props.isFetching && <div align="center" style={{ paddingTop: 20}}><CircularProgress /></div>
      }
      {
        !props.isFetching && props.photos?.map((_photo, index) => <img key={index} src={_photo.download_url} height='100' width='100' style={{margin:20}}/>)
      }
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    photos:state.get('photos'),
    isFetching: state.get('isFetching'),
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getPhotos
  }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Gallery);