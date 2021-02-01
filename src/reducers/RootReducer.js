import { combineReducers } from 'redux';
import { registerStatus } from './Reducers';
import ActionType from '../actions/ActionTypes';

const appReducer = combineReducers({
    registerStatus: registerStatus,
});

const RootReducer = (state, action) => {
    if (action.type === ActionType.LOG_OUT) {
        state = undefined
    }

    return appReducer(state, action)
}

export default RootReducer;