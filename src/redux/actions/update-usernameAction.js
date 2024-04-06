export const UPDATE_USERNAME = "UPDATE_USERNAME";

export const updateUsername = (firstName) => ({
    type: UPDATE_USERNAME,
    payload: firstName,
});