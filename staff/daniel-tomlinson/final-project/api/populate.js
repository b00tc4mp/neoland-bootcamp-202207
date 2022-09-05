const { connect, disconnect } = require("mongoose");
const { User, Question } = require("./models");

connect("mongodb://127.0.0.1:27017/final-project")
  // .then(() => {
  //     return Promise.all([
  //         User.deleteMany(),
  //         Note.deleteMany()
  //     ])
  // })
  .then(() => Promise.all([User.deleteMany(), Question.deleteMany()]))
  .then(() => {
    const pepito = new User({
      name: "Pepito Grillo",
      email: "pepito@grillo.com",
      password: "123123123",
      favouriteQuestions: [],
      favouriteQuizzes: [],
    });

    const wendy = new User({
      name: "Wendy Darling",
      email: "wendy@darling.com",
      // email: "pepito@grillo.com",
      password: "12312123",
      favouriteQuestions: [],
      favouriteQuizzes: [],
    });

    const peter = new User({
      name: "Peter Pan",
      email: "peter@pan.com",
      password: "123123123",
      favouriteQuestions: [],
      favouriteQuizzes: [],
    });

    const james = new User({
      name: "James Hook",
      email: "james@hook.com",
      password: "123123123",
      favouriteQuestions: [],
      favouriteQuizzes: [],
    });

    return Promise.all([
      pepito.save(),
      wendy.save(),
      peter.save(),
      james.save(),
    ]);
  })
  // .then(users => {
  //     const [pepito, wendy, peter, james] = users
  //     ...
  .then(([pepito, wendy, peter, james]) => {
    const question1 = new Question({
      owner: pepito.id,
      question: "What did the fish say when he swam into a wall?",
      suggestedAnswer: "Ah, Dam.",
      tags: ["fish", "wall", "joke"],
      likes: 5,
      plays: 6,
    });
    const question2 = new Question({
      owner: wendy.id,
      question: "Did you hear the story about the claustrophobic astronaught?",
      suggestedAnswer: "He just needed some space.",
      tags: ["astronaught", "space", "joke", "funny"],
      likes: 29,
      plays: 56,
    });
    const question3 = new Question({
      owner: peter.id,
      question: "What do you call an alligator in a vest?",
      suggestedAnswer: "An in-vest-igator.",
      tags: ["reptile", "alligator", "joke", "lol"],
      likes: 2,
      plays: 5,
    });
    const question4 = new Question({
      owner: james.id,
      question: "Why can't a toe be twelve inches long?",
      suggestedAnswer: "Because then it would be a foot.",
      tags: ["body parts", "joke", "toe", "foot"],
      likes: 2,
      plays: 3,
    });

    return Promise.all([
      question1.save(),
      question2.save(),
      question3.save(),
      question4.save(),
    ]);
  })
  .catch((error) => {
    debugger;
  })
  .then(() => disconnect());
