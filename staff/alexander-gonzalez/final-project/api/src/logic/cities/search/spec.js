const {connect,disconnect, Types: { ObjectId },} = require("mongoose");
const { expect } = require("chai");
const { City } = require("../../models");
const { NotFoundError } = require("errors");
const searchCities = require(".");

const { MONGO_URL_TEST } = process.env;

describe("searchCities", () => {
  before(() => connect(MONGO_URL_TEST));

  beforeEach(() => Promise.all([City.deleteMany()]));

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
        SearchCities('paris')
        .then((cities) => {
          expect(cities).to.have.length(1);

          expect(cities[0].name).to.be('paris')
          expect(cities[0].photo).to.be('TODO')
          expect(cities[0].description).to.be(" Capital de Francia y de la región que ocupa, la Isla de Francia, París tiene una población de casi doce millones de habitantes, la más grande de Europa, y una superficie de 14.518 kilómetros cuadrados en zona urbana. Está situada al norte de Francia, concretamente al norte de la gran curva del río Sena.", )

          /*const _city = city.find((city) => city.id === city.id);
          expect(_city).to.exist;
          expect(_city.id).to.be.undefined;*/

          /* expect(_city.text).to.equal(note1.text)
                        expect(_city.visibility).to.equal(city.visibility)
                        expect(_city.createdAt).to.equal(ncity.createdAt)
                        expect(_city.modifiedAt).to.be.undefined*/

          /* const _note2 = notes.find(note => note.id === note2.id)
                        expect(_note2).to.exist
                        expect(_note2.user).to.be.undefined
                        expect(_note2.text).to.equal(note2.text)
                        expect(_note2.visibility).to.equal(note2.visibility)
                        expect(_note2.createdAt).to.equal(note2.createdAt)
                        expect(_note2.modifiedAt).to.be.undefined

                        const _note3 = notes.find(note => note.id === note3.id)
                        expect(_note3).to.exist
                        expect(_note3.user).to.be.undefined
                        expect(_note3.text).to.equal(note3.text)
                        expect(_note3.visibility).to.equal(note3.visibility)
                        expect(_note3.createdAt).to.equal(note3.createdAt)
                        expect(_note3.modifiedAt).to.be.undefined]*/
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
        SearchCities('a')
        .then((cities) => {
          expect(cities).to.have.length(2);



          /*const _city = city.find((city) => city.id === city.id);
          expect(_city).to.exist;
          expect(_city.id).to.be.undefined;*/

          /* expect(_city.text).to.equal(note1.text)
                        expect(_city.visibility).to.equal(city.visibility)
                        expect(_city.createdAt).to.equal(ncity.createdAt)
                        expect(_city.modifiedAt).to.be.undefined*/

          /* const _note2 = notes.find(note => note.id === note2.id)
                        expect(_note2).to.exist
                        expect(_note2.user).to.be.undefined
                        expect(_note2.text).to.equal(note2.text)
                        expect(_note2.visibility).to.equal(note2.visibility)
                        expect(_note2.createdAt).to.equal(note2.createdAt)
                        expect(_note2.modifiedAt).to.be.undefined

                        const _note3 = notes.find(note => note.id === note3.id)
                        expect(_note3).to.exist
                        expect(_note3.user).to.be.undefined
                        expect(_note3.text).to.equal(note3.text)
                        expect(_note3.visibility).to.equal(note3.visibility)
                        expect(_note3.createdAt).to.equal(note3.createdAt)
                        expect(_note3.modifiedAt).to.be.undefined]*/
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
        SearchCities('ajfeañoijreñoiajwrñ')
        .then((cities) => {
          expect(cities).to.have.length(0);
          expect(cities[0].name).to.be('paris')
          expect(cities[0].photo).to.be('TODO')
          expect(cities[0].description).to.be(" Capital de Francia y de la región que ocupa, la Isla de Francia, París tiene una población de casi doce millones de habitantes, la más grande de Europa, y una superficie de 14.518 kilómetros cuadrados en zona urbana. Está situada al norte de Francia, concretamente al norte de la gran curva del río Sena.", )

          /*const _city = city.find((city) => city.id === city.id);
          expect(_city).to.exist;
          expect(_city.id).to.be.undefined;*/

          /* expect(_city.text).to.equal(note1.text)
                        expect(_city.visibility).to.equal(city.visibility)
                        expect(_city.createdAt).to.equal(ncity.createdAt)
                        expect(_city.modifiedAt).to.be.undefined*/

          /* const _note2 = notes.find(note => note.id === note2.id)
                        expect(_note2).to.exist
                        expect(_note2.user).to.be.undefined
                        expect(_note2.text).to.equal(note2.text)
                        expect(_note2.visibility).to.equal(note2.visibility)
                        expect(_note2.createdAt).to.equal(note2.createdAt)
                        expect(_note2.modifiedAt).to.be.undefined

                        const _note3 = notes.find(note => note.id === note3.id)
                        expect(_note3).to.exist
                        expect(_note3.user).to.be.undefined
                        expect(_note3.text).to.equal(note3.text)
                        expect(_note3.visibility).to.equal(note3.visibility)
                        expect(_note3.createdAt).to.equal(note3.createdAt)
                        expect(_note3.modifiedAt).to.be.undefined]*/
        })
    );
  });

  it("fails on non-existing cities", () => {
    // unhappy path
    const cityId = new ObjectId().toString();

    return searchCities(cityId).catch((error) => {
      expect(error).to.be.instanceOf(NotFoundError);
      expect(error.message).to.equal(`city with id ${cityId} not found`);
    });
  });

  after(() => disconnect());
});
