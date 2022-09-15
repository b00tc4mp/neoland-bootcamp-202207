const API_URL = process.env.REACT_APP_API_URL;

function updatePassword(
  token,
  oldPassword,
  newPassword,
  confirmNewPassword,
  callback
) {
  //====== validation ======//
  if (typeof token !== "string") throw new TypeError("token is not a string");
  if (token.trim().length === 0) throw new Error("token is empty or blank");

  if (typeof newPassword !== "string")
    throw new TypeError("new password is not a string");
  if (newPassword.trim().length === 0)
    throw new Error("new password is empty or blank");
  //TO DO validate type of name e.g. first name / surname

  if (newPassword.trim() !== confirmNewPassword.trim())
    throw new Error("passwords do  not match");

  if (newPassword.length < 8)
    throw new Error("password length is less than 8 characters");
  //TO DO validate safe passwords

  if (typeof callback !== "function")
    throw new TypeError("callback is not a function");

  //======== validation ========//

  // retrieve user
  /* 
  const update = {
    oldPassword,
    password: newPassword,
  }; */

  const xhr = new XMLHttpRequest();

  //response

  xhr.onload = function () {
    const status = xhr.status;

    console.log(status);

    if (status >= 500) callback(new Error(`server error(${status})`));
    else if (status >= 400) callback(new Error(`client error(${status})`));
    else if (status === 204) {
      xhr.onerror = function () {
        console.log("API CALL ERROR");
      };
      callback(null);
    }
  };
  // XMLHttprequest

  xhr.open("PATCH", `${API_URL}/users/password`);

  xhr.setRequestHeader("Authorization", `Bearer ${token}`);
  xhr.setRequestHeader("Content-type", "application/json");

  xhr.send(JSON.stringify({ oldPassword: oldPassword, password: newPassword }));
}

export default updatePassword;
