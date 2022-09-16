const { connect, disconnect } = require("mongoose");
const { User, Question } = require("./models");

connect("mongodb://127.0.0.1:27017/final-project")
  // .then(() => mongoose.connection.db.dropDatabase())
  .then(() => Promise.all([User.deleteMany(), Question.deleteMany()]))
  .then(() => {
    const pepito = new User({
      name: "Pepito Grillo",
      email: "pepito@grillo.com",
      password: "123123123",
      favorites: [],
    });

    const wendy = new User({
      name: "Wendy Darling",
      email: "wendy@darling.com",
      password: "12312123",
      favorites: [],
    });

    const peter = new User({
      name: "Peter Pan",
      email: "peter@pan.com",
      password: "123123123",
      favorites: [],
    });

    const james = new User({
      name: "James Hook",
      email: "james@hook.com",
      password: "123123123",
      favorites: [],
    });

    const pepito2 = new User({
      name: "Pepito Grillo",
      email: "pepito2@grillo2.com",
      password: "123123123",
      favorites: [],
    });

    const wendy2 = new User({
      name: "Wendy Darling",
      email: "wendy2@darling2.com",
      password: "12312123",
      favorites: [],
    });

    const peter2 = new User({
      name: "Peter Pan",
      email: "peter2@pan2.com",
      password: "123123123",
      favorites: [],
    });

    const james2 = new User({
      name: "James Hook",
      email: "james2@hook2.com",
      password: "123123123",
      favorites: [],
    });

    debugger;

    return Promise.all([
      pepito.save(),
      wendy.save(),
      peter.save(),
      james.save(),
      pepito2.save(),
      wendy2.save(),
      peter2.save(),
      james2.save(),
    ]);
  })
  /* .then((users) => {
    const [pepito, wendy, peter, james] = users;
  }) */
  .then(([pepito, wendy, peter, james, pepito2, wendy2, peter2, james2]) => {
    const question1 = new Question({
      user: pepito.id,
      question: "Hola, Pepito!",
      visibility: "public",
      timeLimit: 30000,
    });
    const question2 = new Question({
      user: wendy.id,
      question: "Hola, Wendy!",
      visibility: "public",
      timeLimit: 30000,
    });
    const question3 = new Question({
      user: peter.id,
      question: "Hola, Peter!",
      visibility: "public",
      timeLimit: 30000,
    });
    const question4 = new Question({
      user: james.id,
      question: "Hola, James!",
      visibility: "public",
      timeLimit: 30000,
    });
    const question5 = new Question({
      user: pepito.id,
      question: "Hola, Pepito!",
      visibility: "private",
      timeLimit: 30000,
    });
    const question6 = new Question({
      user: wendy.id,
      question: "Hola, Wendy!",
      visibility: "private",
      timeLimit: 30000,
    });
    const question7 = new Question({
      user: peter.id,
      question: "Hola, Peter!",
      visibility: "private",
      timeLimit: 30000,
    });
    const question8 = new Question({
      user: james.id,
      question: "Hola, James!",
      visibility: "private",
      timeLimit: 30000,
    });

    debugger;

    return Promise.all([
      question1.save(),
      question2.save(),
      question3.save(),
      question4.save(),
      question5.save(),
      question6.save(),
      question7.save(),
      question8.save(),
    ]);
  })
  .catch((error) => {
    debugger;
  })
  .then(() => disconnect());
