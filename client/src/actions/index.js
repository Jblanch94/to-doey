import { REGISTER_USER } from "./types";

export const registerUser = (formValues) => {
  return async (dispatch) => {
    //make request to api to register user with values provided
    const response = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    });

    //parse the data
    const data = await response.json();

    //set the token in session storage
    sessionStorage.setItem("token", data.token);
    return dispatch({
      type: REGISTER_USER,
      payload: data,
    });
  };
};
