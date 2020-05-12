This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Redux Saga

Redux-saga is a redux middleware library, that is designed to make handling side effects in your redux app. It achieves this by leveraging an ES6 feature called Generators, allowing us to write asynchronous code that looks synchronous.

![Saga middleware Flow](data:image/png;base64,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)

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


