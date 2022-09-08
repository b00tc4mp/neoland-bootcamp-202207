const { connect, disconnect } = require("mongoose");
const { User, City, Place } = require("./models");

let eiffelTower, arcDeTriomf, versallesPalace,louvreMuseum, notreDame, londonTower, towerBridge, bigBen, britishMuseum, buckinghamPalace, coliseo, fontanaDiTrevi, foroRomano, vaticano, castellSantAngelo ;

connect("mongodb://localhost:27017/wanderlust")
  .then(() =>
    Promise.all([User.deleteMany(), Place.deleteMany(), City.deleteMany()])
  )
  .then(() => {
    versallesPalace = new Place({
      //id:"ObjectId",
      photo: "TODO",
      name: "Versalles Palace",
      description:
        " Edificio emblematico de papel fundamental entre 1682 y 1789. Comprendiendo entre 3 palacios, Gran Trianon, Versalles, Pequeño Trianon. Famosa residencia del Rey Sol Luis XIV.",
      url: " TODO",
      likes: 0,
    });

    louvreMuseum = new Place({
      //id:"ObjectId",
      photo: "TODO",
      name: "Louvre Museum",
      description:
        "Ubicado en el antiguo palacio del Louvre, es el museo nacional de Francia consagrado tanto a las bellas artes como arqueologia y artes decorativas anteriores al Impresionismo. Grandes obras famosas como, Gioconda, la Venus de Milo, Libertad guiando al pueblo, La balsa de la Medusa, etc.",
      url: " TODO",
      likes: 0,
    });

     notreDame = new Place({
      // id:"ObjectId",
      photo: "TODO",
      name: "Notre Dame",
      description:
        "La catedral de Notre Dame es una sede de archidiocesis de Paris, de estilo Gotico su construccion comenzo en el año 1163, y para 1260 ya estaba finalizada. cabe recordar que en el 15 de abril del 2019 sufrio el mayor daño posible a raiz de un incendio y aun esta en construccion y reparacion.",
      url: " TODO",
      likes: 0,
    });

    londonTower = new Place({
      // id:"ObjectId",
      photo: "TODO",
      name: "London Tower",
      description: " ",
      url: " TODO",
      likes: 0,
    });

    towerBridge = new Place({
      // id:"ObjectId",
      photo: "TODO",
      name: "Tower Bridge",
      description: " ",
      url: " TODO",
      likes: 0,
    });

    bigBen = new Place({
      //id:"ObjectId",
      photo: "TODO",
      name: "Big Ben",
      description: " ",
      url: " TODO",
      likes: 0,
    });

    britishMuseum = new Place({
      //id:"ObjectId",
      photo: "TODO",
      name: "British Museum",
      description: " ",
      url: " TODO",
      likes: 0,
    });

    buckinghamPalace = new Place({
      // id:"ObjectId",
      photo: "TODO",
      name: "Buckingham Palace",
      description: " ",
      url: " TODO",
      likes: 0,
    });

    coliseo = new Place({
      // id:"ObjectId",
      photo: "TODO",
      name: "Coliseo",
      description: " ",
      url: " TODO",
      likes: 0,
    });

    foroRomano = new Place({
      //id:"ObjectId",
      photo: "TODO",
      name: "Foro Romano",
      description: " ",
      url: " TODO",
      likes: 0,
    });

    vaticano = new Place({
      // id:"ObjectId",
      photo: "TODO",
      name: "Vaticano",
      description: " ",
      url: " TODO",
      likes: 0,
    });

    fontanaDiTrevi = new Place({
      // id:"ObjectId",
      photo: "TODO",
      name: "Fontana di Trevi",
      description: " ",
      url: " TODO",
      likes: 0,
    });

    castellSantAngelo = new Place({
      //id:"ObjectId",
      photo: "TODO",
      name: "Castell sant Angelo",
      description: " ",
      url: " TODO",
      likes: 0,
    });
  })

  .then(() => {
    eiffelTower = new Place({
      //id:"ObjectId",
      photo: "TODO",
      name: "Eiffel Tower",
      description:
        "Construida en 1889 para la Exposicion Universal, la Torre Eiffel se convirtio en el principal simbolo de Paris y es el monumento mas visitado del mundo. Cuenta con una estructura de hierro de 300 metros de alto y tardando solo 2 años 2 meses y 5 dias, desde 1887 a 1889.",
      url: " TODO",
      likes: 0,
    });

    arcDeTriomf = new Place({
      // id:"ObjectId",
      photo: "TODO",
      name: "Arc de Triomf",
      description:
        " Monumento emblematico de la capital francesa, construido entre 1806 - 1836 por orden de Napoleon Bonaparte para conmemorar la victoria en la batalla de Austerlitz",
      url: " TODO",
      likes: 0,
    });

    const pepito = new User({
      //   id: "ObjectId",// ---> TODO
      name: "Pepito Grillito",
      email: "pepito@grillito.com",
      password: "123123123",
      favorites: [arcDeTriomf.id, eiffelTower.id],
    });

    const homelander = new User({
      //        _id:"ObjectId", // ----> TODO
      name: "HomeLander",
      email: "home@lander.com",
      password: "123123123",
      // favorites:[id]
    });

    return Promise.all([pepito.save(), homelander.save()]);
  })

  .then(() => {
    const paris = new City({
      //_id:"1",
      name: "Paris",
      photo: "picture here", // ----> descargar foto aqui
      description:
        " Capital de Francia y de la región que ocupa, la Isla de Francia, París tiene una población de casi doce millones de habitantes, la más grande de Europa, y una superficie de 14.518 kilómetros cuadrados en zona urbana. Está situada al norte de Francia, concretamente al norte de la gran curva del río Sena.",
      places: [
        eiffelTower,
        arcDeTriomf,
        louvreMuseum,
        versallesPalace,
        notreDame,
      ],
    });

    const london = new City({
      //_id:"2",
      name: "London",
      photo: " TODO ",
      description:
        "Londres, la capital de Inglaterra y del Reino Unido, es una ciudad del siglo XXI con una historia que se remonta a la época romana. En su centro se alzan el imponente Palacio del Parlamento, la torre del icónico reloj Big Ben y la Abadía de Westminster, lugar de las coronaciones monárquicas británicas. Al otro lado del río Támesis, la rueda de observación London Eye ofrece vistas panorámicas del complejo cultural South Bank y de toda la ciudad.",
      places: [
        towerBridge,
        londonTower,
        britishMuseum,
        bigBen,
        buckinghamPalace,
      ],
    });

    const roma = new City({
      // _id:"3",
      name: "roma",
      photo: " TODO ",
      description:
        "Roma, la capital de Italia, es una extensa ciudad cosmopolita que tiene a la vista casi 3,000 años de arte, arquitectura y cultura de influencia mundial. Las ruinas antiguas como las del Foro y el Coliseo evocan el poder del antiguo Imperio Romano. La ciudad del Vaticano, sede central de la Iglesia católica romana, cuenta con la Basílica de San Pedro y los Museos del Vaticano, que albergan obras maestras como los frescos de la Capilla Sixtina de Miguel Ángel.",
      places: [
        foroRomano,
        coliseo,
        vaticano,
        fontanaDiTrevi,
        castellSantAngelo,
      ],
    });

    return Promise.all([paris.save(), london.save(), roma.save()]);
  })

  .catch((error) => {})
  .then(() => disconnect());
