const mongoose = require("mongoose");

const {
  Schema,
  model,
  Types: { ObjectId },
} = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
});

const User = model("User", userSchema);

const note = new Schema({
  user: {
    type: ObjectId,
    required: true,
    ref: "User",
  },
  text: {
    type: String,
    default: "",
  },
});

const Note = model("Note", note);

(async () => {
  try {
    console.log(`pppp`);
    const connection = await mongoose.connect(
      "mongodb://127.0.0.1:27017/postits"
    );
    console.log(`pppp2222`);

    await User.deleteMany({});

    const _user = await User.create({
      name: "Pepito Grillo",
      email: "pepito@grillo.com",
      password: "123123123",
      hello: "world",
    });

    console.log("user", _user);

    const note = await Note.create({ user: _user.id, text: "hola mundo" });

    console.log("note", note);

    const noteId = note.id;

    const notePopulated = await Note.findById(noteId).populate("user");

    console.log("note", notePopulated);

    await connection.disconnect();

    console.log("disconnected");
  } catch (error) {
    console.error("ERROR", error);
  }
})();
