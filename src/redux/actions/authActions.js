export const login = (email, password) => {
  return async (dispatch) => {
    dispatch({ type: "LOGIN_REQUEST" });

    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        dispatch({ type: "LOGIN_FAILURE", payload: "Login failed" });
      } else {
        localStorage.setItem("token", data.body.token);

        const userResponse = await fetch(
          "http://localhost:3001/api/v1/user/profile",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${data.body.token}`,
            },
          }
        );
        const userData = await userResponse.json();
        localStorage.setItem("firstName", userData.body.firstName);
        localStorage.setItem("lastName", userData.body.lastName);
        localStorage.setItem("userID", userData.body.id);

        let firstName = localStorage.getItem("firstName");
        let lastName = localStorage.getItem("lastName");
        let UserName = lastName + " " + firstName;

        localStorage.setItem("UserName", UserName); // Mettez à jour le nom d'utilisateur dans le localStorage

        dispatch({ type: "LOGIN_SUCCESS", payload: UserName });

        dispatch({
          type: "LOGIN_SUCCESS",
          payload: { userName: userData.body.userName },
        });
      }
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.message });
    }
  };
};

export const logout = () => {
  return (dispatch) => {
    // Supprimez les informations de l'utilisateur du stockage local
    localStorage.removeItem("token");
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    localStorage.removeItem("userID");
    localStorage.removeItem("UserName");

    dispatch({ type: "LOGOUT" });
  };
};
