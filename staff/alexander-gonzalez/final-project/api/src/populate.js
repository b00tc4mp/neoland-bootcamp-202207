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
      photo: " https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/5f/51.jpg",
      name: "Versalles Palace",
      description:
        " Edificio emblematico de papel fundamental entre 1682 y 1789. Comprendiendo entre 3 palacios, Gran Trianon, Versalles, Pequeño Trianon. Famosa residencia del Rey Sol Luis XIV.",
      url: " https://www.getyourguide.es/-l317/?cmp=ga&cq_src=google_ads&cq_cmp=6757787717&cq_con=80163997915&cq_term=versalles%20entradas&cq_med=&cq_plac=&cq_net=g&cq_pos=&cq_plt=gp&campaign_id=6757787717&adgroup_id=80163997915&target_id=aud-1393039795380%3Akwd-37807522612&loc_physical_ms=1005437&match_type=e&ad_id=600285758325&keyword=versalles%20entradas&ad_position=&feed_item_id=&placement=&device=c&partner_id=CD951&gclid=Cj0KCQjw7KqZBhCBARIsAI-fTKIzWvM8W7UubyWV_18vv48RqX2VtGaHAO-pqxT2GFef-HH-iuVlgloaAnBlEALw_wcB",
      favorites: 0,
      coords:[48.85859, 2.12040]
    });

    louvreMuseum = new Place({
      //id:"ObjectId",
      photo: " https://api-www.louvre.fr/sites/default/files/2021-01/cour-napoleon-et-pyramide_1.jpg",
      name: "Louvre Museum",
      description:
        "Ubicado en el antiguo palacio del Louvre, es el museo nacional de Francia consagrado tanto a las bellas artes como arqueologia y artes decorativas anteriores al Impresionismo. Grandes obras famosas como, Gioconda, la Venus de Milo, Libertad guiando al pueblo, La balsa de la Medusa, etc.",
      url: " https://www.getyourguide.es/-l3224/?cmp=ga&cq_src=google_ads&cq_cmp=6755608513&cq_con=78965023385&cq_term=entradas%20al%20louvre&cq_med=&cq_plac=&cq_net=g&cq_pos=&cq_plt=gp&campaign_id=6755608513&adgroup_id=78965023385&target_id=aud-902501298926%3Akwd-21580302155&loc_physical_ms=1005437&match_type=e&ad_id=454627133692&keyword=entradas%20al%20louvre&ad_position=&feed_item_id=&placement=&device=c&partner_id=CD951&gclid=Cj0KCQjw7KqZBhCBARIsAI-fTKJJAKZcPr-q6apgg0Va6POM6SPEtvOoVU2SY__2f4sP1mHdUoNBduQaAvwsEALw_wcB",
      favorites: 0,
      coords:[48.86070, 2.33773]
    });

     notreDame = new Place({
      // id:"ObjectId",
      photo: " https://media.gq.com.mx/photos/5cb4f2e348d500bb4d46ff47/16:9/w_2560%2Cc_limit/notredame.jpg",
      name: "Notre Dame",
      description:
        "La catedral de Notre Dame es una sede de archidiocesis de Paris, de estilo Gotico su construccion comenzo en el año 1163, y para 1260 ya estaba finalizada. cabe recordar que en el 15 de abril del 2019 sufrio el mayor daño posible a raiz de un incendio y aun esta en construccion y reparacion.",
      url: " https://www.getyourguide.es/catedral-de-notre-dame-l3230/",
      favorites: 0,
      coords:[48.85312, 2.35034]
    });

    londonTower = new Place({
      // id:"ObjectId",
      photo: "https://www.eliberico.com/wp-content/uploads/2021/09/torre-londres-640x375.jpg  ",
      name: "London Tower",
      description: " El Puente de la Torre es un puente basculante y colgante de Londres, construido entre 1886 y 1894, que cruza el río Támesis cerca de la Torre de Londres y se ha convertido en uno de los símbolos de la ciudad.",
      url: "https://www.getyourguide.es/-l2708/?cmp=ga&cq_src=google_ads&cq_cmp=6755599609&cq_con=77661117257&cq_term=precio%20entrada%20torre%20de%20londres&cq_med=&cq_plac=&cq_net=g&cq_pos=&cq_plt=gp&campaign_id=6755599609&adgroup_id=77661117257&target_id=aud-902501298926%3Akwd-22801105839&loc_physical_ms=1005437&match_type=e&ad_id=394714585575&keyword=precio%20entrada%20torre%20de%20londres&ad_position=&feed_item_id=&placement=&device=c&partner_id=CD951&gclid=Cj0KCQjw7KqZBhCBARIsAI-fTKKl7MSqHADKP_uUt2KGCJ-3OgynP9p45lR_IyBOUR2ZqseqzrXtPjsaAj1OEALw_wcB ",
      favorites: 0,
      coords:[51.50833, -0.07590]

    });

    towerBridge = new Place({
      // id:"ObjectId",
      photo: " http://www.thelondres.com/wp-content/uploads/2018/08/tower-bridge.jpg",
      name: "Tower Bridge",
      description: " El Puente de la Torre es un puente basculante y colgante de Londres, construido entre 1886 y 1894, que cruza el río Támesis cerca de la Torre de Londres y se ha convertido en uno de los símbolos de la ciudad.",
      url: "https://www.getyourguide.es/-l2713/?cmp=ga&cq_src=google_ads&cq_cmp=6757789361&cq_con=83245909087&cq_term=tower%20bridge%20entradas&cq_med=&cq_plac=&cq_net=g&cq_pos=&cq_plt=gp&campaign_id=6757789361&adgroup_id=83245909087&target_id=aud-902501298926%3Akwd-306732128103&loc_physical_ms=1005437&match_type=e&ad_id=480690952315&keyword=tower%20bridge%20entradas&ad_position=&feed_item_id=&placement=&device=c&partner_id=CD951&gclid=Cj0KCQjw7KqZBhCBARIsAI-fTKL0_35eHPnTeLG-Vp6iSJ6iNrEv1sDxtAOEiJ5cRpsC8afVB5uveDMaAtdsEALw_wcB ",
      favorites: 0,
      coords:[51.50556, -0.07540]
    });

    bigBen = new Place({
      //id:"ObjectId",
      photo: "https://media.traveler.es/photos/61377992652b2e41f8dcf719/master/w_1600,c_limit/97336.jpg ",
      name: "Big Ben",
      description: "Big Ben es el nombre con el que se conoce a la gran campana del reloj situado en el lado noroeste del Palacio de Westminster, la sede del Parlamento del Reino Unido, en Londres.​ Popularmente, por extensión, se utiliza también este nombre para el reloj de la torre.  ",
      url: "https://www.getyourguide.es/big-ben-l2709/ ",
      favorites: 0,
      coords:[51.50095, -0.12463]
    });

    britishMuseum = new Place({
      //id:"ObjectId",
      photo: " https://totenart.com/noticias/wp-content/uploads/2020/01/totenart-Museo-Britanico-Londres.jpg",
      name: "British Museum",
      description: " El Museo Británico es un museo de la ciudad de Londres, Reino Unido, uno de los museos más importantes y visitados del mundo. Sus colecciones abarcan campos diversos del saber humano, como la historia, la arqueología, la etnografía y el arte.",
      url: "https://www.civitatis.com/es/londres/free-tour-museo-britanico?aid=100&cmp=es_ES&cmpint=ReinoUnido_Actividades_FreeTours&gclsrc=aw.ds&gclid=Cj0KCQjw7KqZBhCBARIsAI-fTKKuRrIV-ZU6QEQdcpL194MVEpH0gCIAJ5t1KbtJepil0VfplnpQjGoaAuGsEALw_wcB ",
      favorites: 0,
      coords :[51.51954, -0.12672]
    });

    buckinghamPalace = new Place({
      // id:"ObjectId",
      photo: " https://loving-london.com/es/wp-content/uploads/2017/01/buckingham-palace-170120142034002-1920x960.jpg",
      name: "Buckingham Palace",
      description: "El palacio de Buckingham es la residencia oficial del monarca británico en Londres.​ También se utiliza para ceremonias oficiales, visitas de Estado y visitas turísticas. Es famoso por albergar una parte sustancial de la Royal Collection, extraordinario conjunto de obras artísticas fruto del coleccionismo real.",
      url: "https://www.viator.com/es-ES/London-attractions/Buckingham-Palace/d737-a84?mcid=26374&tsem=true&supci=-1&supag=12323169732&supsc=kwd-371947289936&supai=282538426505&supap=&supdv=c&supnt=g&supti=kwd-371947289936&suplp=1005437&supli=&m=26374&supag=12323169732&supsc=kwd-371947289936&supai=282538426505&supap=&supdv=c&supnt=nt%3Ag&suplp=1005437&supli=&supti=kwd-371947289936&tsem=true&supci=kwd-371947289936&supap1=&supap2=&gclid=Cj0KCQjw7KqZBhCBARIsAI-fTKK-td2D8dr31zADZMz3JL-RbFVabn-KtjUOlhkFNehTIghBPy3BvRYaAleWEALw_wcB ",
      favorites: 0,
      coords:[51.50158, -0.14188]
    });

    coliseo = new Place({
      // id:"ObjectId",
      photo: "https://www.enroma.com/wp-content/uploads/2021/07/Vista-a%C3%A9rea-del-Coliseo-scaled.jpg ",
      name: "Coliseo",
      description: "El Coliseo o Anfiteatro Flavio ​ es un anfiteatro de la época del Imperio romano, construido en el siglo I. Está ubicado en el este del Foro Romano, y fue el más grande de los que se construyeron en el Imperio romano.  ",
      url: " https://www.colosseum-rome-tickets.com/es/?gclid=Cj0KCQjw7KqZBhCBARIsAI-fTKLLy9miZrlxdWZ7ing32et-pRKynElddzyBGm1PsA-KESVYem3jm6MaAp73EALw_wcB",
      favorites: 0,
      coords:[41.89020, 12.49223]
    });

    foroRomano = new Place({
      //id:"ObjectId",
      photo: " https://viajes.nationalgeographic.com.es/medio/2013/05/21/dsc_4218_1000x669.jpg",
      name: "Foro Romano",
      description: "El Foro Romano era el foro de la ciudad de Roma, es decir, la zona central semejante a las plazas centrales en las ciudades actuales donde se encuentran las instituciones de gobierno, de mercado y religiosas. ",
      url: " https://www.colosseum-rome-tickets.com/es/?gclid=Cj0KCQjw7KqZBhCBARIsAI-fTKIgYxd56GXvaG3RzoOs8zwfSTLsELERZAoCEWzIr1lw7nZKW5-dk5saAvpSEALw_wcB",
      favorites: 0,
      coords:[41.89254,12.48532]
    });

    vaticano = new Place({
      // id:"ObjectId",
      photo: "https://www.publico.es/viajes/wp-content/uploads/2021/09/vaticano-1024x682.jpg ",
      name: "Vaticano",
      description: "La Ciudad del Vaticano, una ciudad estado ubicada dentro de Roma, Italia, es la sede central de la Iglesia Católica Romana. Es el hogar del Papa y es un tesoro de la arquitectura y el arte icónicos. Sus Museos del Vaticano contienen antiguas esculturas romanas, como la famosa “Laocoonte y sus hijos”, junto con frescos renacentistas en las Salas de Rafael y en la Capilla Sixtina, famosa por el techo pintado por Miguel Ángel. ",
      url: " https://www.thevaticantickets.com/es/?gclid=Cj0KCQjw7KqZBhCBARIsAI-fTKIrnW7lpXihm3rOK_OZLVTaXjpCcERBxE4egiUWefULGSq0W20QyjoaAvzgEALw_wcB",
      favorites: 0,
      coords:[41.90236, 12.45389]
    });

    fontanaDiTrevi = new Place({
      // id:"ObjectId",
      photo: "https://s1.eestatic.com/2019/01/13/mundo/roma-virginia_raggi-monumentos_368223867_112155221_1706x960.jpg ",
      name: "Fontana di Trevi",
      description: "La Fontana di Trevi, con cerca de 40 metros de frente, es una de las mayores fuentes monumentales del Barroco en Roma. Según la actual división administrativa del centro de Roma, está situada en el rione de Trevi. ",
      url: " https://www.tiqets.com/es/entradas-fontana-di-trevi-l144568/?&utm_source=google&utm_medium=cpc&utm_campaign=1416270664&utm_content=124950431406&network=g&gclid=Cj0KCQjw7KqZBhCBARIsAI-fTKJht-Qq0h7j37yjC6Wfxmt1HFmTQiUFgj1Dqv_m9Q6juuXruAExrjEaAqKUEALw_wcB&gclsrc=aw.ds",
      favorites: 0,
      coords:[41.90110, 12.48328]
    });

    castellSantAngelo = new Place({
      //id:"ObjectId",
      photo: " https://cdn-us0.puzzlegarage.com/img/puzzle/7/5767_preview.v2.jpg",
      name: "Castell sant Angelo",
      description: " El Castillo de Sant'Angelo es un monumento de Roma, situado en la orilla derecha del Tíber, frente al Pons Aelius, a poca distancia del Vaticano, entre el rione de Borgo y el de Prati. Está unido a la Ciudad del Vaticano a través del pasillo fortificado denominado Passetto.",
      url: " https://www.viator.com/es-ES/tours/Rome/Castel-SantAngelo-admission-ticket/d511-90310P43?m=26374&supag=65619063982&supsc=dsa-694098303804&supai=420430239824&supap=&supdv=c&supnt=nt:g&suplp=1005437&supli=&supti=dsa-694098303804&tsem=true&supci=dsa-694098303804&supap1=&supap2=&gclid=Cj0KCQjw7KqZBhCBARIsAI-fTKJBQ2XpbqrL85kjmN1dGtsXz84T0-egrV_VPnNs3LI7jqOmawMV1gUaAsPWEALw_wcB",
      favorites: 0,
      coords:[41.90329, 12.46626]
    });
  })

  .then(() => {
    eiffelTower = new Place({
      //id:"ObjectId",
      photo: " https://cdn.pariscityvision.com/library/image/5144.jpg",
      name: "Eiffel Tower",
      description:
        "Construida en 1889 para la Exposicion Universal, la Torre Eiffel se convirtio en el principal simbolo de Paris y es el monumento mas visitado del mundo. Cuenta con una estructura de hierro de 300 metros de alto y tardando solo 2 años 2 meses y 5 dias, desde 1887 a 1889.",
      url: "https://www.eiffeltickets.com/es/?gclid=Cj0KCQjw7KqZBhCBARIsAI-fTKIXrqJYQBGxUUfuEzmUi4Hgw_Uzvfke8sd4-KAt9mSLm44a3M_5SioaApNCEALw_wcB ",
      favorites: 0,
      coords:[48.85859, 2.29436] // solucionar coords por coordinate ([..., ...])
    });

    arcDeTriomf = new Place({
      // id:"ObjectId",
      photo: "https://lonelyplanetes.cdnstatics2.com/sites/default/files/barrios_images/francia_paris_arcodetriunfoshutterstock_662979433_catarinabelova_shutterstock.jpg ",
      name: "Arc de Triomf",
      description:
        " Monumento emblematico de la capital francesa, construido entre 1806 - 1836 por orden de Napoleon Bonaparte para conmemorar la victoria en la batalla de Austerlitz",
      url: " https://www.musement.com/es/paris/arco-de-triunfo-de-paris-v/?version=t&lid=43700070461983499&ds_s_kwgid=58700005794993873&ds_e_adid=528260237706&ds_e_matchtype=search&ds_e_device=c&ds_e_network=g&ds_url_v=2&idengine=700000002043151&idcampaign=71700000065683392&idadgroup=58700005794993873&nmkeyword=subir%20al%20arco%20del%20triunfo%20paris&idkeyword=43700070461983499&gclid=Cj0KCQjw7KqZBhCBARIsAI-fTKJqrkd_q39tXrt4S6HjtIfcxX3IKGvAGmSgTemzlJjd-epwmSA8cYIaAt-FEALw_wcB&gclsrc=aw.ds",
      favorites: 0,
      coords:[48.87389, 2.29519]
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
      photo: "https://es.parisinfo.com/var/otcp/sites/images/node_43/node_51/node_233/vue-sur-les-toits-de-la-tour-saint-jacques-%7C-740x380-%7C-%C2%A9-elodie-gutbrod-cr%C3%A9atividie/21581411-1-fre-FR/Vue-sur-les-toits-de-la-tour-Saint-Jacques-%7C-740x380-%7C-%C2%A9-Elodie-Gutbrod-Cr%C3%A9atividie.jpg ", // ----> descargar foto aqui
      description:
        " Capital de Francia y de la región que ocupa, la Isla de Francia, París tiene una población de casi doce millones de habitantes, la más grande de Europa, y una superficie de 14.518 kilómetros cuadrados en zona urbana. Está situada al norte de Francia, concretamente al norte de la gran curva del río Sena.",
      places: [
        eiffelTower,
        arcDeTriomf,
        louvreMuseum,
        versallesPalace,
        notreDame,
      ],
      coords:[48.856944444444, 2.3513888888889]
    });

    const london = new City({
      //_id:"2",
      name: "London",
      photo: " https://holrmagazine.com/wp-content/uploads/2019/04/london-1.jpg",
      description:
        "Londres, la capital de Inglaterra y del Reino Unido, es una ciudad del siglo XXI con una historia que se remonta a la época romana. En su centro se alzan el imponente Palacio del Parlamento, la torre del icónico reloj Big Ben y la Abadía de Westminster, lugar de las coronaciones monárquicas británicas. Al otro lado del río Támesis, la rueda de observación London Eye ofrece vistas panorámicas del complejo cultural South Bank y de toda la ciudad.",
      places: [
        towerBridge,
        londonTower,
        britishMuseum,
        bigBen,
        buckinghamPalace,
      ],
      coords:[51.50853, -0.12574]
    });

    const roma = new City({
      // _id:"3",
      name: "roma",
      photo: " https://h8f7z4t2.stackpathcdn.com/wp-content/uploads/2015/09/vista-cidade-de-Roma.jpg",
      description:
        "Roma, la capital de Italia, es una extensa ciudad cosmopolita que tiene a la vista casi 3,000 años de arte, arquitectura y cultura de influencia mundial. Las ruinas antiguas como las del Foro y el Coliseo evocan el poder del antiguo Imperio Romano. La ciudad del Vaticano, sede central de la Iglesia católica romana, cuenta con la Basílica de San Pedro y los Museos del Vaticano, que albergan obras maestras como los frescos de la Capilla Sixtina de Miguel Ángel.",
      places: [
        foroRomano,
        coliseo,
        vaticano,
        fontanaDiTrevi,
        castellSantAngelo,
      ],
      coords:[ 41.89193, 12.51133]
    });

    return Promise.all([paris.save(), london.save(), roma.save()]);
  })

  .catch((error) => {})
  .then(() => disconnect());
