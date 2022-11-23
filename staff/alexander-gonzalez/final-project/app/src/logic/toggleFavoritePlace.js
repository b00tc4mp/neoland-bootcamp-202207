const API_URL = process.env.REACT_APP_API_URL;

function toggleFavoritePlace(token, placeId, callback) {
  //====== validation ======//
  if (typeof token !== "string") throw new TypeError("token is not a string");
  if (token.trim().length === 0) throw new Error("token is empty or blank");

  // TODO: validation

  if (typeof callback !== "function")
    throw new TypeError("callback is not a function");

  //======== validation ========//

  const xhr = new XMLHttpRequest();


  //response

  xhr.onload = function () {
    const status = xhr.status;

    console.log(status);

    if (status >= 500) callback(new Error(`server error(${status})`));
    else if (status >= 400) callback(new Error(`client error(${status})`));
    else if (status === 200) {
      const json = xhr.responseText;
      console.log(json)
      const data = JSON.parse(json);

      callback(null, data);
    }
  };
  // XMLHttprequest
  xhr.onerror = function () {
    console.log("API CALL ERROR");
  };
  xhr.open("PATCH", `${API_URL}/users`);

  xhr.setRequestHeader("Authorization", `Bearer ${token}`);
  xhr.setRequestHeader("Content-type", "application/json");

  xhr.send(JSON.stringify({ placeId: placeId }));
}

export default toggleFavoritePlace;