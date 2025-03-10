// Importing Books Images:
import SenhorDosAneis from './BookImgs/SenhorDosAneis.jpg';
import GeorgeOrwell from './BookImgs/GeorgeOrwell.jpg';
import Hobbit from './BookImgs/Hobbit.jpg';
import DomQuixote from './BookImgs/DomQuixote.jpg'; 
import MobyDick from './BookImgs/MobyDick.jpg';
import GuerraEPaz from './BookImgs/GuerraEPaz.jpg';
import RevolucaoDosBichos from './BookImgs/RevolucaoDosBichos.jpg';
import Duna from './BookImgs/Duna.png';
import AindaEstouAqui from './BookImgs/AindaEstouAqui.png';
import Conclave from './BookImgs/Conclave.png';
import Wicked from './BookImgs/Wicked.png';
import OReformatorioNickel from './BookImgs/OReformatorioNickel.png';

// Importing Authors Images:
import MachadoDeAssis from './AutoresImgs/MachadoDeAssis.png';
import ClariceLispector from './AutoresImgs/ClariceLispector.png'; 
import FalsoAutor from './AutoresImgs/FalsoAutor.jpg';

export const books = [
  {
    id: 1,
    title: 'Dom Casmurro',
    author: 'Machado de Assis',
    description: 'Um dos maiores clássicos da literatura brasileira, narrando a história de Bentinho e seu ciúme obsessivo por Capitu.',
    FullDescription: 'Bentinho, um homem já de idade avançada, reflete sobre sua juventude e sua relação com Capitu. O livro foca no ciúme obsessivo de Bentinho e a relação que ele tem com sua esposa, levando a uma trama de incertezas e desconfiança.',
    physicalPrice: 'R$ 49,90',
    ebookPrice: 'R$ 39,90',
    stock: 10,
    review: 4.5,
    totalReviews: 150,
    // image: DomCasmurro,
  },
  {
    id: 2,
    title: 'Grande Sertão: Veredas',
    author: 'João Guimarães Rosa',
    description: 'Uma narrativa inovadora que apresenta a jornada de Riobaldo pelo sertão brasileiro.',
    FullDescription: 'A obra é uma complexa reflexão sobre a existência e o destino, através da história de Riobaldo, um jagunço que luta com suas crenças, dilemas e paixões. O romance é rico em regionalismos e examina profundamente as questões humanas.',
    physicalPrice: 'R$ 69,90',
    ebookPrice: 'R$ 59,90',
    stock: 0,
    review: 4.7,
    totalReviews: 200,
    // image: GrandeSertaoVeredas,
  },
  {
    id: 3,
    title: 'Vidas Secas',
    author: 'Graciliano Ramos',
    description: 'A luta de uma família sertaneja contra a seca e as dificuldades da vida no Nordeste.',
    FullDescription: 'Este romance descreve as dificuldades de uma família pobre que luta pela sobrevivência no sertão nordestino, explorando temas como miséria, seca e desesperança. A obra é um retrato fiel da dura realidade de muitas famílias no Brasil.',
    physicalPrice: 'R$ 44,90',
    ebookPrice: 'R$ 34,90',
    stock: 5,
    review: 4.8,
    totalReviews: 180,
    // image: VidasSecas,
  },
  {
    id: 4,
    title: 'Memórias Póstumas de Brás Cubas',
    author: 'Machado de Assis',
    description: 'Uma obra inovadora que traz a narrativa de um defunto autor.',
    FullDescription: 'O narrador, Brás Cubas, é um defunto que, após sua morte, decide contar sua história. O romance é uma crítica à sociedade brasileira do século XIX, misturando humor e reflexão filosófica.',
    physicalPrice: 'R$ 49,90',
    ebookPrice: 'R$ 39,90',
    stock: 10,
    review: 4.6,
    totalReviews: 120,
    // image: MemoriasPostumas,
  },
  {
    id: 5,
    title: 'Capitães da Areia',
    author: 'Jorge Amado',
    description: 'A vida de um grupo de meninos de rua em Salvador.',
    FullDescription: 'Os "Capitães da Areia" são um grupo de meninos de rua que vivem na cidade de Salvador, enfrentando as dificuldades da vida e sonhando com um futuro melhor. A obra traz uma crítica social ao abandono das crianças e jovens pela sociedade.',
    physicalPrice: 'R$ 59,90',
    ebookPrice: 'R$ 49,90',
    stock: 8,
    review: 4.9,
    totalReviews: 220,
    // image: CapitãesAreia,
  },
  {
    id: 6,
    title: 'Macunaíma',
    author: 'Mário de Andrade',
    description: 'A irreverente jornada do herói sem caráter.',
    FullDescription: 'Macunaíma é um herói sem caráter, sem identidade definida, que percorre o Brasil de forma irreverente e divertida. A obra é um exemplo do modernismo brasileiro, misturando folclore e crítica social.',
    physicalPrice: 'R$ 44,90',
    ebookPrice: 'R$ 34,90',
    stock: 6,
    review: 4.3,
    totalReviews: 90,
    // image: Macunaima,
  },
  {
    id: 7,
    title: 'Mayombe',
    author: 'Pepetela',
    description: 'Um romance que retrata a luta pela independência de Angola.',
    FullDescription: 'Mayombe narra a experiência de um grupo de guerrilheiros que luta pela independência de Angola, explorando o sofrimento, os dilemas e as transformações durante a guerra. A obra apresenta uma profunda reflexão sobre os ideais e a realidade da luta armada.',
    physicalPrice: 'R$ 39,90',
    ebookPrice: 'R$ 29,90',
    stock: 5,
    review: 4.4,
    totalReviews: 110,
    // image: Mayombe,
  },
  {
    id: 8,
    title: 'Torto Arado',
    author: 'Itamar Vieira Junior',
    description: 'Um romance sobre a luta por terra e identidade no Brasil profundo.',
    FullDescription: 'A obra acompanha a história de duas irmãs que vivem em uma comunidade rural no interior da Bahia, explorando temas como a luta por terra, identidade e a relação com o passado, com uma narrativa profunda e emocional.',
    physicalPrice: 'R$ 47,90',
    ebookPrice: 'R$ 37,90',
    stock: 8,
    review: 4.9,
    totalReviews: 300,
    // image: TortoArado,
  },

  {
    id: 9,
    title: 'O Senhor dos Anéis',
    author: 'J.R.R. Tolkien',
    description: 'Uma das maiores obras de fantasia já escritas, narrando a jornada épica de Frodo e seus companheiros para destruir Um Anel e salvar a Terra Média.',
    FullDescription: 'Nos tempos antigos da Terra-média, mais especificamente na Segunda Era, os ferreiros-élficos de Eregion, liderados por Celebrimbor, criaram os Anéis de Poder. Mas o que eles não sabiam, era que em Mordor, Sauron, o Senhor das Trevas, forjou o Um Anel, enchendo-o com seu próprio poder para que pudesse governar todos os outros. Depois da Batalha da Última Aliança, onde Elfos (liderados por Elrond e Gil-galad) e os poderosos Homens de Númenor (liderados por Elendil e Isildur) lutaram juntos contra Sauron, ele foi derrotado e o seu Anel foi tirado dele. Sauron vagou em forma de um espírito derrotado por séculos, até que depois de ter reunido um pouco de forças, buscou seu artefato em vão. Ele estava perdido e se tornara apenas uma lenda, conhecida por poucos, na Terra-média. Depois de muitas eras, o Um Anel caiu por acaso nas mãos do improvável hobbit Bilbo Bolseiro do Condado.',
    physicalPrice: 'R$ 79,90',
    ebookPrice: 'R$ 69,90',
    stock: 10,
    review: 4.9,
    totalReviews: 300,
    image: SenhorDosAneis,
  },
 
  {
    id: 10,
    title: '1984',
    author: 'George Orwell',
    description: 'Uma distopia clássica que explora um regime totalitário onde o Big Brother está sempre observando. Uma crítica poderosa sobre vigilância e liberdade.',
    FullDescription: 'Essa assustadora distopia datada de forma arbitrária num futuro perigosamente próximo logo experimentaria um imenso sucesso de público. Seus principais ingredientes - um homem sozinho desafiando uma tremenda ditadura; sexo furtivo e libertador; horrores letais - atraíram leitores de todas as idades, à esquerda e à direita do espectro político, com maior ou menor grau de instrução. À parte isso, a escrita translúcida de George Orwell, os personagens fortes, traçados a carvão por um vigoroso desenhista de personalidades, a trama seca e crua e o tom de sátira sombria garantiram a entrada pricece de 1984 no restrito panteão dos grandes clássicos modernos. ',
    physicalPrice: 'R$ 39,90',
    ebookPrice: 'R$ 29,90',
    stock: 8,
    review: 4.9,
    totalReviews: 300,
    image: GeorgeOrwell,
  },
 
  {
    id: 11,
    title: 'O Hobbit',
    author: 'J.R.R. Tolkien',
    description: 'A encantadora aventura de Bilbo Bolseiro, que embarca em uma jornada inesperada para recuperar o tesouro guardado por Smaug, o dragão.',
    FullDescription: 'bate à sua porta. A partir de então, toda sua vida pacata e campestre soprando anéis de fumaça com seu belo cachimbo começa a mudar. Ele é convocado a participar de uma aventura por ninguém menos do que Thorin Escudo-de-Carvalho, um príncipe do poderoso povo dos Anãos. Esta jornada fará Bilbo, Gandalf e 13 anãos atravessarem a Terra-média, passando por inúmeros perigos, como os imensos trols, as Montanhas Nevoentas infestadas de gobelins ou a muito antiga e misteriosa Trevamata, até chegarem (se conseguirem) na Montanha Solitária. Lá está um incalculável tesouro, mas há um porém. Deitado em cima dele está Smaug, o Dourado, um dragão malicioso que... bem, você terá que ler para descobrir.',
    physicalPrice: 'R$ 55,90',
    ebookPrice: 'R$ 45,90',
    stock: 12,
    review: 4.9,
    totalReviews: 300,
    image: Hobbit,
  },

  {
    id: 12,
    title: 'Dom Quixote',
    author: 'Miguel de Cervantes',
    description: 'Um dos maiores clássicos da literatura ocidental, conta a história do cavaleiro errante Dom Quixote e seu fiel escudeiro Sancho Pança em aventuras cômicas e filosóficas.',
    FullDescription: 'A obra criada por Miguel de Cervantes é considerada por muitos especialistas como a narrativa de ficção mais importante de todos os tempos. Esta publicação da Pé da Letra oferece ao leitor a oportunidade de entrar em contato com a engenhosidade de uma obra-prima da literatura universal. Por meio de uma linguagem acessível, é possível acompanhar, ao lado dos eternos Dom Quixote e Sancho Pança, algumas das aventuras mais famosas da história da literatura.',
    physicalPrice: 'R$ 49,90',
    ebookPrice: 'R$ 39,90',
    stock: 10,
    review: 4.9,
    totalReviews: 300,
    image: DomQuixote,
  },

  {
    id: 13,
    title: 'Moby Dick',
    author: 'Herman Melville',
    description: 'A saga do capitão Ahab em sua obsessiva busca por vingança contra a baleia branca, Moby Dick, que lhe tirou uma perna.',
    FullDescription: 'Entremeados à narrativa vão se sobressaindo múltiplos elementos: referências bíblicas que ecoam críticas da época ao nascente imperialismo dos Estados Unidos; a questão racial, personificada na figura dos três arpoadores, um negro, um índio e um nativo polinésio; a análise da extração do óleo dos cachalotes como atividade econômica industrial, incluindo uma discussão sobre a sustentabilidade da pesca das baleias; as tensões sociais, que aparecem nas relações entre superiores e subordinados e na possibilidade sempre presente de um motim ― tudo isso encenado no palco shakespeariano do convés de um baleeiro que parte de Nantucket, em Massachusetts, até chegar ao Pacífico, onde ocorre o enfrentamento final entre o obsessivo capitão Ahab e a monstruosa baleia branca.',
    physicalPrice: 'R$ 59,90',
    ebookPrice: 'R$ 49,90',
    stock: 7,
    review: 4.9,
    totalReviews: 300,
    image: MobyDick,
  },

  {
    id: 14,
    title: 'Guerra e Paz',
    author: 'Liev Tolstói',
    description: 'O épico russo que entrelaça histórias pessoais e históricas durante a invasão napoleônica da Rússia, explorando temas de amor, guerra e destino.',
    FullDescription: 'A história de “Guerra e Paz” é contada por meio de uma narrativa complexa que envolve várias camadas de personagens e tramas. Entre os personagens principais, destacam-se os membros da família Rostóv, incluindo a jovem e bela Natacha, o príncipe Andrei Bolkónski, que busca um propósito para sua vida, e Pierre Bezúkhov, um homem rico e perturbado que busca um significado para sua existência. Ao longo do romance, Tolstói entrelaça a vida desses personagens com os eventos históricos que sacudiram a Europa durante o século XIX, como a invasão de Napoleão à Rússia, as batalhas de Austerlitz e Borodinó e a queda do império napoleônico.',
    physicalPrice: 'R$ 79,90',
    ebookPrice: 'R$ 69,90',
    stock: 5,
    review: 4.9,
    totalReviews: 300,
    image: GuerraEPaz,
  },

  {
    id: 15,
    title: 'A Revolução dos Bichos',
    author: 'George Orwell',
    description: 'Uma alegoria política brilhante que descreve uma revolução animal em uma fazenda, refletindo os perigos de regimes totalitários.',
    FullDescription: 'Às vésperas de sua morte, o velho porco Major reúne os animais de uma fazenda para compartilhar seu sonho de ver os bichos governando a si próprios, sem a opressão dos homens, em uma sociedade igualitária. Depois da morte de Major, a revolução é instaurada pelos porcos Snowball e Napoleon, mas a utopia não dura muito. Eleito pela revista Time como um dos cem melhores livros já publicados em língua inglesa, A revolução dos bichos é um alerta contra os perigos da corrupção humana até mesmo nos mais bem-intencionados projetos políticos.',
    physicalPrice: 'R$ 39,90',
    ebookPrice: 'R$ 29,90',
    stock: 15,
    image: RevolucaoDosBichos,
  },

  {
    id: 16,
    title: 'Duna',
    author: 'Frank Herbert',
    description: 'A épica história de Paul Atreides e a luta pelo planeta Arrakis.',
    FullDescription: 'Duna é uma história épica de política, religião e poder em um futuro distante, com foco na luta pelo controle de Arrakis, o planeta mais valioso do universo devido à sua produção de especiarias. A obra mistura elementos de ficção científica com profundas questões filosóficas.',
    physicalPrice: 'R$ 89,90',
    ebookPrice: 'R$ 79,90',
    stock: 8,
    image: Duna,
  },

  {
    id: 17,
    title: 'Conclave',
    author: 'Robert Harris',
    description: 'Um thriller político sobre a eleição de um novo Papa.',
    FullDescription: 'Conclave é um thriller político que se passa no processo de eleição de um novo Papa. A obra explora os bastidores do Vaticano, suas intrigas políticas e os segredos que permeiam o alto clero.',
    physicalPrice: 'R$ 76,90',
    ebookPrice: 'R$ 66,90',
    stock: 9,
    image: Conclave,
  },

  {
    id: 18,
    title: 'Wicked',
    author: 'Gregory Maguire',
    description: 'A história não contada da Bruxa Má do Oeste.',
    FullDescription: 'Wicked reconta a história da Bruxa Má do Oeste, dando uma nova perspectiva à vilã do clássico "O Mágico de Oz". A obra mistura elementos de fantasia com uma crítica à sociedade, questionando a moralidade e as convenções sociais.',
    physicalPrice: 'R$ 88,90',
    ebookPrice: 'R$ 78,90',
    stock: 6,
    image: Wicked,
  },

  {
    id: 19,
    title: 'Ainda Estou Aqui',
    author: 'Marcelo Rubens Paiva',
    description: 'Um relato autobiográfico sobre a ditadura e a vida do autor.',
    FullDescription: 'Ainda Estou Aqui é um relato emocionante e pessoal sobre a experiência de Marcelo Rubens Paiva durante a ditadura militar, com foco em sua recuperação após um acidente que o deixou paraplégico.',
    physicalPrice: 'R$ 69,90',
    ebookPrice: 'R$ 59,90',
    stock: 11,
    image: AindaEstouAqui,
  },
  {
    id: 20,
    title: 'O Reformatório Nickel',
    author: 'Colson Whitehead',
    description: 'Uma denúncia sobre abusos em reformatórios nos EUA.',
    FullDescription: 'O Reformatório Nickel é uma ficção histórica que denuncia as condições desumanas de reformatórios juvenis nos Estados Unidos, trazendo à tona temas como racismo, abuso de poder e as cicatrizes que marcam os jovens dentro do sistema penal.',
    physicalPrice: 'R$ 82,90',
    ebookPrice: 'R$ 72,90',
    stock: 14,
    image: OReformatorioNickel,
  },
];


// Dados das Novidades na Literis
export const newBooks = [

  {
    id: 9,
    title: 'O Senhor dos Anéis',
    author: 'J.R.R. Tolkien',
    description: 'Uma das maiores obras de fantasia já escritas, narrando a jornada épica de Frodo e seus companheiros para destruir Um Anel e salvar a Terra Média.',
    FullDescription: 'Nos tempos antigos da Terra-média, mais especificamente na Segunda Era, os ferreiros-élficos de Eregion, liderados por Celebrimbor, criaram os Anéis de Poder. Mas o que eles não sabiam, era que em Mordor, Sauron, o Senhor das Trevas, forjou o Um Anel, enchendo-o com seu próprio poder para que pudesse governar todos os outros. Depois da Batalha da Última Aliança, onde Elfos (liderados por Elrond e Gil-galad) e os poderosos Homens de Númenor (liderados por Elendil e Isildur) lutaram juntos contra Sauron, ele foi derrotado e o seu Anel foi tirado dele. Sauron vagou em forma de um espírito derrotado por séculos, até que depois de ter reunido um pouco de forças, buscou seu artefato em vão. Ele estava perdido e se tornara apenas uma lenda, conhecida por poucos, na Terra-média. Depois de muitas eras, o Um Anel caiu por acaso nas mãos do improvável hobbit Bilbo Bolseiro do Condado.',
    price: 'R$ 89,90',
    image: SenhorDosAneis,
  },
 
  {
    id: 10,
    title: '1984',
    author: 'George Orwell',
    description: 'Uma distopia clássica que explora um regime totalitário onde o Big Brother está sempre observando. Uma crítica poderosa sobre vigilância e liberdade.',
    FullDescription: 'Essa assustadora distopia datada de forma arbitrária num futuro perigosamente próximo logo experimentaria um imenso sucesso de público. Seus principais ingredientes - um homem sozinho desafiando uma tremenda ditadura; sexo furtivo e libertador; horrores letais - atraíram leitores de todas as idades, à esquerda e à direita do espectro político, com maior ou menor grau de instrução. À parte isso, a escrita translúcida de George Orwell, os personagens fortes, traçados a carvão por um vigoroso desenhista de personalidades, a trama seca e crua e o tom de sátira sombria garantiram a entrada pricece de 1984 no restrito panteão dos grandes clássicos modernos. ',
    price: 'R$ 45,90',
    image: GeorgeOrwell,
  },
 
  {
    id: 11,
    title: 'O Hobbit',
    author: 'J.R.R. Tolkien',
    description: 'A encantadora aventura de Bilbo Bolseiro, que embarca em uma jornada inesperada para recuperar o tesouro guardado por Smaug, o dragão.',
    FullDescription: 'bate à sua porta. A partir de então, toda sua vida pacata e campestre soprando anéis de fumaça com seu belo cachimbo começa a mudar. Ele é convocado a participar de uma aventura por ninguém menos do que Thorin Escudo-de-Carvalho, um príncipe do poderoso povo dos Anãos. Esta jornada fará Bilbo, Gandalf e 13 anãos atravessarem a Terra-média, passando por inúmeros perigos, como os imensos trols, as Montanhas Nevoentas infestadas de gobelins ou a muito antiga e misteriosa Trevamata, até chegarem (se conseguirem) na Montanha Solitária. Lá está um incalculável tesouro, mas há um porém. Deitado em cima dele está Smaug, o Dourado, um dragão malicioso que... bem, você terá que ler para descobrir.',
    price: 'R$ 55,90',
    image: Hobbit,
  },

  {
    id: 12,
    title: 'Dom Quixote',
    author: 'Miguel de Cervantes',
    description: 'Um dos maiores clássicos da literatura ocidental, conta a história do cavaleiro errante Dom Quixote e seu fiel escudeiro Sancho Pança em aventuras cômicas e filosóficas.',
    FullDescription: 'A obra criada por Miguel de Cervantes é considerada por muitos especialistas como a narrativa de ficção mais importante de todos os tempos. Esta publicação da Pé da Letra oferece ao leitor a oportunidade de entrar em contato com a engenhosidade de uma obra-prima da literatura universal. Por meio de uma linguagem acessível, é possível acompanhar, ao lado dos eternos Dom Quixote e Sancho Pança, algumas das aventuras mais famosas da história da literatura.',
    price: 'R$ 49,90',
    image: DomQuixote,
  },
  {
  
    id: 13,
    title: 'Moby Dick',
    author: 'Herman Melville',
    description: 'A saga do capitão Ahab em sua obsessiva busca por vingança contra a baleia branca, Moby Dick, que lhe tirou uma perna.',
    FullDescription: 'Entremeados à narrativa vão se sobressaindo múltiplos elementos: referências bíblicas que ecoam críticas da época ao nascente imperialismo dos Estados Unidos; a questão racial, personificada na figura dos três arpoadores, um negro, um índio e um nativo polinésio; a análise da extração do óleo dos cachalotes como atividade econômica industrial, incluindo uma discussão sobre a sustentabilidade da pesca das baleias; as tensões sociais, que aparecem nas relações entre superiores e subordinados e na possibilidade sempre presente de um motim ― tudo isso encenado no palco shakespeariano do convés de um baleeiro que parte de Nantucket, em Massachusetts, até chegar ao Pacífico, onde ocorre o enfrentamento final entre o obsessivo capitão Ahab e a monstruosa baleia branca.',
    price: 'R$ 59,90',
    image: MobyDick,
  },
  
  {
    id: 14,
    title: 'Guerra e Paz',
    author: 'Liev Tolstói',
    description: 'O épico russo que entrelaça histórias pessoais e históricas durante a invasão napoleônica da Rússia, explorando temas de amor, guerra e destino.',
    FullDescription: 'A história de “Guerra e Paz” é contada por meio de uma narrativa complexa que envolve várias camadas de personagens e tramas. Entre os personagens principais, destacam-se os membros da família Rostóv, incluindo a jovem e bela Natacha, o príncipe Andrei Bolkónski, que busca um propósito para sua vida, e Pierre Bezúkhov, um homem rico e perturbado que busca um significado para sua existência. Ao longo do romance, Tolstói entrelaça a vida desses personagens com os eventos históricos que sacudiram a Europa durante o século XIX, como a invasão de Napoleão à Rússia, as batalhas de Austerlitz e Borodinó e a queda do império napoleônico.',
    price: 'R$ 79,90',
    image: GuerraEPaz,
  },
 
  {
    id: 15,
    title: 'A Revolução dos Bichos',
    author: 'George Orwell',
    description: 'Uma alegoria política brilhante que descreve uma revolução animal em uma fazenda, refletindo os perigos de regimes totalitários.',
    FullDescription: 'Às vésperas de sua morte, o velho porco Major reúne os animais de uma fazenda para compartilhar seu sonho de ver os bichos governando a si próprios, sem a opressão dos homens, em uma sociedade igualitária. Depois da morte de Major, a revolução é instaurada pelos porcos Snowball e Napoleon, mas a utopia não dura muito. Eleito pela revista Time como um dos cem melhores livros já publicados em língua inglesa, A revolução dos bichos é um alerta contra os perigos da corrupção humana até mesmo nos mais bem-intencionados projetos políticos.',
    price: 'R$ 39,90',
    image: RevolucaoDosBichos,
  },

];
  
// Dados do Oscar 2025: Leia antes de assistir
  export const oscarBooks = [
    {
      id: 16,
      title: 'Duna',
      author: 'Frank Herbert',
      description: 'A épica história de Paul Atreides e a luta pelo planeta Arrakis.',
      FullDescription: 'Duna é uma história épica de política, religião e poder em um futuro distante, com foco na luta pelo controle de Arrakis, o planeta mais valioso do universo devido à sua produção de especiarias. A obra mistura elementos de ficção científica com profundas questões filosóficas.',
      price: 'R$ 69,90',
      image: Duna,
    },
    {
      id: 17,
      title: 'Conclave',
      author: 'Robert Harris',
      description: 'Um thriller político sobre a eleição de um novo Papa.',
      FullDescription: 'Conclave é um thriller político que se passa no processo de eleição de um novo Papa. A obra explora os bastidores do Vaticano, suas intrigas políticas e os segredos que permeiam o alto clero.',
      price: 'R$ 56,90',
      image: Conclave,
    },
    {
      id: 18,
      title: 'Wicked',
      author: 'Gregory Maguire',
      description: 'A história não contada da Bruxa Má do Oeste.',
      FullDescription: 'Wicked reconta a história da Bruxa Má do Oeste, dando uma nova perspectiva à vilã do clássico "O Mágico de Oz". A obra mistura elementos de fantasia com uma crítica à sociedade, questionando a moralidade e as convenções sociais.',
      price: 'R$ 58,90',
      image: Wicked,
    },
    {
      id: 19,
      title: 'Ainda Estou Aqui',
      author: 'Marcelo Rubens Paiva',
      description: 'Um relato autobiográfico sobre a ditadura e a vida do autor.',
      FullDescription: 'Ainda Estou Aqui é um relato emocionante e pessoal sobre a experiência de Marcelo Rubens Paiva durante a ditadura militar, com foco em sua recuperação após um acidente que o deixou paraplégico.',
      price: 'R$ 45,90',
      image: AindaEstouAqui,
    },
    {
      id: 20,
      title: 'O Reformatório Nickel',
      author: 'Colson Whitehead',
      description: 'Uma denúncia sobre abusos em reformatórios nos EUA.',
      FullDescription: 'O Reformatório Nickel é uma ficção histórica que denuncia as condições desumanas de reformatórios juvenis nos Estados Unidos, trazendo à tona temas como racismo, abuso de poder e as cicatrizes que marcam os jovens dentro do sistema penal.',
      price: 'R$ 52,90',
      image: OReformatorioNickel,
    },
  ];
  
// Dados dos Autores para conhecer em 2025
export const authors = [
  {
    id: 1,
    image: MachadoDeAssis,
    name: 'Machado de Assis',
  },
  {
    id: 2,
    image: ClariceLispector,
    name: 'Clarice Lispector',
  },
  {
    id: 3,
    image: FalsoAutor,
    name: 'Jorge Amado',
  },
  {
    id: 4,
    image: FalsoAutor ,
    name: 'Graciliano Ramos',
  },
  {
    id: 5,
    image: FalsoAutor ,
    name: 'Érico Veríssimo',
  },
  {
    id: 6,
    image: FalsoAutor ,
    name: 'Carlos Drummond de Andrade',
  },
  {
    id: 7,
    image: FalsoAutor ,
    name: 'Adriana Lisboa',
  },
  {
    id: 8,
    image: FalsoAutor ,
    name: 'Luís Fernando Veríssimo',
  },
  {
    id: 9,
    image: FalsoAutor ,
    name: 'Nelson Rodrigues',
  },
  {
    id: 10,
    image: FalsoAutor ,
    name: 'Raquel de Queiroz',
  },
];
  
// Dados das Ofertas da Semana
  export const offers = [
    {
      id: 1,
      image: SenhorDosAneis,
      title: 'Oferta 1',
      price: 'R$ 19,90',
    },
    {
      id: 2,
      image: Wicked,
      title: 'Oferta 2',
      price: 'R$ 29,90',
    },
    // Adicione mais ofertas...
  ];