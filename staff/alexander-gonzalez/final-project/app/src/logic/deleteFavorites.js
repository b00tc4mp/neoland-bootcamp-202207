//  const API_URL = process.env.REACT_APP_API_URL;


// // function deleteFavorites(token, placeId, callback) {
// //   if (typeof token !== "string") throw new TypeError("token is not a string");
// //   if (token.trim().length === 0) throw new Error("token is empty or blank");

// //   if (typeof placeId !== "string")
// //     throw new TypeError("place id is not a string");
// //   if (placeId.trim().length === 0)
// //     throw new Error("place id is empty or blank");

// //   if (typeof callback !== "function")
// //     throw new TypeError("callback is not a function");

// //   const xhr = new XMLHttpRequest();

// //   xhr.onload = function () {
// //     const status = xhr.status;

// //     if (status >= 500) callback(new Error(`server error(${status})`));
// //     else if (status >= 400) callback(new Error(`client error(${status})`));
// //     else if (status === 200) callback(null);
// //   };

// //   xhr.open("DELETE", `${API_URL}/place/${placeId}`);

// //   xhr.setRequestHeader("Authorization", `Bearer ${token}`);

// //   xhr.send(JSON.stringify({ placeId }));
// // }

// // export default deleteFavorites;


// function deletePlace(token, placeId, callback) {
    
//     if (typeof token !== 'string') throw new TypeError('user id is not a string')
//     if (token.trim().length === 0) throw new Error('user id is empty or blank')

//     if (typeof placeId !== 'string') throw new TypeError('place id is not a string')
//     if (placeId.trim().length === 0) throw new Error('place id is empty or blank')

//     if (typeof callback !== 'function') throw new TypeError('callback is not a function')



//     const xhr = new XMLHttpRequest

//     // response

//     xhr.onload = function () {
//         const status = xhr.status

//         if (status >= 500)
//             callback(new Error(`server error (${status})`))
//         else if (status >= 400)
//             callback(new Error(`client error (${status})`))
//         else if (status === 200) {
//             const Json= xhr.responseText

//             const data = JSON.parse(Json)

//             const places = data.places ? data.places :[]

//         const placeIndex = places.findIndex(place => place.id === placeId)

//         if (placeIndex < 0) {
//             callback(new Error(`place with id ${placeId} not found`))

//             return
//         }

//         places.splice(placeIndex, 1)


//            // note.text = text

//             const xhr2 = new XMLHttpRequest

//             // response

//             xhr2.onload = function () {
//                 const status = xhr2.status

//                 if (status >= 500)
//                     callback(new Error(`server error (${status})`))
//                 else if (status >= 400)
//                     callback(new Error(`client error (${status})`))
//                 else if (status === 204)
//                     callback(null)
//             }

//             // request

//             xhr2.open('DELETE', 'https://b00tc4mp.herokuapp.com/api/v2/users')

//             xhr2.setRequestHeader('Authorization', `Bearer ${token}`)
//             xhr2.setRequestHeader('Content-type', 'application/json')

//             //const json2 = JSON.stringify({ notes: notes })
//             const json2 = JSON.stringify({ places })

//             xhr2.send(json2)
//         }
//     }

//     // request

//     xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

//     xhr.setRequestHeader('Authorization', `Bearer ${token}`)

//     xhr.send()
// }

// export default deletePlace