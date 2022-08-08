function authenticateUser(email, password, callback) {
  if (typeof email !== "string") throw new TypeError("email is not a string");
  if (email.trim().length === 0) throw new Error("email is empty or blank");
  if (email.length < 6) throw new Error("email length is not valid");
  //TO DO validate email format (username@domain.xyz)

  if (typeof password !== "string")
    throw new TypeError("password is not a string");
  if (password.trim().length === 0)
    throw new Error("password is empty or blank");
  if (password.length < 8)
    throw new Error("password length is less than 8 characters");
  //TO DO validate safe passwords

  if (typeof callback !== "function")
    throw new TypeError("callback is not a function");

  const user = users.find(function (user) {
    return user.email === email && user.password === password;
  });

  if (!user) {
    callback(new Error("wrong credentials"));

    return;
  }

  callback(null);
}
