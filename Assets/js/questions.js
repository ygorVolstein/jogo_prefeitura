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
    question: "Qual imagem representa uma ação sustentável?",
    options: [
      { id: "A", image: "images/q1_a.jpg", label: "Jogar lixo no chão" },
      { id: "B", image: "images/q1_b.jpg", label: "Separar o lixo para reciclagem" }
    ],
    correct: "B"
  },
  {
    id: 2,
    question: "Qual é o símbolo da prefeitura de Brusque?",
    options: [
      { id: "A", image: "images/q2_a.jpg", label: "Brasão oficial de Brusque" },
      { id: "B", image: "images/q2_b.jpg", label: "Brasão de outra cidade" }
    ],
    correct: "A"
  },
  {
    id: 3,
    question: "Qual serviço é oferecido pela prefeitura?",
    options: [
      { id: "A", image: "images/q3_a.jpg", label: "Serviço A" },
      { id: "B", image: "images/q3_b.jpg", label: "Serviço B" }
    ],
    correct: "A"
  },
  {
    id: 4,
    question: "Pergunta 4",
    options: [
      { id: "A", image: "images/q4_a.jpg", label: "Alternativa A" },
      { id: "B", image: "images/q4_b.jpg", label: "Alternativa B" }
    ],
    correct: "A"
  },
  {
    id: 5,
    question: "Pergunta 5",
    options: [
      { id: "A", image: "images/q5_a.jpg", label: "Alternativa A" },
      { id: "B", image: "images/q5_b.jpg", label: "Alternativa B" }
    ],
    correct: "B"
  },
  {
    id: 6,
    question: "Pergunta 6",
    options: [
      { id: "A", image: "images/q6_a.jpg", label: "Alternativa A" },
      { id: "B", image: "images/q6_b.jpg", label: "Alternativa B" }
    ],
    correct: "A"
  },
  {
    id: 7,
    question: "Pergunta 7",
    options: [
      { id: "A", image: "images/q7_a.jpg", label: "Alternativa A" },
      { id: "B", image: "images/q7_b.jpg", label: "Alternativa B" }
    ],
    correct: "B"
  },
  {
    id: 8,
    question: "Pergunta 8",
    options: [
      { id: "A", image: "images/q8_a.jpg", label: "Alternativa A" },
      { id: "B", image: "images/q8_b.jpg", label: "Alternativa B" }
    ],
    correct: "A"
  },
  {
    id: 9,
    question: "Pergunta 9",
    options: [
      { id: "A", image: "images/q9_a.jpg", label: "Alternativa A" },
      { id: "B", image: "images/q9_b.jpg", label: "Alternativa B" }
    ],
    correct: "B"
  },
  {
    id: 10,
    question: "Pergunta 10",
    options: [
      { id: "A", image: "images/q10_a.jpg", label: "Alternativa A" },
      { id: "B", image: "images/q10_b.jpg", label: "Alternativa B" }
    ],
    correct: "A"
  },
  {
    id: 11,
    question: "Pergunta 11",
    options: [
      { id: "A", image: "images/q11_a.jpg", label: "Alternativa A" },
      { id: "B", image: "images/q11_b.jpg", label: "Alternativa B" }
    ],
    correct: "B"
  },
  {
    id: 12,
    question: "Pergunta 12",
    options: [
      { id: "A", image: "images/q12_a.jpg", label: "Alternativa A" },
      { id: "B", image: "images/q12_b.jpg", label: "Alternativa B" }
    ],
    correct: "A"
  },
  {
    id: 13,
    question: "Pergunta 13",
    options: [
      { id: "A", image: "images/q13_a.jpg", label: "Alternativa A" },
      { id: "B", image: "images/q13_b.jpg", label: "Alternativa B" }
    ],
    correct: "B"
  },
  {
    id: 14,
    question: "Pergunta 14",
    options: [
      { id: "A", image: "images/q14_a.jpg", label: "Alternativa A" },
      { id: "B", image: "images/q14_b.jpg", label: "Alternativa B" }
    ],
    correct: "A"
  },
  {
    id: 15,
    question: "Pergunta 15",
    options: [
      { id: "A", image: "images/q15_a.jpg", label: "Alternativa A" },
      { id: "B", image: "images/q15_b.jpg", label: "Alternativa B" }
    ],
    correct: "B"
  }
];

const rndQuestions = questions.sort(() => 0.5 - Math.random());
