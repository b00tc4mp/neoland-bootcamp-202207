const API_URL = process.env.REACT_APP_API_URL;

/**
 * Deletes an place from database
 *
 * @param {string} token The user session token
 * @param {string} placeId The place identifier
 * @param {function} callback The function expression that provides a result
 *
 * @throws {TypeError} On invalid inputs
 */

function deletePlace (token, placeId, callback) {
  if (typeof token !== "string") throw new TypeError("token is not a string");
  if (token.trim().length === 0) throw new Error("token is empty or blank");

  if (typeof placeId !== "string")
    throw new TypeError("place id is not a string");
  if (placeId.trim().length === 0)
    throw new Error("place id is empty or blank");

  if (typeof callback !== "function")
    throw new TypeError("callback is not a function");

  const xhr = new XMLHttpRequest();

  xhr.onload = function () {
    const status = xhr.status;

    debugger

    if (status >= 500) callback(new Error(`server error(${status})`));
    else if (status >= 400) callback(new Error(`client error(${status})`));
    else if (status === 200) callback(null);
  };

    debugger
    
  xhr.open("DELETE", `${API_URL}/places/${placeId}`);

  xhr.setRequestHeader("Authorization", `Bearer ${token}`);

  xhr.send(JSON.stringify({ placeId }));
}

export default deletePlace;