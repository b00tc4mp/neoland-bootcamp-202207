const API_URL = process.env.REACT_APP_API_URL;

function retrieveQuestionsPublic(callback) {
  if (typeof callback !== "function")
    throw new TypeError("callback is not a function");

  const xhr = new XMLHttpRequest();

  xhr.onload = function () {
    const status = xhr.status;

    if (status >= 500) callback(new Error(`server error(${status})`));
    else if (status >= 400) callback(new Error(`client error(${status})`));
    else if (status === 200) {
      const json = xhr.responseText;

      const data = JSON.parse(json);

      callback(null, data.reverse());
    }
  };

  xhr.open("GET", `${API_URL}/questions/public`);

  xhr.setRequestHeader("Content-type", "application/json");

  xhr.send();
}

export default retrieveQuestionsPublic;
