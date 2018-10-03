import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'thunk';

const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(
        thunk,
      ),
    ),
  );

  export default store