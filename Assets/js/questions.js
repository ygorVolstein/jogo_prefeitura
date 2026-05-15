// Banco de perguntas do quiz
// Estrutura de cada pergunta:
// {
//   id: número da pergunta,
//   pergunta: texto da pergunta,
//   opcoes: [
//     { id: 'A', imagem: 'caminho/imagem.jpg', label: 'texto da alternativa' },
//     { id: 'B', imagem: 'caminho/imagem.jpg', label: 'texto da alternativa' }
//   ],
//   correta: 'A' ou 'B'
// }

const perguntas = [
  {
    id: 1,
    pergunta: "Qual é o animalzinho muito simpático que é a mascote da nossa festa mais famosa, a Fenarreco?",
    opcoes: [
      { id: "A", imagem: "Assets/images/Pergunta1a.png", label: "Um marreco (que parece um patinho)." },
      { id: "B", imagem: "Assets/images/Pergunta1b.png", label: "Um leão feroz." }
    ],
    correta: "A"
  },
  {
    id: 2,
    pergunta: "Tem um rio bem grande que passa no meio da nossa cidade de Brusque. Você sabe como ele se chama?",
    opcoes: [
      { id: "A", imagem: "Assets/images/Pergunta2a.png", label: "Rio Itajaí-Mirim." },
      { id: "B", imagem: "Assets/images/Pergunta2b.png", label: "Rio de Leite com Chocolate." }
    ],
    correta: "A"
  },
  {
    id: 3,
    pergunta: "Onde nós podemos ir em Brusque para passear no meio das árvores e ver vários animais de verdade?",
    opcoes: [
      { id: "A", imagem: "Assets/images/Pergunta3a.jpg", label: "No supermercado." },
      { id: "B", imagem: "Assets/images/Pergunta3b.jpg", label: "No Parque Zoobotânico." }
    ],
    correta: "B"
  },
  {
    id: 4,
    pergunta: "A cidade de Brusque é muito famosa por ter fábricas enormes que fazem muitas...",
    opcoes: [
      { id: "A", imagem: "Assets/images/Pergunta4a.png", label: "Naves espaciais para ir à Lua." },
      { id: "B", imagem: "Assets/images/Pergunta4b.png", label: "Roupas, tecidos e fios." }
    ],
    correta: "B"
  },
  {
    id: 5,
    pergunta: "Há muito, muito tempo, as primeiras famílias que vieram morar em Brusque chegaram de quê?",
    opcoes: [
      { id: "A", imagem: "Assets/images/Pergunta5a.png", label: "De navio e de barco pelo rio." },
      { id: "B", imagem: "Assets/images/Pergunta5b.png", label: "De disco voador." }
    ],
    correta: "A"
  },
  {
    id: 6,
    pergunta: "A Igreja Matriz de Brusque, que fica lá no centro, tem uma coisa muito grande na frente dela para as pessoas subirem. O que é?",
    opcoes: [
      { id: "A", imagem: "Assets/images/Pergunta6a.png", label: "Uma escadaria bem alta." },
      { id: "B", imagem: "Assets/images/Pergunta6b.png", label: "Um escorregador gigante." }
    ],
    correta: "A"
  },
  {
    id: 7,
    pergunta: "Na festa da Fenarreco, as pessoas gostam de se vestir com roupas especiais chamadas trajes típicos. Como eles são?",
    opcoes: [
      { id: "A", imagem: "Assets/images/Pergunta7a.png", label: "Roupas de Fritz e Frida, com chapéus e suspensórios." },
      { id: "B", imagem: "Assets/images/Pergunta7b.png", label: "Roupas de mergulho para nadar." }
    ],
    correta: "A"
  },
  {
    id: 8,
    pergunta: "Qual desses animais nós podemos encontrar brincando e pulando no Parque Zoobotânico de Brusque?",
    opcoes: [
      { id: "A", imagem: "Assets/images/Pergunta8a.png", label: "O Macaco." },
      { id: "B", imagem: "Assets/images/Pergunta8b.png", label: "O Dinossauro." }
    ],
    correta: "A"
  },
  {
    id: 9,
    pergunta: "Em Brusque existe um lugar muito bonito, que tem uma igreja bem alta, um hospital e um museu. Como se chama?",
    opcoes: [
      { id: "A", imagem: "Assets/images/Pergunta9a.png", label: "Castelo de Areia da Praia." },
      { id: "B", imagem: "Assets/images/Pergunta9b.png", label: "Santuário de Azambuja." }
    ],
    correta: "B"
  },
  {
    id: 10,
    pergunta: "Qual é o bolo docinho e cheio de farofa em cima que as famílias de Brusque adoram comer no café da tarde?",
    opcoes: [
      { id: "A", imagem: "Assets/images/Pergunta10a.png", label: "A Cuca" },
      { id: "B", imagem: "Assets/images/Pergunta10b.png", label: "Um Hamburguer Gigante" }
    ],
    correta: "A"
  },
  {
    id: 11,
    pergunta: "Na época da Fenarreco, muitas pessoas comem uma comida típica muito gostosa com repolho. O que é?",
    opcoes: [
      { id: "A", imagem: "Assets/images/Pergunta11a.jpg", label: "Marreco recheado." },
      { id: "B", imagem: "Assets/images/Pergunta11b.png", label: "Sopa de pedras." }
    ],
    correta: "A"
  },
  {
    id: 12,
    pergunta: "A cidade de Brusque foi construída por pessoas muito trabalhadoras que vieram de outro país. Uma dessas famílias eram os...",
    opcoes: [
      { id: "A", imagem: "Assets/images/Pergunta12a.png", label: "Alemães (e eles trouxeram músicas e comidas diferentes)." },
      { id: "B", imagem: "Assets/images/Pergunta12b.png", label: "Marcianos (que vieram de Marte)." }
    ],
    correta: "A"
  },
  {
    id: 13,
    pergunta: "Em Brusque, tem um parque com um gramado bem grande cheio de obras de arte gigantes feitas de pedra branca. O que é?",
    opcoes: [
      { id: "A", imagem: "Assets/images/Pergunta13a.png", label: "O Parque das Esculturas" },
      { id: "B", imagem: "Assets/images/Pergunta13b.png", label: "Uma fazenda de vacas " }
    ],
    correta: "A"
  },
  {
    id: 14,
    pergunta: "Para os carros passarem por cima do Rio Itajaí-Mirim, nós temos uma ponte bem alta e bonita, segurada por cabos fortes. Ela parece um violão gigante! Qual é?",
    opcoes: [
      { id: "A", imagem: "Assets/images/Pergunta14a.png", label: "A Ponte Estaiada" },
      { id: "B", imagem: "Assets/images/Pergunta14b.png", label: "Uma ponte de Madeira Velha" }
    ],
    correta: "A"
  },
  {
    id: 15,
    pergunta: "Quem são os animaizinhos muito fofos e gordinhos que adoram pegar sol na beira do rio em Brusque?",
    opcoes: [
      { id: "A", imagem: "Assets/images/Pergunta15a.png", label: "As Capivaras." },
      { id: "B", imagem: "Assets/images/Pergunta15b.png", label: "Os Ursos Polares" }
    ],
    correta: "A"
  }
];

const perguntasEmbaralhadas = perguntas.sort(() => 0.5 - Math.random());
