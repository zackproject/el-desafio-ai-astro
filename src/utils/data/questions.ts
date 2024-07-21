// Default quiz without ai for example games

import type { IQuiz } from "@interfaces/IQuiz";

export const emptyQuiz: IQuiz[] = [
    {
        "id": 1,
        "question": "",
        "options": ["", "", "", ""]
    },
    {
        "id": 2,
        "question": "",
        "options": ["", "", "", ""]
    },
    {
        "id": 3,
        "question": "",
        "options": ["", "", "", ""]
    },
    {
        "id": 4,
        "question": "",
        "options": ["", "", "", ""]
    },
    {
        "id": 5,
        "question": "",
        "options": ["", "", "", ""]
    },
    {
        "id": 6,
        "question": "",
        "options": ["", "", "", ""]
    },
    {
        "id": 7,
        "question": "",
        "options": ["", "", "", ""]
    },
    {
        "id": 8,
        "question": "",
        "options": ["", "", "", ""]
    },
    {
        "id": 9,
        "question": "",
        "options": ["", "", "", ""]
    },
    {
        "id": 10,
        "question": "",
        "options": ["", "", "", ""]
    }
];

export const tecnoQuiz: IQuiz[] = [
    {
        "id": 1,
        "question": "¿Quién inventó la bombilla eléctrica?",
        "options": ["Thomas Edison", "Albert Einstein", "Alexander Graham Bell", "Isaac Newton"]
    },
    {
        "id": 2,
        "question": "¿Cuál es el metal más abundante en la corteza terrestre?",
        "options": ["Aluminio", "Hierro", "Cobre", "Plata"]
    },
    {
        "id": 3,
        "question": "¿Qué científico propuso la teoría de la relatividad?",
        "options": ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Stephen Hawking"]
    },
    {
        "id": 4,
        "question": "¿Cuál es la unidad básica de la estructura de los átomos?",
        "options": ["Electrón", "Protón", "Neutrón", "Núcleo"]
    },
    {
        "id": 5,
        "question": "¿Qué enfermedad erradicó la vacuna de Jonas Salk?",
        "options": ["Polio", "Tétanos", "Varicela", "Sarampión"]
    },
    {
        "id": 6,
        "question": "¿Cuál es el elemento químico más ligero?",
        "options": ["Hidrógeno", "Helio", "Litio", "Carbono"]
    },
    {
        "id": 7,
        "question": "¿Quién descubrió la penicilina?",
        "options": ["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Robert Koch"]
    },
    {
        "id": 8,
        "question": "¿Qué invento permitió la escritura de información en discos ópticos?",
        "options": ["Láser", "Transistor", "Microchip", "Disco duro"]
    },
    {
        "id": 9,
        "question": "¿Cuál es el nombre del primer satélite artificial lanzado al espacio?",
        "options": ["Sputnik 1", "Apollo 11", "Vostok 1", "Hubble"]
    },
    {
        "id": 10,
        "question": "¿Qué teoría científica describe la expansión acelerada del universo?",
        "options": ["Teoría del Big Bang", "Teoría de la Relatividad General", "Teoría del Multiverso", "Teoría de la Inflación Cósmica"]
    }
];

const historyQuiz: IQuiz[] = [
    {
        "id": 1,
        "question": "¿En qué año comenzó la Primera Guerra Mundial?",
        "options": ["1914", "1905", "1920", "1939"]
    },
    {
        "id": 2,
        "question": "¿Quién fue el primer presidente de Estados Unidos?",
        "options": ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"]
    },
    {
        "id": 3,
        "question": "¿En qué año terminó la Segunda Guerra Mundial?",
        "options": ["1945", "1939", "1940", "1942"]
    },
    {
        "id": 4,
        "question": "¿Quién fue el líder de la Revolución Rusa en 1917?",
        "options": ["Vladimir Lenin", "Joseph Stalin", "Leon Trotsky", "Mikhail Gorbachev"]
    },
    {
        "id": 5,
        "question": "¿Qué evento histórico se conmemora el 14 de julio en Francia?",
        "options": ["La Toma de la Bastilla", "La Revolución Francesa", "El fin de la Segunda Guerra Mundial", "La coronación de Napoleón"]
    },
    {
        "id": 6,
        "question": "¿Quién fue el líder de la Revolución Cubana?",
        "options": ["Fidel Castro", "Che Guevara", "Raul Castro", "Batista"]
    },
    {
        "id": 7,
        "question": "¿En qué año se firmó la Declaración de Independencia de Estados Unidos?",
        "options": ["1776", "1789", "1804", "1812"]
    },
    {
        "id": 8,
        "question": "¿Cuál fue la batalla final que puso fin a las Guerras Napoleónicas?",
        "options": ["Batalla de Waterloo", "Batalla de Austerlitz", "Batalla de Leipzig", "Batalla de Borodino"]
    },
    {
        "id": 9,
        "question": "¿Quién fue el emperador de Japón durante la Segunda Guerra Mundial?",
        "options": ["Emperador Hirohito", "Emperador Meiji", "Emperador Taisho", "Emperador Akihito"]
    },
    {
        "id": 10,
        "question": "¿Qué evento marcó el comienzo de la Revolución Francesa en 1789?",
        "options": ["La Toma de la Bastilla", "La Batalla de Waterloo", "La coronación de Napoleón", "La muerte de Luis XVI"]
    }
];

const literatureQuiz: IQuiz[] = [
    {
        "id": 1,
        "question": "¿Quién escribió 'Romeo y Julieta'?",
        "options": ["William Shakespeare", "Miguel de Cervantes", "Gabriel García Márquez", "Leo Tolstoy"]
    },
    {
        "id": 2,
        "question": "¿Cuál es el género literario de 'Don Quijote de la Mancha'?",
        "options": ["Novela", "Poesía", "Teatro", "Ensayo"]
    },
    {
        "id": 3,
        "question": "¿Quién escribió 'Cien años de soledad'?",
        "options": ["Gabriel García Márquez", "Jorge Luis Borges", "Julio Cortázar", "Pablo Neruda"]
    },
    {
        "id": 4,
        "question": "¿Qué premio literario se considera el más prestigioso en lengua española?",
        "options": ["Premio Cervantes", "Premio Nobel", "Premio Planeta", "Premio Booker"]
    },
    {
        "id": 5,
        "question": "¿Cuál es la obra más conocida de Franz Kafka?",
        "options": ["La metamorfosis", "1984", "El gran Gatsby", "Matar un ruiseñor"]
    },
    {
        "id": 6,
        "question": "¿En qué obra aparece el personaje Jean Valjean?",
        "options": ["Los miserables", "Orgullo y prejuicio", "El retrato de Dorian Gray", "La naranja mecánica"]
    },
    {
        "id": 7,
        "question": "¿Cuál es el autor de 'Moby Dick'?",
        "options": ["Herman Melville", "Nathaniel Hawthorne", "Mark Twain", "Emily Dickinson"]
    },
    {
        "id": 8,
        "question": "¿Qué escritor uruguayo ganó el Premio Nobel de Literatura en 2010?",
        "options": ["Mario Vargas Llosa", "Gabriel García Márquez", "Jorge Luis Borges", "Juan Carlos Onetti"]
    },
    {
        "id": 9,
        "question": "¿Cuál es el nombre del protagonista de 'El guardián entre el centeno'?",
        "options": ["Holden Caulfield", "Jay Gatsby", "Nick Carraway", "Atticus Finch"]
    },
    {
        "id": 10,
        "question": "¿Quién escribió la obra '1984'?",
        "options": ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.R.R. Tolkien"]
    }
];

const geographyQuiz: IQuiz[] = [
    {
        "id": 1,
        "question": "¿Cuál es la capital de Francia?",
        "options": ["Madrid", "París", "Londres", "Berlín"]
    },
    {
        "id": 2,
        "question": "¿En qué continente se encuentra Australia?",
        "options": ["Oceanía", "Europa", "Asia", "América"]
    },
    {
        "id": 3,
        "question": "¿Cuál es el río más largo del mundo?",
        "options": ["Amazonas", "Nilo", "Yangtsé", "Misisipi"]
    },
    {
        "id": 4,
        "question": "¿Dónde se encuentra la Gran Barrera de Coral?",
        "options": ["Australia", "Brasil", "Indonesia", "Hawái"]
    },
    {
        "id": 5,
        "question": "¿Cuál es la montaña más alta del mundo?",
        "options": ["Monte Everest", "Monte Kilimanjaro", "Monte Aconcagua", "Monte McKinley"]
    },
    {
        "id": 6,
        "question": "¿Cuál es el océano más grande?",
        "options": ["Pacífico", "Atlántico", "Índico", "Ártico"]
    },
    {
        "id": 7,
        "question": "¿Dónde se encuentra la Ciudad del Vaticano?",
        "options": ["Italia", "España", "Suiza", "Francia"]
    },
    {
        "id": 8,
        "question": "¿Qué país es conocido como 'el país de las mil islas'?",
        "options": ["Indonesia", "Filipinas", "Japón", "Grecia"]
    },
    {
        "id": 9,
        "question": "¿Cuál es el punto más bajo de la Tierra?",
        "options": ["Mar Muerto", "Valle de la Muerte", "Gran Cañón", "Lago Assal"]
    },
    {
        "id": 10,
        "question": "¿Cuál es la capital más septentrional del mundo?",
        "options": ["Reikiavik", "Moscú", "Oslo", "Nuuk"]
    }
];

const cineTvQuiz: IQuiz[] = [
    {
        "id": 1,
        "question": "¿En qué película aparece el personaje Harry Potter?",
        "options": ["Harry Potter y la Piedra Filosofal", "Titanic", "El Padrino", "Toy Story"]
    },
    {
        "id": 2,
        "question": "¿Quién dirigió la película 'Titanic'?",
        "options": ["James Cameron", "Steven Spielberg", "Christopher Nolan", "Quentin Tarantino"]
    },
    {
        "id": 3,
        "question": "¿Cuál es el nombre del actor que interpretó a Iron Man en el Universo Cinematográfico de Marvel?",
        "options": ["Robert Downey Jr.", "Chris Evans", "Chris Hemsworth", "Tom Hiddleston"]
    },
    {
        "id": 4,
        "question": "¿Qué serie de televisión es conocida por sus personajes Ross, Rachel, Monica, Chandler, Joey y Phoebe?",
        "options": ["Friends", "Breaking Bad", "Game of Thrones", "Stranger Things"]
    },
    {
        "id": 5,
        "question": "¿Quién ganó el premio Óscar al Mejor Actor por su papel en la película 'El Renacido'?",
        "options": ["Leonardo DiCaprio", "Brad Pitt", "Tom Hanks", "Joaquin Phoenix"]
    },
    {
        "id": 6,
        "question": "¿Qué director es conocido por películas como 'Pulp Fiction' y 'Kill Bill'?",
        "options": ["Quentin Tarantino", "Martin Scorsese", "Christopher Nolan", "David Fincher"]
    },
    {
        "id": 7,
        "question": "¿En qué ciudad se desarrolla la serie 'Breaking Bad'?",
        "options": ["Albuquerque", "Los Angeles", "New York", "Miami"]
    },
    {
        "id": 8,
        "question": "¿Cuál de estos premios es conocido como 'el Oscar de la televisión'?",
        "options": ["Emmy", "Golden Globe", "Grammy", "Tony"]
    },
    {
        "id": 9,
        "question": "¿Cuál de estas películas es conocida por ser una adaptación de un libro de J.R.R. Tolkien?",
        "options": ["El Señor de los Anillos", "Matrix", "Avatar", "La La Land"]
    },
    {
        "id": 10,
        "question": "¿Quién fue el director de la película 'La La Land', ganadora de varios premios Óscar?",
        "options": ["Damien Chazelle", "Steven Spielberg", "David Fincher", "Woody Allen"]
    }
];

const musicQuiz: IQuiz[] = [
    {
        "id": 1,
        "question": "¿Quién fue el vocalista principal de la banda de rock Queen?",
        "options": ["Freddie Mercury", "Mick Jagger", "David Bowie", "Elton John"]
    },
    {
        "id": 2,
        "question": "¿Qué instrumento toca Yo-Yo Ma?",
        "options": ["Cello", "Violin", "Piano", "Guitarra"]
    },
    {
        "id": 3,
        "question": "¿Cuál es el género principal de la banda Metallica?",
        "options": ["Heavy Metal", "Punk Rock", "Pop", "Reggae"]
    },
    {
        "id": 4,
        "question": "¿Qué famoso álbum de los Beatles fue lanzado en 1967?",
        "options": ["Sgt. Pepper's Lonely Hearts Club Band", "Abbey Road", "Revolver", "Let It Be"]
    },
    {
        "id": 5,
        "question": "¿Quién es conocido como 'El Rey del Pop'?",
        "options": ["Michael Jackson", "Elvis Presley", "Prince", "Stevie Wonder"]
    },
    {
        "id": 6,
        "question": "¿Cuál es el nombre de pila de la cantante Lady Gaga?",
        "options": ["Stefani Joanne Angelina Germanotta", "Katy Perry", "Taylor Swift", "Beyoncé Knowles"]
    },
    {
        "id": 7,
        "question": "¿En qué año se lanzó el álbum 'Thriller' de Michael Jackson?",
        "options": ["1982", "1984", "1980", "1986"]
    },
    {
        "id": 8,
        "question": "¿Qué premio reciben los artistas por ventas de discos superiores a un millón de copias?",
        "options": ["Disco de Platino", "Disco de Oro", "Grammy", "Premio Billboard"]
    },
    {
        "id": 9,
        "question": "¿Qué banda de rock británica lanzó el álbum 'OK Computer'?",
        "options": ["Radiohead", "Coldplay", "The Rolling Stones", "Led Zeppelin"]
    },
    {
        "id": 10,
        "question": "¿Quién es conocido por su guitarra 'Lucille'?",
        "options": ["B.B. King", "Eric Clapton", "Jimi Hendrix", "Carlos Santana"]
    }
];

const artQuiz: IQuiz[] = [
    {
        "id": 1,
        "question": "¿Quién pintó la Mona Lisa?",
        "options": ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Claude Monet"]
    },
    {
        "id": 2,
        "question": "¿En qué ciudad se encuentra la Torre Eiffel?",
        "options": ["París", "Londres", "Roma", "Nueva York"]
    },
    {
        "id": 3,
        "question": "¿Cuál de estas obras es un cuadro de Vincent van Gogh?",
        "options": ["La noche estrellada", "El grito", "La persistencia de la memoria", "Las meninas"]
    },
    {
        "id": 4,
        "question": "¿Qué movimiento artístico se caracteriza por formas geométricas y colores primarios?",
        "options": ["Arte abstracto", "Cubismo", "Renacimiento", "Expresionismo"]
    },
    {
        "id": 5,
        "question": "¿Quién diseñó la Casa Batlló en Barcelona?",
        "options": ["Antoni Gaudí", "Frank Lloyd Wright", "Le Corbusier", "Mies van der Rohe"]
    },
    {
        "id": 6,
        "question": "¿Qué pintor es conocido por sus cuadros de jardines con nenúfares?",
        "options": ["Claude Monet", "Salvador Dalí", "Edgar Degas", "Jackson Pollock"]
    },
    {
        "id": 7,
        "question": "¿A qué estilo arquitectónico pertenece el Partenón en Atenas?",
        "options": ["Dórico", "Jónico", "Corintio", "Románico"]
    },
    {
        "id": 8,
        "question": "¿Quién es conocido por haber esculpido 'El pensador'?",
        "options": ["Auguste Rodin", "Michelangelo", "Donatello", "Alberto Giacometti"]
    },
    {
        "id": 9,
        "question": "¿Qué artista es famoso por su serie de pinturas 'Campbell's Soup Cans'?",
        "options": ["Andy Warhol", "Jackson Pollock", "Mark Rothko", "Georgia O'Keeffe"]
    },
    {
        "id": 10,
        "question": "¿Cuál de estas obras de arte es un fresco de Miguel Ángel?",
        "options": ["La creación de Adán", "El jardín de las delicias", "Guernica", "La persistencia de la memoria"]
    }
];

const natureQuiz: IQuiz[] = [
    {
        "id": 1,
        "question": "¿Qué tipo de animal es el oso polar?",
        "options": ["Mamífero", "Ave", "Reptil", "Anfibio"]
    },
    {
        "id": 2,
        "question": "¿Cuál es el proceso por el cual las plantas producen su propio alimento?",
        "options": ["Fotosíntesis", "Respiración", "Digestión", "Fermentación"]
    },
    {
        "id": 3,
        "question": "¿Cuál es el depredador natural del ciervo?",
        "options": ["Lobo", "Águila", "Oso", "Tiburón"]
    },
    {
        "id": 4,
        "question": "¿Qué significa la sigla 'CO2'?",
        "options": ["Dióxido de carbono", "Monóxido de carbono", "Óxido de carbono", "Carbonato de oxígeno"]
    },
    {
        "id": 5,
        "question": "¿En qué parte de la planta se encuentra la clorofila?",
        "options": ["En las hojas", "En las raíces", "En el tallo", "En las flores"]
    },
    {
        "id": 6,
        "question": "¿Cuál es el ecosistema más grande del mundo?",
        "options": ["Océano", "Selva tropical", "Desierto", "Tundra"]
    },
    {
        "id": 7,
        "question": "¿Cuál de estos animales es un carnívoro?",
        "options": ["León", "Vaca", "Caballo", "Conejo"]
    },
    {
        "id": 8,
        "question": "¿Cuál es el gas que se considera principal responsable del efecto invernadero?",
        "options": ["CO2 (Dióxido de carbono)", "O3 (Ozono)", "N2O (Óxido nitroso)", "CH4 (Metano)"]
    },
    {
        "id": 9,
        "question": "¿Cuál es el nombre común de 'Canis lupus'?",
        "options": ["Lobo", "León", "Oso", "Tigre"]
    },
    {
        "id": 10,
        "question": "¿Cuál es el fenómeno que ocurre cuando una especie desaparece completamente de la Tierra?",
        "options": ["Extinción", "Evolución", "Migración", "Mutación"]
    }
];

export const quizList = [
    {
        id: 1,
        title: "Ciencia y tecnología",
        quiz: tecnoQuiz
    }/*,
    {
        id: 2,
        title: "Historia mundial",
        quiz: historyQuiz
    },
    {
        id: 3,
        title: "Cine y televisión",
        quiz: cineTvQuiz
    },
    {
        id: 4,
        title: "Literatura",
        quiz: literatureQuiz
    },
    {
        id: 5,
        title: "Geografía",
        quiz: geographyQuiz
    },
    {
        id: 6,
        title: "Música",
        quiz: musicQuiz
    },
    {
        id: 7,
        title: "Arte y arquitectura",
        quiz: artQuiz
    },
    {
        id: 8,
        title: "Naturaleza",
        quiz: natureQuiz
    },*/
]


export function getQuestionQuiz() {
    const i = 4;
    const quiz = artQuiz;
    console.log(quiz[i]);
    return `${quiz[i].question} A) ${quiz[i].options[0]} B) ${quiz[i].options[1]} C) ${quiz[i].options[2]} D) ${quiz[i].options[3]} `
}