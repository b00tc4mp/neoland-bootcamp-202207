function createNote(userId, callback) {
  //TODO input validation

  const user = users.find((user) => {
    return user.id === userId;
  });

  if (!user) {
    // const error = new Error("user with id ${userId} does not exist");

    // callback(error);

    callback(new Error("user with id " + userId + " not found"));

    return;
  }

  // notes.push({
  //   id: "notes- " + Date.now(),
  //   text: "",
  //   user: userId,
  // });

  const note = {
    id: "note- " + Date.now(),
    text: "",
    user: userId,
  };

  notes.push(note);

  callback(null);
}
