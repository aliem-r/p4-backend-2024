import { db } from "../src/db";

const authorsData = [
    {
        username: "cuentacuentosmagico",
        fullName: "Sofía Pérez",
        biography: "Sofía Pérez es una autora apasionada por crear mundos mágicos que capturan la imaginación de los niños.",
        avatar: "avatars/a1b2c3d4e5f6g7h8.jpg",
    },
    {
        username: "historiasencantadas",
        fullName: "Juan Martínez",
        biography: "Juan Martínez combina su amor por la naturaleza y la aventura en cuentos que transportan a los lectores a nuevos y emocionantes lugares.",
        avatar: "avatars/b2c3d4e5f6g7h8i9.jpg",
    },
    {
        username: "creadordesuenos",
        fullName: "Ana López",
        biography: "Ana López escribe cuentos llenos de ternura y enseñanzas que fomentan valores y la empatía en los niños.",
        avatar: "avatars/c3d4e5f6g7h8i9j0.jpg",
    },
    {
        username: "relatosfantasticos",
        fullName: "Carlos Fernández",
        biography: "Carlos Fernández es conocido por sus relatos llenos de fantasía y personajes inolvidables que inspiran a los más pequeños.",
        avatar: "avatars/d4e5f6g7h8i9j0k1.jpg",
    },
    {
        username: "narradoraestelar",
        fullName: "María González",
        biography: "María González crea historias que llevan a los niños a explorar el universo y descubrir los misterios del cosmos.",
        avatar: "avatars/e5f6g7h8i9j0k1l2.jpg",
    },
];

const categoriesData = [
    {
        name: "Aventuras",
        description: "Historias llenas de emoción y viajes épicos.",
    },
    {
        name: "Fantasía",
        description: "Cuentos mágicos y mundos maravillosos.",
    },
    {
        name: "Naturaleza",
        description: "Relatos sobre la belleza y el misterio de la naturaleza.",
    },
    {
        name: "Amistad",
        description: "Historias sobre la importancia de la amistad y el compañerismo.",
    },
    {
        name: "Valores",
        description: "Cuentos que enseñan valores y lecciones importantes.",
    },
    {
        name: "Animales",
        description: "Relatos protagonizados por animales adorables y valientes.",
    },
    {
        name: "Ciencia Ficción",
        description: "Historias futuristas y viajes espaciales.",
    },
    {
        name: "Navidad",
        description: "Historias mágicas sobre la época navideña.",
    },
    {
        name: "Educativo",
        description: "Cuentos que enseñan sobre diferentes temas y conocimientos.",
    },
];

const storiesData = [
    {
        title: "La Aventura del Bosque Encantado",
        summary: "Un grupo de niños se adentra en un bosque lleno de criaturas mágicas.",
        body: `Era un día soleado cuando Ana y sus amigos decidieron explorar el bosque que se encontraba al final de su calle. Al adentrarse, encontraron un sendero oculto que no habían visto antes. Curiosos, siguieron el camino y pronto se toparon con un claro lleno de flores brillantes y árboles que susurraban.\r\n\r\nEn el centro del claro, un pequeño duende les dio la bienvenida. "Este es el Bosque Encantado", dijo, "un lugar donde los sueños se hacen realidad". Los niños, maravillados, comenzaron a explorar el lugar y descubrieron que cada planta y criatura tenía una historia que contar.`,
        publicationDate: new Date(),
        authorId: 1,
        categoryId: 1,
    },
    {
        title: "El Dragón y la Princesa Valiente",
        summary: "Una princesa se enfrenta a un dragón para salvar su reino.",
        body: `En un lejano reino, vivía una princesa que no temía nada. Un día, un dragón aterrorizó el castillo y la princesa decidió enfrentarlo. Se armó con valor y su espada más fuerte, y partió hacia la cueva del dragón.\r\n\r\nAl llegar, vio al dragón durmiendo sobre un montón de oro. Sin hacer ruido, se acercó, pero el dragón despertó. "¿Por qué vienes a mí?", rugió el dragón. La princesa respondió con firmeza, "Vengo a salvar a mi gente". Tras una larga conversación, el dragón entendió sus intenciones y decidió ayudarla, convirtiéndose en el guardián del reino.`,
        publicationDate: new Date(),
        authorId: 2,
        categoryId: 2,
    },
    {
        title: "El Misterio del Río",
        summary: "Un niño descubre un secreto mágico en el río de su pueblo.",
        body: `Junto al río del pequeño pueblo de Pedro, algo misterioso estaba sucediendo. Decidido a descubrirlo, Pedro siguió el curso del río hasta encontrar una cueva oculta. Al entrar, vio un resplandor azul que iluminaba todo el lugar.\r\n\r\nEn el centro de la cueva, había una piedra mágica que parecía latir como un corazón. Pedro, con cuidado, la tocó y de repente, fue transportado a un mundo submarino lleno de criaturas fantásticas. Ahí conoció a un sabio pez que le explicó que la piedra era el corazón del río y debía protegerla. Pedro aceptó la misión, asegurando la paz en su pueblo.`,
        publicationDate: new Date(),
        authorId: 3,
        categoryId: 3,
    },
    {
        title: "Amigos para Siempre",
        summary: "Dos amigos superan desafíos y fortalecen su amistad.",
        body: `Sara y Juan eran inseparables, hasta que un día un malentendido los separó. Sara pensó que Juan la había traicionado, pero en realidad todo fue un error. Pasaron semanas sin hablarse, ambos extrañándose pero sin saber cómo arreglarlo.\r\n\r\nUn día, durante una tormenta, Juan vio a Sara en peligro y sin pensarlo dos veces, corrió a ayudarla. Al salvarla, se dieron cuenta de lo importante que eran el uno para el otro. Decidieron hablar y aclarar el malentendido. Desde entonces, su amistad se fortaleció y aprendieron la importancia de la comunicación y la confianza.`,
        publicationDate: new Date(),
        authorId: 4,
        categoryId: 4,
    },
    {
        title: "La Lección del Gran Árbol",
        summary: "Un árbol milenario enseña valiosas lecciones a los niños del pueblo.",
        body: `En el centro del pueblo, un gran árbol contaba historias a quien quisiera escucharlas. Los niños se reunían a su alrededor para aprender sobre el pasado, el presente y el futuro. El árbol había vivido por siglos y conocía todos los secretos de la tierra.\r\n\r\nUn día, el árbol les habló sobre la importancia de cuidar el medio ambiente. "Cada acción que tomamos", dijo, "afecta a nuestro mundo". Los niños, inspirados, comenzaron a organizar actividades para limpiar el pueblo y plantar más árboles. Gracias al sabio consejo del gran árbol, aprendieron a valorar y proteger su hogar.`,
        publicationDate: new Date(),
        authorId: 5,
        categoryId: 5,
    },
    {
        title: "El León Valiente",
        summary: "Un joven león demuestra que la valentía no siempre es fuerza.",
        body: `Leo, el pequeño león, siempre había sido el más pequeño de su manada. Sus hermanos solían burlarse de él por su tamaño, pero Leo tenía un corazón grande y valiente. Un día, mientras la manada dormía, un peligroso incendio comenzó a propagarse por la sabana.\r\n\r\nSin dudarlo, Leo corrió hacia el fuego y, con ingenio, encontró una manera de guiar a su familia a un lugar seguro. Al día siguiente, todos reconocieron su valentía y se dieron cuenta de que ser valiente no siempre significa ser fuerte físicamente, sino tener el coraje de actuar en los momentos difíciles.`,
        publicationDate: new Date(),
        authorId: 1,
        categoryId: 6,
    },
    {
        title: "Aventuras en la Galaxia",
        summary: "Un grupo de niños viaja por el espacio en busca de nuevas aventuras.",
        body: `Con su nave espacial, Lucas y sus amigos viajaban de planeta en planeta, encontrando nuevas formas de vida y aprendiendo sobre el universo. En uno de sus viajes, aterrizaron en un planeta donde todo parecía estar hecho de cristal.\r\n\r\nExploraron el planeta y conocieron a sus habitantes, quienes les contaron sobre un gran misterio que necesitaban resolver. Juntos, Lucas y sus amigos ayudaron a los cristalinos a encontrar una fuente de energía perdida. Al resolver el misterio, se ganaron la amistad y el respeto de los habitantes del planeta, continuando así su viaje por la galaxia.`,
        publicationDate: new Date(),
        authorId: 2,
        categoryId: 7,
    },
    {
        title: "El Robot Amigable",
        summary: "Un robot enseña a los niños sobre tecnología y amistad.",
        body: `En el futuro, los robots eran parte de la vida diaria. Max, un robot amigable, se convirtió en el mejor amigo de los niños del barrio, enseñándoles sobre tecnología y la importancia de la amistad. Max siempre estaba dispuesto a ayudar y compartir su conocimiento.\r\n\r\nUn día, un fallo en su sistema hizo que Max se apagara. Los niños, desesperados, buscaron la manera de arreglarlo. Trabajando juntos, lograron reiniciar a Max, quien volvió a la vida. Agradecido, Max les enseñó que la amistad y el trabajo en equipo pueden superar cualquier obstáculo.`,
        publicationDate: new Date(),
        authorId: 3,
        categoryId: 7,
    },
    {
        title: "La Luz de las Estrellas",
        summary: "Una niña descubre la magia de las estrellas y los deseos.",
        body: `Cada noche, Ana miraba las estrellas desde su ventana, soñando con tocar una de ellas. Un día, su deseo se hizo realidad y descubrió un mundo lleno de magia. Las estrellas eran en realidad guardianas de deseos y cada una tenía un poder especial.\r\n\r\nAna se convirtió en amiga de las estrellas y aprendió a pedir deseos con sabiduría. Comprendió que no todos los deseos son para uno mismo, sino también para ayudar a los demás. Con su nueva habilidad, Ana hizo felices a muchos en su pueblo, mostrando que la verdadera magia está en el corazón.`,
        publicationDate: new Date(),
        authorId: 4,
        categoryId: 2,
    },
    {
        title: "El Ratón y el Elefante",
        summary: "Un pequeño ratón y un gran elefante se ayudan mutuamente en el bosque.",
        body: `Aunque eran muy diferentes, el ratón y el elefante se convirtieron en amigos inseparables. Un día, el ratón salvó al elefante de una trampa, demostrando que el tamaño no importa cuando se trata de ayudar a un amigo.\r\n\r\nEl elefante, agradecido, decidió ayudar al ratón siempre que pudiera. Juntos, superaron muchos desafíos en el bosque, enseñando a todos los animales que la amistad verdadera no se mide por el tamaño o la fuerza, sino por el corazón y la lealtad. Así, el ratón y el elefante demostraron que unidos, podían enfrentar cualquier adversidad.`,
        publicationDate: new Date(),
        authorId: 5,
        categoryId: 6,
    },
];

const authors = await db.author.createMany({
    data: authorsData,
});
console.log(`Authors seeded. ${authors.count} records created.`);

const categories = await db.category.createMany({
    data: categoriesData,
});
console.log(`Categores seeded. ${categories.count} records created.`);

const stories = await db.story.createMany({
    data: storiesData,
});
console.log(`Stories seeded. ${stories.count} records created.`);
