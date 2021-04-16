import { createStore } from 'redux'
import incompleteReducer from './incompleteReducer';
import completedReducer from './completedReducer';
import currentLocationsReducer from './currentLocationsReducer';
import previousLocationsReducer from './previousLocationsReducer';
import { combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
    incompleteReducer,
    completedReducer,
    currentLocationsReducer,
    previousLocationsReducer
  })

const store = createStore(rootReducer, applyMiddleware(thunk))
export default store;