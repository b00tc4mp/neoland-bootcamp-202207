require('dotenv').config()

const {connect,disconnect, default: mongoose } = require("mongoose");
const { expect } = require("chai");
const { City } = require("../../../models");
const { NotFoundError} = require("errors");
const searchCities = require(".");

const { MONGO_URL_TEST } = process.env;

describe("searchCities", () => {
  before(() => connect(MONGO_URL_TEST));

  //beforeEach(() => Promise.all([City.deleteMany()]));
  beforeEach(() => mongoose.connection.db.dropDatabase())

  it("succeeds on existing cities", () => {
    // happy path

    const paris = new City({
      name: "Paris",
      photo: "picture here", // ----> descargar foto aqui
      description:
        " Capital de Francia y de la región que ocupa, la Isla de Francia, París tiene una población de casi doce millones de habitantes, la más grande de Europa, y una superficie de 14.518 kilómetros cuadrados en zona urbana. Está situada al norte de Francia, concretamente al norte de la gran curva del río Sena.",
    });

    const london = new City({
      name: "London",
      photo: " TODO ",
      description:
        "Londres, la capital de Inglaterra y del Reino Unido, es una ciudad del siglo XXI con una historia que se remonta a la época romana. En su centro se alzan el imponente Palacio del Parlamento, la torre del icónico reloj Big Ben y la Abadía de Westminster, lugar de las coronaciones monárquicas británicas. Al otro lado del río Támesis, la rueda de observación London Eye ofrece vistas panorámicas del complejo cultural South Bank y de toda la ciudad.",
    });

    const roma = new City({
      name: "roma",
      photo: " TODO ",
      description:
        "Roma, la capital de Italia, es una extensa ciudad cosmopolita que tiene a la vista casi 3,000 años de arte, arquitectura y cultura de influencia mundial. Las ruinas antiguas como las del Foro y el Coliseo evocan el poder del antiguo Imperio Romano. La ciudad del Vaticano, sede central de la Iglesia católica romana, cuenta con la Basílica de San Pedro y los Museos del Vaticano, que albergan obras maestras como los frescos de la Capilla Sixtina de Miguel Ángel.",
    });

    return Promise.all([paris.save(), london.save(), roma.save()]).then(
      ([paris, london, roma]) =>
        searchCities('paris')
        .then((cities) => {
          expect(cities).to.have.length(1);

          expect(cities[0].name).to.be('paris')
          expect(cities[0].photo).to.be('picture here')
          expect(cities[0].description).to.be(" Capital de Francia y de la región que ocupa, la Isla de Francia, París tiene una población de casi doce millones de habitantes, la más grande de Europa, y una superficie de 14.518 kilómetros cuadrados en zona urbana. Está situada al norte de Francia, concretamente al norte de la gran curva del río Sena.", )
        })
    );
  });

  it("succeeds on more one words cities", () => {
    // happy path

    const paris = new City({
      name: "Paris",
      photo: "picture here", // ----> descargar foto aqui
      description:
        " Capital de Francia y de la región que ocupa, la Isla de Francia, París tiene una población de casi doce millones de habitantes, la más grande de Europa, y una superficie de 14.518 kilómetros cuadrados en zona urbana. Está situada al norte de Francia, concretamente al norte de la gran curva del río Sena.",
    });

    const london = new City({
      name: "London",
      photo: " TODO ",
      description:
        "Londres, la capital de Inglaterra y del Reino Unido, es una ciudad del siglo XXI con una historia que se remonta a la época romana. En su centro se alzan el imponente Palacio del Parlamento, la torre del icónico reloj Big Ben y la Abadía de Westminster, lugar de las coronaciones monárquicas británicas. Al otro lado del río Támesis, la rueda de observación London Eye ofrece vistas panorámicas del complejo cultural South Bank y de toda la ciudad.",
    });

    const roma = new City({
      name: "roma",
      photo: " TODO ",
      description:
        "Roma, la capital de Italia, es una extensa ciudad cosmopolita que tiene a la vista casi 3,000 años de arte, arquitectura y cultura de influencia mundial. Las ruinas antiguas como las del Foro y el Coliseo evocan el poder del antiguo Imperio Romano. La ciudad del Vaticano, sede central de la Iglesia católica romana, cuenta con la Basílica de San Pedro y los Museos del Vaticano, que albergan obras maestras como los frescos de la Capilla Sixtina de Miguel Ángel.",
    });

    const query = 'a'

    return Promise.all([paris.save(), london.save(), roma.save()]).then(
      ([paris, london, roma]) =>
        searchCities(query)
        .then((cities) => {
          expect(cities).to.have.length(2);
          expect(cities[1].name).to.be('paris', 'roma')
         


        })
    );
  });

  it("succeeds on existing cities", () => {
    // happy path

    const paris = new City({
      name: "Paris",
      photo: "picture here", // ----> descargar foto aqui
      description:
        " Capital de Francia y de la región que ocupa, la Isla de Francia, París tiene una población de casi doce millones de habitantes, la más grande de Europa, y una superficie de 14.518 kilómetros cuadrados en zona urbana. Está situada al norte de Francia, concretamente al norte de la gran curva del río Sena.",
    });

    const london = new City({
      name: "London",
      photo: " TODO ",
      description:
        "Londres, la capital de Inglaterra y del Reino Unido, es una ciudad del siglo XXI con una historia que se remonta a la época romana. En su centro se alzan el imponente Palacio del Parlamento, la torre del icónico reloj Big Ben y la Abadía de Westminster, lugar de las coronaciones monárquicas británicas. Al otro lado del río Támesis, la rueda de observación London Eye ofrece vistas panorámicas del complejo cultural South Bank y de toda la ciudad.",
    });

    const roma = new City({
      name: "roma",
      photo: " TODO ",
      description:
        "Roma, la capital de Italia, es una extensa ciudad cosmopolita que tiene a la vista casi 3,000 años de arte, arquitectura y cultura de influencia mundial. Las ruinas antiguas como las del Foro y el Coliseo evocan el poder del antiguo Imperio Romano. La ciudad del Vaticano, sede central de la Iglesia católica romana, cuenta con la Basílica de San Pedro y los Museos del Vaticano, que albergan obras maestras como los frescos de la Capilla Sixtina de Miguel Ángel.",
    });

    return Promise.all([paris.save(), london.save(), roma.save()]).then(
      ([paris, london, roma]) =>
        searchCities('ajfeañoijreñoiajwrñ')
        .then((cities) => {
          expect(cities).to.have.length(0);
          expect(error).to.be.instanceOf(NotFoundError)
          
          
        })
    );
  });


  after(() => disconnect());
});
