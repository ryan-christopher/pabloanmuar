import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
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
                        latestrelease: 'Written over the last 3 years, HOUSE SHOW is a conceptual record that uses the aesthetic of the DIY scene and the basement show to bring together all of its songs. Each track represents an act at this house show and, at the same time, each song follows its own narrative.',
                        listennow: 'Listen Now',
                        about1: 'I have always been fascinated by the amount of different styles of music that humanity has evolved to produce. Generation after generation of artistic expression that go all the way back to our ancestors who lived in caverns and worshiped fire. If anything, this shows how music is something bound to our most primitive instincts.',
                        about2: 'What I pursue with my music is to create sounds that feel human; sounds that connect with the most inner fibers of our beings.',
                        about3: 'I have always seen music as a language that can connect people no matter where they are from, or what language they speak.',
                        about4: "In the same way, my music is the reflection of this belief: I want to create music that doesn't need translation from culture to culture, language to language. How can one achieve this? The answer is creating a sound so universal, that your body and your mind assimilate it before thinking of the words that are being sung. This is the ultimate goal I pursue with all of my music. It doesn't matter if it is a simple composition with voice and guitar, an electronic piece, a Big Band arrangement, or even a full orchestral composition; if I can connect with you before the first word has been sung, I have already won.",
                        contactdesc: 'For any inquiries, please reach me at:',
                        creditlabel: 'Credited as: ',
                        yasecredit: 'Composer, writer, producer, mixing and mastering engineer.',
                        housecredit: 'Composer, writer, producer, mixing and mastering engineer.',
                        credit244: 'Composer, writer, producer and mixing engineer.',
                        situationshipcredit: 'Producer and mixing engineer.',
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
                        biop1: 'Pablo Andrés Muñoz Armella was born on May 7, 1999 in Bogotá D.C., Colombia.  The youngest of three, Pablo started showing interest in music at a young age; at three years old, Pablo was already singing songs by Queen, Juanes, Carlos Vives, Michael Jackson. This interest in music had been cultivated by his father, Mario Leonel Muñoz Buitrago, who would play music from all around the world even before Pablo or his siblings were born. The diversity of sounds in the music that his father played, introduced Pablo to the world of music as an art form.',
                        biop2: "At the age of seven, after his family moved from Bogotá to Bucaramanga, Pablo joined his school's choir. At the age of 11, Pablo started to show interest on playing the Bass; however, his father asked him to consider playing the guitar instead, since they already had one that belonged to his brother. Having recently discovered The Beatles, Pablo started learning their songs and, soon, became fond of the guitar, leaving his interest on bass behind. Right after his 12th birthday, Pablo started taking guitar and music theory lessons. With the years, his interest in studying music and playing with his friends increased.  He formed a band with his two best friends at the age of 14, and that same year he decided that he wanted to pursue music as a career. At the age of 15 he started taking piano lessons, and a year later he attended “Berklee Latino”, a Berklee On the Road program directed to musicians from Latin America; this was the first contact that he had with the school where he wanted to study to become a professional musician.",
                        biop3: 'After graduating high school at 16 years old, Pablo moved back to Bogotá, he started studying music at Escuela de Música, Medios, Arte y Tecnología, EMMAT. From 2016 to 2018 he studied Contemporary Music under the guidance of professors who had graduated from Berklee College of Music. On the fall of 2018, he transferred his college credits to Berklee College of Music and started studying Contemporary Writing and Production. During his time in the college, Pablo has worked on building high level writing and production abilities. He has collaborated with many of his fellow students in different arrangements and compositions. He has co-produced and co-written two singles with the artist Javier, produced one single with LA artist Felice. Pablo graduated Summa Cum Laude from Berklee College of Music on May 2021.'
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
                        latestrelease: 'Escrito durante los últimos 3 años, HOUSE SHOW es un disco conceptual que une sus canciones bajo la estética de la escena musical DIY y los "Basement Shows". Cada canción representa un acto de este show casero y, paralelamente, cada canción traza su propia narrativa.',
                        listennow: 'Ya Disponible',
                        about1: 'Siempre he estado fascinado por la cantidad diferente de estilos musicales que la humanidad ha ido creando a medida que ha evolucionado. Siendo el resultado de cientos de generaciones de expresión artística que se remontan a cuando nuestros ancestros vivían en cavernas y adoraban al fuego, son prueba de cómo la música está atada a nuestros instintos más primitivos.',
                        about2: 'Lo que busco con mi música es crear sonidos que se sientan fundamentalmente humanos; sonidos que conectan con lo más interno de nuestro ser.',
                        about3: 'Siempre he visto la música como un lenguaje que conecta a la gente sin importar de donde sean ni qué idioma hablen.',
                        about4: 'De la misma manera, mi música es el reflejo de esta creencia: Quiero crear música que no necesita de traducciones entre culturas o idiomas. ¿Cómo podemos lograr esto? La respuesta es crear un sonido universal que nuestro cuerpo y mente puedan disfrutar sin tener que pensar en lo que se está cantando o diciendo. Este es el estándar bajo el cual concibo todas mis composiciones. No importa si es un arreglo simple de voces y guitarra, una producción electrónica, un arreglo de Big Band, o incluso una composición para Orquesta; si logro conectar contigo antes que la primera palabra sea cantada, he logrado mi cometido.',
                        contactdesc: 'Escríbeme para cualquier consulta a:',
                        creditlabel: 'Créditos como:',
                        yasecredit: 'Compositor, letrista, productor e ingeniero de mezcla y mastering.',
                        housecredit: 'Compositor, letrista, productor e ingeniero de mezcla y mastering.',
                        credit244: 'Compositor, letrista, productor e ingeniero de mezcla.',
                        situationshipcredit: 'Productor e ingeniero de mezcla.',
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
                    }
                }
            }
        }
    });

export default i18n;