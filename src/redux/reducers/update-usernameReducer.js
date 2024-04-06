import { UPDATE_USERNAME } from "../actions/update-usernameAction";

const initialState = {
    userName : null, 
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_USERNAME:
            return {
                ...state,
                userName: {
                    ...state.userName,
                    firstName: action.payload,
                },
            };
        default:
            return state;
    }
}