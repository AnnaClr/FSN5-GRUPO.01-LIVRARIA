// Importing Books Images:
import GuerraEPaz from "../imgs/BookImgs/GuerraEPaz.jpg";
import RevolucaoDosBichos from "../imgs/BookImgs/RevolucaoDosBichos.jpg";
import Duna from "../imgs/BookImgs/Duna.png";
import AindaEstouAqui from "../imgs/BookImgs/AindaEstouAqui.png";
import Conclave from "../imgs/BookImgs/Conclave.png";
import Wicked from "../imgs/BookImgs/Wicked.png";
import OReformatorioNickel from "../imgs/BookImgs/OReformatorioNickel.png";
import DomCasmurro from "../imgs/BookImgs/DomCasmurro.png";
import GrandeSertão from "../imgs/BookImgs/GrandeSertão.png";
import VidasSecas from "../imgs/BookImgs/VidasSecas.png";
import BrasCubas from "../imgs/BookImgs/BrasCubas.png";
import QuartoDeDespejo from '../imgs/BookImgs/QuartoDeDespejo.png';
import HoraDaEstrela from "../imgs/BookImgs/HoraDaEstrela.png";
import PonciaVicencio from "../imgs/BookImgs/PonciaVicencio.png";
import OlhosDAgua from "../imgs/BookImgs/OlhosDAgua.jpg";
import ContoDaAia from "../imgs/BookImgs/ContoDaAia.jpg";
import Kindred from "../imgs/BookImgs/Kindred.jpg";
import Americanah from "../imgs/BookImgs/Americanah.jpg";
import CorPurpura from "../imgs/BookImgs/CorPurpura.jpg";
import Persepolis from "../imgs/BookImgs/Persepolis.jpg";


export const books = [
  {
    id: 1,
    title: "Dom Casmurro",
    author: "Machado de Assis",
    description:
      "Um dos maiores clássicos da literatura brasileira, narrando a história de Bentinho e seu ciúme obsessivo por Capitu.",
    FullDescription:
      "Bentinho, um homem já de idade avançada, reflete sobre sua juventude e sua relação com Capitu. O livro foca no ciúme obsessivo de Bentinho e a relação que ele tem com sua esposa, levando a uma trama de incertezas e desconfiança.",
    physicalPrice: 49.9,
    ebookPrice: 39.9,
    stock: 10,
    review: 4.5,
    totalReviews: 150,
    publication: "1899",
    publisher: "Livraria Garnier",
    language: "Português",
    pages: 256,
    image: DomCasmurro,
  },
  {
    id: 2,
    title: "Grande Sertão: Veredas",
    author: "João Guimarães Rosa",
    description:
      "Uma narrativa inovadora que apresenta a jornada de Riobaldo pelo sertão brasileiro.",
    FullDescription:
      "A obra é uma complexa reflexão sobre a existência e o destino, através da história de Riobaldo, um jagunço que luta com suas crenças, dilemas e paixões. O romance é rico em regionalismos e examina profundamente as questões humanas.",
    physicalPrice: 69.9,
    ebookPrice: 59.9,
    stock: 0,
    review: 4.7,
    totalReviews: 200,
    publication: "1956",
    publisher: "Editora Nova Fronteira",
    language: "Português",
    pages: 608,
    image: GrandeSertão,
  },
  {
    id: 3,
    title: "Vidas Secas",
    author: "Graciliano Ramos",
    description:
      "A luta de uma família sertaneja contra a seca e as dificuldades da vida no Nordeste.",
    FullDescription:
      "Este romance descreve as dificuldades de uma família pobre que luta pela sobrevivência no sertão nordestino, explorando temas como miséria, seca e desesperança. A obra é um retrato fiel da dura realidade de muitas famílias no Brasil.",
    physicalPrice: 44.9,
    ebookPrice: 34.9,
    stock: 5,
    review: 4.8,
    totalReviews: 180,
    publication: "1938",
    publisher: "Editora Record",
    language: "Português",
    pages: 176,
    image: VidasSecas,
  },
  {
    id: 4,
    title: "Memórias Póstumas de Brás Cubas",
    author: "Machado de Assis",
    description: "Uma obra inovadora que traz a narrativa de um defunto autor.",
    FullDescription:
      "O narrador, Brás Cubas, é um defunto que, após sua morte, decide contar sua história. O romance é uma crítica à sociedade brasileira do século XIX, misturando humor e reflexão filosófica.",
    physicalPrice: 49.9,
    ebookPrice: 39.9,
    stock: 10,
    review: 4.6,
    totalReviews: 120,
    publication: "1881",
    publisher: "Editora Garnier",
    language: "Português",
    pages: 240,
    image: BrasCubas,
  },
    {
      id: 5,
      title: "Quarto de Despejo",
      author: "Carolina Maria de Jesus",
      description:
        "O diário de uma mulher que vive na favela e luta para sustentar seus filhos.",
      FullDescription:
        "Carolina Maria de Jesus narra, em forma de diário, o cotidiano de uma mulher pobre que vive na favela do Canindé, em São Paulo. A obra é um retrato cru e realista da miséria e da luta pela sobrevivência, com uma escrita potente e emocionante.",
      physicalPrice: 59.90,
      ebookPrice: 49.90,
      stock: 8,
      review: 4.9,
      totalReviews: 220,
      publication: "1960",
      publisher: "Editora Companhia das Letras",
      language: "Português",
      pages: 200,
      image: QuartoDeDespejo,
    },
    {
      id: 6,
      title: "A Hora da Estrela",
      author: "Clarice Lispector",
      description:
        "A história de Macabéa, uma jovem nordestina que tenta sobreviver no Rio de Janeiro.",
      FullDescription:
        "Macabéa é uma datilógrafa ingênua e solitária que migra do Nordeste para o Rio de Janeiro. A obra explora temas como a solidão, a identidade e a condição humana, com a prosa única e introspectiva de Clarice Lispector.",
      physicalPrice: 44.90,
      ebookPrice: 34.90,
      stock: 6,
      review: 4.8,
      totalReviews: 150,
      publication: "1977",
      publisher: "Editora Rocco",
      language: "Português",
      pages: 96,
      image: HoraDaEstrela,
    },
    {
      id: 7,
      title: "Ponciá Vicêncio",
      author: "Conceição Evaristo",
      description:
        "A trajetória de uma mulher negra em busca de sua identidade e ancestralidade.",
      FullDescription:
        "Ponciá Vicêncio é uma mulher negra que migra do campo para a cidade em busca de uma vida melhor. A obra aborda temas como racismo, memória e identidade, com uma narrativa poética e envolvente de Conceição Evaristo.",
      physicalPrice: 39.90,
      ebookPrice: 29.90,
      stock: 5,
      review: 4.5,
      totalReviews: 120,
      publication: "2003",
      publisher: "Editora Pallas",
      language: "Português",
      pages: 128,
      image: PonciaVicencio,
    },
    {
      id: 8,
      title: "Olhos D'Água",
      author: "Conceição Evaristo",
      description:
        "Contos que retratam a vida de mulheres negras e suas lutas cotidianas.",
      FullDescription:
        'Em "Olhos D\'Água", Conceição Evaristo reúne contos que exploram a vida de mulheres negras, suas dores, alegrias e resistências. A obra é marcada por uma escrita sensível e poderosa, que dá voz a histórias muitas vezes silenciadas.',
      physicalPrice: 47.90,
      ebookPrice: 37.90,
      stock: 8,
      review: 4.7,
      totalReviews: 180,
      publication: "2014",
      publisher: "Editora Pallas",
      language: "Português",
      pages: 144,
      image: OlhosDAgua,
    },
    {
      id: 9,
      title: "O Conto da Aia",
      author: "Margaret Atwood",
      description:
        "Uma distopia que explora um futuro onde as mulheres são subjugadas por um regime teocrático.",
      FullDescription:
        'Em um futuro distópico, os Estados Unidos são controlados por um regime teocrático que subjuga as mulheres, transformando-as em propriedade do Estado. A história é narrada por Offred, uma "aia" que luta para sobreviver e recuperar sua liberdade.',
      physicalPrice: 79.90,
      ebookPrice: 69.90,
      stock: 10,
      review: 4.9,
      totalReviews: 300,
      publication: "1985",
      publisher: "Editora Rocco",
      language: "Inglês",
      pages: 368,
      image: ContoDaAia,
    },
    {
      id: 10,
      title: "Kindred: Laços de Sangue",
      author: "Octavia E. Butler",
      description:
        "Uma viagem no tempo que conecta uma mulher moderna ao passado escravista dos Estados Unidos.",
      FullDescription:
        "Dana, uma mulher negra dos anos 1970, é misteriosamente transportada para o século XIX, onde se vê confrontada com a realidade da escravidão. A obra mistura ficção científica e crítica social, explorando temas como racismo e identidade.",
      physicalPrice: 49.90,
      ebookPrice: 39.90,
      stock: 8,
      review: 4.8,
      totalReviews: 250,
      publication: "1979",
      publisher: "Editora Morro Branco",
      language: "Inglês",
      pages: 288,
      image: Kindred,
    },
    {
      id: 11,
      title: "Americanah",
      author: "Chimamanda Ngozi Adichie",
      description:
        "A história de uma jovem nigeriana que emigra para os Estados Unidos e reflete sobre raça e identidade.",
      FullDescription:
        "Ifemelu deixa a Nigéria para estudar nos Estados Unidos, onde enfrenta questões de raça e identidade. Anos depois, ela retorna ao seu país de origem e reflete sobre suas experiências e transformações. A obra é uma poderosa análise sobre migração e racismo.",
      physicalPrice: 55.90,
      ebookPrice: 45.90,
      stock: 12,
      review: 4.9,
      totalReviews: 300,
      publication: "2013",
      publisher: "Editora Companhia das Letras",
      language: "Inglês",
      pages: 520,
      image: Americanah,
    },
    {
      id: 12,
      title: "A Cor Púrpura",
      author: "Alice Walker",
      description:
        "A história de Celie, uma mulher negra que supera o abuso e a opressão para encontrar sua voz e independência.",
      FullDescription:
        "Celie é uma mulher negra que sofre abusos na infância e na vida adulta. Através de cartas, ela narra sua jornada de superação e descoberta de sua própria identidade e força. A obra é um clássico da literatura feminista e antirracista.",
      physicalPrice: 49.90,
      ebookPrice: 39.90,
      stock: 10,
      review: 4.9,
      totalReviews: 300,
      publication: "1982",
      publisher: "Editora José Olympio",
      language: "Inglês",
      pages: 304,
      image: CorPurpura,
    },
    {
      id: 13,
      title: "Persépolis",
      author: "Marjane Satrapi",
      description:
        "Uma autobiografia em quadrinhos que narra a infância e adolescência da autora durante a Revolução Islâmica no Irã.",
      FullDescription:
        "Marjane Satrapi conta sua história de vida, desde a infância no Irã até sua adolescência na Europa, durante a Revolução Islâmica. A obra é uma reflexão sobre identidade, liberdade e resistência, com uma narrativa visual poderosa.",
      physicalPrice: 59.90,
      ebookPrice: 49.90,
      stock: 7,
      review: 4.9,
      totalReviews: 300,
      publication: "2000",
      publisher: "Editora Companhia das Letras",
      language: "Francês",
      pages: 352,
      image: Persepolis,
    },
    {
      id: 14,
      title: "Guerra e Paz",
      author: "Liev Tolstói",
      description:
        "O épico russo que entrelaça histórias pessoais e históricas durante a invasão napoleônica da Rússia, explorando temas de amor, guerra e destino.",
      FullDescription:
        "Guerra e Paz é uma das obras mais importantes da literatura mundial, narrando a vida de várias famílias aristocráticas russas durante a invasão napoleônica. O livro mistura ficção e história, explorando temas como amor, guerra e destino.",
      physicalPrice: 79.90,
      ebookPrice: 69.90,
      stock: 5,
      review: 4.9,
      totalReviews: 300,
      publication: "1869",
      publisher: "Editora Penguin",
      language: "Russo",
      pages: 1225,
      image: GuerraEPaz,
    },
    {
      id: 15,
      title: "A Revolução dos Bichos",
      author: "George Orwell",
      description:
        "Uma alegoria política brilhante que descreve uma revolução animal em uma fazenda, refletindo os perigos de regimes totalitários.",
      FullDescription:
        "A Revolução dos Bichos é uma fábula política que narra a revolta dos animais de uma fazenda contra os humanos. No entanto, a revolução é corrompida pelos porcos, que assumem o controle e estabelecem um regime tão opressivo quanto o anterior.",
      physicalPrice: 39.90,
      ebookPrice: 29.90,
      stock: 15,
      publication: "1945",
      publisher: "Penguin Books",
      language: "Inglês",
      pages: 112,
      image: RevolucaoDosBichos,
    },
    {
      id: 16,
      title: "Duna",
      author: "Frank Herbert",
      description:
        "A épica história de Paul Atreides e a luta pelo planeta Arrakis.",
      FullDescription:
        "Duna é uma história épica de política, religião e poder em um futuro distante, com foco na luta pelo controle de Arrakis, o planeta mais valioso do universo devido à sua produção de especiarias. A obra mistura elementos de ficção científica com profundas questões filosóficas.",
      physicalPrice: 89.90,
      ebookPrice: 79.90,
      stock: 8,
      publication: "1965",
      publisher: "Editora Aleph",
      language: "Inglês",
      pages: 896,
      image: Duna,
    },
    {
      id: 17,
      title: "Conclave",
      author: "Robert Harris",
      description: "Um thriller político sobre a eleição de um novo Papa.",
      FullDescription:
        "Conclave é um thriller político que se passa no processo de eleição de um novo Papa. A obra explora os bastidores do Vaticano, suas intrigas políticas e os segredos que permeiam o alto clero.",
      physicalPrice: 76.90,
      ebookPrice: 66.90,
      stock: 9,
      publication: "2016",
      publisher: "Editora Intrínseca",
      language: "Inglês",
      pages: 352,
      image: Conclave,
    },
    {
      id: 18,
      title: "Wicked",
      author: "Gregory Maguire",
      description: "A história não contada da Bruxa Má do Oeste.",
      FullDescription:
        'Wicked reconta a história da Bruxa Má do Oeste, dando uma nova perspectiva à vilã do clássico "O Mágico de Oz". A obra mistura elementos de fantasia com uma crítica à sociedade, questionando a moralidade e as convenções sociais.',
      physicalPrice: 88.90,
      ebookPrice: 78.90,
      stock: 6,
      publication: "1995",
      publisher: "Editora HarperCollins",
      language: "Inglês",
      pages: 432,
      image: Wicked,
    },
    {
      id: 19,
      title: "Ainda Estou Aqui",
      author: "Marcelo Rubens Paiva",
      description: "Um relato autobiográfico sobre a ditadura e a vida do autor.",
      FullDescription:
        "Ainda Estou Aqui é um relato emocionante e pessoal sobre a experiência de Marcelo Rubens Paiva durante a ditadura militar, com foco em sua recuperação após um acidente que o deixou paraplégico.",
      physicalPrice: 69.90,
      ebookPrice: 59.90,
      stock: 11,
      publication: "2015",
      publisher: "Editora Alfaguara",
      language: "Português",
      pages: 256,
      image: AindaEstouAqui,
    },
    {
      id: 20,
      title: "O Reformatório Nickel",
      author: "Colson Whitehead",
      description: "Uma denúncia sobre abusos em reformatórios nos EUA.",
      FullDescription:
        "O Reformatório Nickel é uma ficção histórica que denuncia as condições desumanas de reformatórios juvenis nos Estados Unidos, trazendo à tona temas como racismo, abuso de poder e as cicatrizes que marcam os jovens dentro do sistema penal.",
      physicalPrice: 82.90,
      ebookPrice: 72.90,
      stock: 14,
      publication: "2019",
      publisher: "Editora Intrínseca",
      language: "Inglês",
      pages: 224,
      image: OReformatorioNickel,
    },
  ];
  
  console.log(books);