import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: false,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    description: {
                        home: 'Home',
                        portfolio: 'Portfolio',
                        about: 'About',
                        contact: 'Contact',
                        music: 'Music',
                        featuredon: 'Featured On',
                        landing: 'Making the music that plays on repeat in my head so you can do the same too.',
                        latestrelease: "The mix of sounds on this track have one goal only; give you the experience of a summer in New York City: Go out and listen to live jazz in Harlem, take the train down to LES for dinner and a drink, stay up all night at a rave in East Williamsburg, and top it all off with a Chopped Cheese sandwich from the deli next door.",
                        listennow: 'Listen Now',
                        about1: 'I have always been fascinated by the amount of different styles of music that humanity has evolved to produce. Generation after generation of artistic expression that go all the way back to our ancestors who lived in caverns and worshiped fire. If anything, this shows how music is something bound to our most primitive instincts.',
                        about2: 'What I pursue with my music is to create sounds that feel human; sounds that connect with the most inner fibers of our beings.',
                        about3: 'I have always seen music as a language that can connect people no matter where they are from, or what language they speak.',
                        about4: "In the same way, my music is the reflection of this belief: I want to create music that doesn't need translation from culture to culture, language to language. How can one achieve this? The answer is creating a sound so universal, that your body and your mind assimilate it before thinking of the words that are being sung. This is the ultimate goal I pursue with all of my music. It doesn't matter if it is a simple composition with voice and guitar, an electronic piece, a Big Band arrangement, or even a full orchestral composition; if I can connect with you before the first word has been sung, I have already won.",
                        contactdesc: 'For any inquiries, please reach me at:',
                        creditlabel: 'Credited as: ',
                        choppedcredit: 'Composer, performer, producer, mixing and mastering engineer.',
                        soulcredit: 'Producer, recording and mixing engineer.',
                        jkcredit: 'Recording, mixing and mastering engineer',
                        yasecredit: 'Composer, writer, producer, mixing and mastering engineer.',
                        inspofromlarcredit: 'Co-producer, mixing and mastering engineer',
                        amycredit: 'Recording, mixing and mastering engineer',
                        housecredit: 'Composer, writer, producer, mixing and mastering engineer.',
                        credit244: 'Composer, writer, producer and mixing engineer.',
                        situationshipcredit: 'Producer and mixing engineer.',
                        risesthemooncredit: 'Guitarrist, producer and mastering engineer',
                        cravecredit: 'Producer and mixing engineer.',
                        bleedoutcredit: 'Producer and mixing engineer.',
                        notmecredit: 'Recording engineer and vocal producer.',
                        letitpopcredit: 'Recording engineer and vocal producer.',
                        somethingnewcredit: 'Horn arranger.',
                        gameovercredit: 'Producer and mixing engineer.',
                        timidocredit: 'Co-writer, co-producer and co-mixing engineer alongside Angel Javier.',
                        analogcredit: 'Producer on Track #1, #4 and #5, Co-writer on Track #4 and #5',
                        keepmeclosecredit: 'Co-writer, co-producer and co-mixing engineer alongside Angel Javier.',
                        bio: 'Bio',
                        biop1: 'Pablo Andrés Muñoz Armella was born on May 7, 1999 in Bogotá D.C, Colombia.  The youngest of three, Pablo started showing interest in music at a young age; at three years old, Pablo was already singing songs by Queen, Juanes, Carlos Vives and Michael Jackson. This interest in music had been cultivated by his father, Mario Leonel, who would play music from all around the world in their house even before Pablo or his siblings were born. The diversity of sounds in the music that his father played, introduced Pablo to the world of music as an art form.',
                        biop2: "At the age of seven, after his family moved from Bogotá to Bucaramanga, Pablo joined his school's choir. At age 11, Pablo started to show interest in playing the Bass; however, his father asked him to consider playing the guitar instead, since they already had one that belonged to his brother. Having recently discovered The Beatles, Pablo started learning their songs and, soon, became fond of the guitar, leaving his interest on bass behind. Right after his 12th birthday, Pablo started taking guitar and music theory lessons. With the years, his interest in studying music and playing with his friends increased. He formed a band with his two best friends at age 14 and, that same year, he decided that he wanted to pursue music as a career. At the age of 15, he started taking piano lessons and a year later he attended Berklee Latino, a Berklee On the Road program directed towards musicians from Latin America. This was the first contact that he had with the school where he wanted to study to become a professional musician.",
                        biop3: "After graduating high school at 16 years old, Pablo moved back to Bogotá to begin his studies at Escuela de Música, Medios, Arte y Tecnología, EMMAT. From 2016 to 2018 he studied Contemporary Music under the guidance of professors who had graduated from Berklee College of Music as well as other schools from around the globe. In the fall of 2018, he transferred his credits to Berklee College of Music in Boston, Massachusetts where he majored in Contemporary Writing and Production and minored in Contemporary Conducting. During his time at Berklee, Pablo worked on building high level writing and production abilities as well as collaborating with his classmates. He has produced, composed, arranged and conducted music in different styles and instrumentations that varied from intimate duos to grandiose Orchestras and Big Bands. Pablo graduated Summa Cum Laude from Berklee College of Music in May 2021. Since then, he has worked as producer, co-writer and performer with artists like Boston's Angel Javier, Aruna, Storyarxh and Lo Key Blaque as well as Brooklyn artist Felice. Between 2022 and 2024, he led the music programming at the music studio of the Brookline Teen Center in Brookline, Massachusetts. In 2023, he released his first EP “HOUSE SHOW” and the follow up single “Ya Sé”. In may of 2024 Pablo moved to New York City where he currently works at MBO Recording as a studio assistant."
                    }
                }
            },
            sp: {
                translation: {
                    description: {
                        home: 'Inicio',
                        portfolio: 'Portafolio',
                        about: 'Acerca de',
                        contact: 'Contacto',
                        music: 'Música',
                        featuredon: 'Publicaciones',
                        landing: 'Escribiendo las canciones que suenan en mi cabeza constantemente para que puedas escucharlas también.',
                        latestrelease: "La mezcla de sonidos en este nuevo tema tienen un objetivo unico; darte la experiencia de vivir un verano en Nueva York: Sal a ver Jazz en vivo en Harlem, coje el metro hacia el Lower East Side para cenar, cruza a East Williamsburg para una fiesta electrónica, y termina la noche con un sanduche 'Chopped Cheese' del deli de la esquina.",
                        listennow: 'Ya Disponible',
                        about1: 'Siempre he estado fascinado por la cantidad diferente de estilos musicales que la humanidad ha ido creando a medida que ha evolucionado. Siendo el resultado de cientos de generaciones de expresión artística que se remontan a cuando nuestros ancestros vivían en cavernas y adoraban al fuego, son prueba de cómo la música está atada a nuestros instintos más primitivos.',
                        about2: 'Lo que busco con mi música es crear sonidos que se sientan fundamentalmente humanos; sonidos que conectan con lo más interno de nuestro ser.',
                        about3: 'Siempre he visto la música como un lenguaje que conecta a la gente sin importar de donde sean ni qué idioma hablen.',
                        about4: 'De la misma manera, mi música es el reflejo de esta creencia: Quiero crear música que no necesita de traducciones entre culturas o idiomas. ¿Cómo podemos lograr esto? La respuesta es crear un sonido universal que nuestro cuerpo y mente puedan disfrutar sin tener que pensar en lo que se está cantando o diciendo. Este es el estándar bajo el cual concibo todas mis composiciones. No importa si es un arreglo simple de voces y guitarra, una producción electrónica, un arreglo de Big Band, o incluso una composición para Orquesta; si logro conectar contigo antes que la primera palabra sea cantada, he logrado mi cometido.',
                        contactdesc: 'Escríbeme para cualquier consulta a:',
                        creditlabel: 'Créditos como:',
                        choppedcredit: 'Compositor, interprete, productor e ingeniero de mezcla y mastering.',
                        soulcredit: 'Productor e ingeniero de grabación y mezcla.',
                        jkcredit: 'Ingeniero de grabación, mezcla y mastering',
                        yasecredit: 'Compositor, letrista, productor e ingeniero de mezcla y mastering.',
                        inspofromlarcredit: 'Co-productor, ingeniero de mezcla y mastering',
                        amycredit: 'Ingeniero de grabación, mezcla y mastering',
                        housecredit: 'Compositor, letrista, productor e ingeniero de mezcla y mastering.',
                        credit244: 'Compositor, letrista, productor e ingeniero de mezcla.',
                        situationshipcredit: 'Productor e ingeniero de mezcla.',
                        risesthemooncredit: 'Guitarrista, productor e ingeniero de mastering',
                        cravecredit: 'Productor e ingeniero de mezcla.',
                        bleedoutcredit: 'Productor e ingeniero de mezcla.',
                        notmecredit: 'Ingeniero de grabación y productor vocal.',
                        letitpopcredit: 'Ingeniero de grabación y productor vocal.',
                        somethingnewcredit: 'Arreglista de vientos.',
                        gameovercredit: 'Productor e ingeniero de mezcla.',
                        timidocredit: 'Co-compositor, productor e ingeniero de mezcla junto a Angel Javier.',
                        analogcredit: 'Productor en las pistas #1, #4 y #5, coautor en las pistas #4 y #5.',
                        keepmeclosecredit: 'Co-compositor, productor e ingeniero de mezcla junto a Angel Javier.',
                        bio: 'Biografia',
                        biop1: 'Pablo Andrés Muñoz Armella nació el 7 de Mayo de 1999 en Bogotá D.C., Colombia. El menor de tres, Pablo mostró interés por la música desde temprana edad; a los tres años de edad, Pablo ya cantaba por la casa canciones de Queen, Juanes, Carlos Vives y Michael Jackson. Su interés por la música fue incitado por su padre, Mario Leonel, quien tocaba música de todas partes del mundo en su casa desde antes que Pablo o sus hermanos hubieran nacido. La diversidad sonora en la música que su padre colocaba, introdujo a Pablo al mundo de la música como expresión artística.',
                        biop2: 'A los siete años, después de que su familia se mudara de Bogotá a Bucaramanga, Pablo empezó a cantar en el coro de su colegio. A los 11, Pablo se interesó en aprender a tocar el bajo; sin embargo, su padre sugirió que mejor aprendiera a tocar la guitarra ya que tenían una en la casa que pertenecía a su hermano mayor. Habiendo descubierto a Los Beatles recientemente, Pablo empezó a aprender como tocar sus canciones y, poco después, se encariñó con la guitarra. Justo después de cumplir 12, Pablo empezó a tomar clases de guitarra y teoría musical. Con los años, su interés por estudiar música y tocar con sus amigos aumentó. A los 14 años formó una banda con sus dos mejores amigos y, ese mismo año, decidió que quería dedicarse a la música como su carrera. A los 15 años empezó a tomar clases de piano y un año después participó en Berklee Latino, un programa parte Berklee on the Road dirigido a músicos de Latinoamérica. Este fue su primer contacto con la universidad en la cual quería estudiar para obtener su título profesional en música.',
                        biop3: 'Después de graduarse del colegio a los 16 años, Pablo se mudó de regreso a Bogotá para empezar sus estudios en la Escuela de Música, Medios, Arte y Tecnología, EMMAT. Del 2016 al 2018 estudió Música Contemporánea con profesores graduados de Berklee College of Music y demás universidades del mundo. En Agosto de 2018, Pablo se transfirió a Berklee College of Music en Boston, Massachusetts, donde estudió Composición Contemporánea y Producción con un minor en Conducción Contemporánea. Durante su tiempo en la universidad, Pablo trabajó en aprender y dominar habilidades de producción y composición de nivel profesional a la par de colaborar con sus compañeros. Él ha producido, compuesto, arreglado y conducido música en diferentes estilos y formatos que variaron desde dúos íntimos hasta grandes orquestas y Big Bands. Pablo se graduó Summa Cum Laude de Berklee College of Music en mayo de 2021. Desde entonces, él ha trabajado como productor, co-autor e intérprete con artistas de Boston y Brooklyn como Angel Javier, Aruna, Storyarxh, Felice y Lo Key Blaque. Desde el 2022 hasta el 2024, lideró el programa de música del Brookline Teen Center en Brookline, Massachusetts. En 2023, Pablo lanzó su primer EP “HOUSE SHOW” seguido del sencillo “Ya Sé”. En mayo del 2024 Pablo se mudó a la ciudad de Nueva York donde trabaja hoy en día como asistente de estuido en MBO Recording.'
                    }
                }
            }
        }
    });

export default i18n;