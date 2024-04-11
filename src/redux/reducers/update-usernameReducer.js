import { UPDATE_USERNAME } from "../actions/update-usernameAction";

const initialState = {
    userName : null, 
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_USERNAME:
            return {
                ...state,
                userName: action.payload, // Mettez à jour userName avec le payload de l'action
            };
        default:
            return state;
    }
}