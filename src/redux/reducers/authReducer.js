import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../actions/authActions";

const initialState = {
  user: null,
  error: null,
  isLoading: false,
  id: null,
  token: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return { ...state, isLoading: true };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuthenticated: true,
        user: {
          ...state.user,
          name: action.payload.userName,
          id: localStorage.getItem("userID"), // Récupérez l'ID de l'utilisateur dans le stockage local
        },
        isLoading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return { ...state, error: action.payload, isLoading: false };
    case "LOGOUT":
      return initialState; // Réinitialisez l'état à l'état initial lors de la déconnexion
    default:
      return state;
  }
};

export default authReducer;