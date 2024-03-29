import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../actions/authActions";



const initialState = {
    user: null,
    error: null,
    isLoading: false,
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
                name: action.payload,
                id: localStorage.getItem("userID"), // Ajoutez cette ligne
              },
              loading: false,
              error: null,
            };
      case "LOGIN_FAILURE":
        return { ...state, error: action.payload, isLoading: false };
        case "LOGOUT":
            return {
              ...state,
              isAuthenticated: false,
              user: null,
              loading: false,
              error: null,
            };
      default:
        return state;
    }
  };
  
  export default authReducer;