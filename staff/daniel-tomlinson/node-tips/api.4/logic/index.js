module.exports = {
  registerUser: require("./user/registerUser"),
  authenticateUser: require("./user/authenticateUser"),
  retrieveUser: require("./user/retrieveUser"),
  updatePassword: require("./user/updatePassword"),
  createNote: require("./notes/createNote"),
  retrieveNotes: require("./notes/retrieveNotes"),
  updateNote: require("./notes/updateNote"),
  deleteNote: require("./notes/deleteNote"),
};
