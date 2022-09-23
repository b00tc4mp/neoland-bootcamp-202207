const { connect, disconnect } = require("mongoose");
const { User, Note } = require("./models");

connect("mongodb://localhost:27017/postits")
  // .then(() => {
  //     return Promise.all([
  //         User.deleteMany(),
  //         Note.deleteMany()
  //     ])
  // })
  .then(() => Promise.all([User.deleteMany(), Note.deleteMany()]))
  .then(() => {
    const lewis = new User({
      name: "Lewis Hamilton",
      email: "lewis@hamilton.com",
      password: "123123123",
    });

    const wendy = new User({
      name: "Wendy Darling",
      //email: 'wendy@darling.com',
      email: "pepito@grillo.com",
      password: "123123123",
    });

    const george = new User({
      name: "George Russell",
      email: "george@russell.com",
      password: "123123123",
    });

    const carlos = new User({
      name: "Carlos Sainz",
      email: "carlos@sainz.com",
      password: "123123123",
    });

    return Promise.all([
      lewis.save(),
      wendy.save(),
      george.save(),
      carlos.save(),
    ]);
  })
  // .then(users => {
  //     const [pepito, wendy, peter, james] = users
  //     ...
  .then(([lewis, wendy, george, carlos]) => {
    const note1 = new Note({ user: lewis.id, text: "Hola, Lewis!" });
    const note2 = new Note({ user: wendy.id, text: "Hola, Wendy!" });
    const note3 = new Note({ user: george.id, text: "Hola, George!" });
    const note4 = new Note({ user: carlos.id, text: "Hola, Carlos!" });

    return Promise.all([
      note1.save(),
      note2.save(),
      note3.save(),
      note4.save(),
    ]);
  })
  .catch(error => {
     ;
  })
  .then(() => disconnect());
