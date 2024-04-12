import { UPDATE_USERNAME } from "../actions/update-usernameAction";

const initialState = {
    userName : null, 
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_USERNAME:
            return {
                ...state,
                user: {
                    ...state.user,
                    name: action.payload, // Mettez à jour le nom d'utilisateur avec le payload de l'action
                },
            };
        default:
            return state;
    }
}