import ActionType from '../actions/ActionTypes';

export const registerStatus = (state = '', action) => {
    switch (action.type) {
        case ActionType.REGISTER_STATUS:
            return action.payload;
        default:
            return state;
    }
}