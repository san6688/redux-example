This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Redux Saga

Redux-saga is a redux middleware library, that is designed to make handling side effects in your redux app. It achieves this by leveraging an ES6 feature called Generators, allowing us to write asynchronous code that looks synchronous.

![Saga middleware Flow](https://miro.medium.com/max/1400/1*zuYB7frl0mE7sMPVa6lGdQ.png)

![Redux Saga](https://miro.medium.com/max/843/0*JhQmOmcPnbGhmiH7.png)

### `Steps To implement Saga flow`
#### Watcher Generator function
A watcher Generator function listens for an action type, much like a reducer.
Its like a routing Map for each Action specified in Watcher , corresponding redirect the action to Worker Function.
Watcher generally use saga effects *takeEvery* or *takeLatest*
````
export default function* galleryWatcher(){
  yield takeEvery(FETCH_PHOTOS_REQUEST,getPhotosWorker);
}
````

#### Worker Generator function
A Worker Generator function is the one actually do our async actions(api call) and which inturn dispatch an action with api response. Make sure Worker returns action which will update our store using reducer.

To dispatch new action, always use *put* effect from redux saga
To call Async actions, use *Call* effect from redux saga
````
function* getPhotosWorker(){
  //api call;
  const response = yield call(getPhotosFromApi);
  //dispatching new action to reducer
  yield put(getPhotosSuccess(response.data))
}
````

#### Create Saga Middleware instance and apply to Redux Store
```
import GalleryWatcher from './GallerySaga';

const sagaMiddleware = CreateSagaMiddleware();

const store = createStore(GalleryReducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(GalleryWatcher);

```


