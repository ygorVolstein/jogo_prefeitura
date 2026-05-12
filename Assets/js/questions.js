// Banco de perguntas do quiz
// Substitua os dados abaixo com as perguntas reais do Notion
// Estrutura de cada pergunta:
// {
//   id: número da pergunta,
//   question: texto da pergunta,
//   options: [
//     { id: 'A', image: 'caminho/imagem.jpg', label: 'texto da alternativa' },
//     { id: 'B', image: 'caminho/imagem.jpg', label: 'texto da alternativa' }
//   ],
//   correct: 'A' ou 'B'
// }

const questions = [
  {
    id: 1,
    question: "Qual é o animalzinho muito simpático que é a mascote da nossa festa mais famosa, a Fenarreco?",
    options: [
      { id: "A", image: "Assets/images/Pergunta1a.png", label: "Um marreco (que parece um patinho)." },
      { id: "B", image: "Assets/images/Pergunta1b.png", label: "Um leão feroz." }
    ],
    correct: "A"
  },
  {
    id: 2,
    question: "Tem um rio bem grande que passa no meio da nossa cidade de Brusque. Você sabe como ele se chama?",
    options: [
      { id: "A", image: "Assets/images/Pergunta2a.png", label: "Rio Itajaí-Mirim." },
      { id: "B", image: "Assets/images/Pergunta2b.png", label: "Rio de Leite com Chocolate." }
    ],
    correct: "A"
  },
  {
    id: 3,
    question: "Onde nós podemos ir em Brusque para passear no meio das árvores e ver vários animais de verdade?",
    options: [
      { id: "A", image: "Assets/images/Pergunta3a.jpg", label: "No supermercado." },
      { id: "B", image: "Assets/images/Pergunta3b.jpg", label: "No Parque Zoobotânico." }
    ],
    correct: "B"
  },
  {
    id: 4,
    question: "A cidade de Brusque é muito famosa por ter fábricas enormes que fazem muitas...",
    options: [
      { id: "A", image: "Assets/images/Pergunta4a.png", label: "Naves espaciais para ir à Lua." },
      { id: "B", image: "Assets/images/Pergunta4b.png", label: "Roupas, tecidos e fios." }
    ],
    correct: "B"
  },
  {
    id: 5,
    question: "Há muito, muito tempo, as primeiras famílias que vieram morar em Brusque chegaram de quê?",
    options: [
      { id: "A", image: "Assets/images/Pergunta5a.png", label: "De navio e de barco pelo rio." },
      { id: "B", image: "Assets/images/Pergunta5b.png", label: "De disco voador." }
    ],
    correct: "A"
  },
  {
    id: 6,
    question: "A Igreja Matriz de Brusque, que fica lá no centro, tem uma coisa muito grande na frente dela para as pessoas subirem. O que é?",
    options: [
      { id: "A", image: "Assets/images/Pergunta6a.png", label: "Uma escadaria bem alta." },
      { id: "B", image: "Assets/images/Pergunta6b.png", label: "Um escorregador gigante." }
    ],
    correct: "A"
  },
  {
    id: 7,
    question: "Na festa da Fenarreco, as pessoas gostam de se vestir com roupas especiais chamadas trajes típicos. Como eles são?",
    options: [
      { id: "A", image: "Assets/images/Pergunta7a.png", label: "Roupas de Fritz e Frida, com chapéus e suspensórios." },
      { id: "B", image: "Assets/images/Pergunta7b.png", label: "Roupas de mergulho para nadar." }
    ],
    correct: "A"
  },
  {
    id: 8,
    question: "Qual desses animais nós podemos encontrar brincando e pulando no Parque Zoobotânico de Brusque?",
    options: [
      { id: "A", image: "Assets/images/Pergunta8a.png", label: "O Macaco." },
      { id: "B", image: "Assets/images/Pergunta8b.png", label: "O Dinossauro." }
    ],
    correct: "A"
  },
  {
    id: 9,
    question: "Em Brusque existe um lugar muito bonito, que tem uma igreja bem alta, um hospital e um museu. Como se chama?",
    options: [
      { id: "A", image: "Assets/images/Pergunta9a.png", label: "Castelo de Areia da Praia." },
      { id: "B", image: "Assets/images/Pergunta9b.png", label: "Santuário de Azambuja." }
    ],
    correct: "B"
  },
  {
    id: 10,
    question: "Qual é o bolo docinho e cheio de farofa em cima que as famílias de Brusque adoram comer no café da tarde?",
    options: [
      { id: "A", image: "Assets/images/Pergunta10a.png", label: "A Cuca" },
      { id: "B", image: "Assets/images/Pergunta10b.png", label: "Um Hamburguer Gigante" }
    ],
    correct: "A"
  },
  {
    id: 11,
    question: "Na época da Fenarreco, muitas pessoas comem uma comida típica muito gostosa com repolho. O que é?",
    options: [
      { id: "A", image: "Assets/images/Pergunta11a.jpg", label: "Marreco recheado." },
      { id: "B", image: "Assets/images/Pergunta11b.png", label: "Sopa de pedras." }
    ],
    correct: "A"
  },
  {
    id: 12,
    question: "A cidade de Brusque foi construída por pessoas muito trabalhadoras que vieram de outro país. Uma dessas famílias eram os...",
    options: [
      { id: "A", image: "Assets/images/Pergunta12a.png", label: "Alemães (e eles trouxeram músicas e comidas diferentes)." },
      { id: "B", image: "Assets/images/Pergunta12b.png", label: "Marcianos (que vieram de Marte)." }
    ],
    correct: "A"
  },
  {
    id: 13,
    question: "Em Brusque, tem um parque com um gramado bem grande cheio de obras de arte gigantes feitas de pedra branca. O que é?",
    options: [
      { id: "A", image: "Assets/images/Pergunta13a.png", label: "O Parque das Esculturas" },
      { id: "B", image: "Assets/images/Pergunta13b.png", label: "Uma fazenda de vacas " }
    ],
    correct: "A"
  },
  {
    id: 14,
    question: "Para os carros passarem por cima do Rio Itajaí-Mirim, nós temos uma ponte bem alta e bonita, segurada por cabos fortes. Ela parece um violão gigante! Qual é?",
    options: [
      { id: "A", image: "Assets/images/Pergunta14a.png", label: "A Ponte Estaiada" },
      { id: "B", image: "Assets/images/Pergunta14b.png", label: "Uma ponte de Madeira Velha" }
    ],
    correct: "A"
  },
  {
    id: 15,
    question: "Quem são os animaizinhos muito fofos e gordinhos que adoram pegar sol na beira do rio em Brusque?",
    options: [
      { id: "A", image: "Assets/images/Pergunta15a.png", label: "As Capivaras." },
      { id: "B", image: "Assets/images/Pergunta15b.png", label: "Os Ursos Polares" }
    ],
    correct: "A"
  }
];

const rndQuestions = questions.sort(() => 0.5 - Math.random());
