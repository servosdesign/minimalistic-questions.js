let questionBank = [
  {
    question: '1 + 1 = ?',
    options: [
      {
        text: '1',
        correct: false,
        feedback: '1 is wrong'
      },
      {
        text: '2',
        correct: true,
        feedback: '2 is correct'
      },
      {
        text: '3',
        correct: false,
        feedback: '3 is wrong'
      },
      {
        text: '4',
        correct: false,
        feedback: '4 is wrong'
      }
    ],
  },
  {
    question: '1 + 2 = ?',
    options: [
      {
        text: '1',
        correct: false,
        feedback: '1 is wrong'
      },
      {
        text: '2',
        correct: false,
        feedback: '2 is wrong'
      },
      {
        text: '3',
        correct: true,
        feedback: '3 is correct'
      },
      {
        text: '4',
        correct: false,
        feedback: '4 is wrong'
      }
    ],
  },
  {
    question: '1 + 3 = ?',
    options: [
      {
        text: '1',
        correct: false,
        feedback: '1 is wrong'
      },
      {
        text: '2',
        correct: false,
        feedback: '2 is wrong'
      },
      {
        text: '3',
        correct: false,
        feedback: '3 is wrong'
      },
      {
        text: '4',
        correct: true,
        feedback: '4 is correct'
      }
    ],
  },
  {
    question: '5 - 1 = ?',
    options: [
      {
        text: '1',
        correct: false,
        feedback: '1 is wrong'
      },
      {
        text: '2',
        correct: false,
        feedback: '2 is wrong'
      },
      {
        text: '3',
        correct: false,
        feedback: '3 is wrong'
      },
      {
        text: '4',
        correct: true,
        feedback: '4 is correct'
      }
    ],
  },
  {
    question: '5 - 2 = ?',
    options: [
      {
        text: '1',
        correct: false,
        feedback: '1 is wrong'
      },
      {
        text: '2',
        correct: false,
        feedback: '2 is wrong'
      },
      {
        text: '3',
        correct: true,
        feedback: '3 is correct'
      },
      {
        text: '4',
        correct: false,
        feedback: '4 is wrong'
      }
    ],
  },
  {
    question: '5 - 3 = ?',
    options: [
      {
        text: '1',
        correct: false,
        feedback: '1 is wrong'
      },
      {
        text: '2',
        correct: true,
        feedback: '2 is correct'
      },
      {
        text: '3',
        correct: false,
        feedback: '3 is wrong'
      },
      {
        text: '4',
        correct: false,
        feedback: '4 is wrong'
      }
    ],
  },
  {
    question: '5 - 4 = ?',
    options: [
      {
        text: '1',
        correct: true,
        feedback: '1 is correct'
      },
      {
        text: '2',
        correct: false,
        feedback: '2 is wrong'
      },
      {
        text: '3',
        correct: false,
        feedback: '3 is wrong'
      },
      {
        text: '4',
        correct: false,
        feedback: '4 is wrong'
      }
    ],
  },
  {
    question: '1 x 1 = ?',
    options: [
      {
        text: '1',
        correct: true,
        feedback: '1 is correct'
      },
      {
        text: '2',
        correct: false,
        feedback: '2 is wrong'
      },
      {
        text: '3',
        correct: false,
        feedback: '3 is wrong'
      },
      {
        text: '4',
        correct: false,
        feedback: '4 is wrong'
      }
    ],
  },
  {
    question: '1 x 2 = ?',
    options: [
      {
        text: '1',
        correct: false,
        feedback: '1 is wrong'
      },
      {
        text: '2',
        correct: true,
        feedback: '2 is correct'
      },
      {
        text: '3',
        correct: false,
        feedback: '3 is wrong'
      },
      {
        text: '4',
        correct: false,
        feedback: '4 is wrong'
      }
    ],
  }, {
    question: '1 x 3 = ?',
    options: [
      {
        text: '1',
        correct: false,
        feedback: '1 is wrong'
      },
      {
        text: '2',
        correct: false,
        feedback: '2 is wrong'
      },
      {
        text: '3',
        correct: true,
        feedback: '3 is correct'
      },
      {
        text: '4',
        correct: false,
        feedback: '4 is wrong'
      }
    ],
  }
]

do {
  var questionAmount = parseInt(window.prompt('Enter a number of questions from 1 to 10', ''), 10);
} while (isNaN(questionAmount) || questionAmount > 10 || questionAmount < 1);

const submissionText = document.getElementById('submition')
const counterButton = document.getElementById('counter');
const restartButton = document.getElementById('restart');
const previousButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

const increment = 'increment';
const decrement = 'decrement';

let randomizedQuestionBank = [];
let randomizedOptionBank = [];
let userAnswers = [];
let totalScore = [];
let count = 0;

/* Fisher–Yates shuffle */
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const randomizeData = () => {
  /* Questions */
  for (let i = 0; i < questionBank.length; i++) {
    randomizedQuestionBank.push(questionBank[i])
    shuffle(randomizedQuestionBank);
  }
  randomizedQuestionBank = randomizedQuestionBank.slice(0, questionAmount);

  /* Options */
  for (let i = 0; i < randomizedQuestionBank.length; i++) {
    randomizedOptionBank.push(randomizedQuestionBank[i].options)
    shuffle(randomizedOptionBank[i]);
  }
}

const displayQuestions = (counter) => {
  toggleButtons(counter);
  let questionDisplay = '';
  let optionsDisplay = '';
  let optionDisplayArray = [];
  optionDisplayArray = (randomizedOptionBank[counter - 1]);

  questionDisplay += `<h3 class='questionOption'>${randomizedQuestionBank[counter - 1].question}</h3>`;

  for (let i = 0; i < optionDisplayArray.length; i++) {
    optionsDisplay +=
      `<input type='radio' id='radio${i}' name='quiz_questions${count}' value='${optionDisplayArray[i].correct}'>` +
      `<label>${optionDisplayArray[i].text}</label>`
  }
  displayOptions(questionDisplay, optionsDisplay);
}

const displayOptions = (questionDisplay, optionsDisplay) => {
  document.getElementById('questions').innerHTML = questionDisplay + optionsDisplay;
}

const collectUserAnswer = () => {
  const choice = document.getElementsByName('quiz_questions' + count);
  for (let i = 0; i < choice.length; i++) {
    if (choice[i].checked) {
      userAnswers[count] = choice[i].value;
    }
  }
  if (userAnswers[count] == null) {
    return false;
  }
}

const questionNumberManager = (option) => {
  if (option === 'increment') {
    count++;
  } if (option === 'decrement') {
    count--;
  }
  counterButton.innerHTML = `<h3 class='questionHeader'> Question ${count} / ${questionAmount} </h3>`;
}

const nextQuestion = () => {
  collectUserAnswer();
  if (count < randomizedQuestionBank.length) {
    questionNumberManager(increment);
    displayQuestions(count);
  } else {
    displayScore();
  }
}

const prevQuestion = () => {
  if (count > 1) {
    questionNumberManager(decrement);
    displayQuestions(count);
  }
}

const calculateTotalScore = () => {
  totalScore = userAnswers.filter(value => value === 'true').length;
}

const displayScore = () => {
  calculateTotalScore();
  let questionDisplay = '<h3></h3>';
  let optionsDisplay = '<h3>Your total score is: </h3>';

  optionsDisplay += `${totalScore} / ${questionAmount}`;
  questionDisplay += 'Click the button below to start again!';

  disableButtons(previousButton);
  disableButtons(nextButton);
  disableButtons(counterButton);
  enableButtons(restartButton);
  displayOptions(optionsDisplay, questionDisplay)
}

const toggleButtons = () => {
  if (count < questionAmount) {
    submissionText.innerHTML = 'Next';
  }
  if (count > 1) {
    enableButtons(previousButton);
  }
  if (count <= 1) {
    disableButtons(previousButton);
  }
  if (count === questionAmount) {
    submissionText.innerHTML = 'Submit'
  }
}

const disableButtons = (selectedButton) => {
  selectedButton.style.visibility = 'hidden';
}

const enableButtons = (selectedButton) => {
  selectedButton.style.visibility = 'visible';
}

const restartQuiz = () => {
  window.location.reload();
}

window.addEventListener('load', randomizeData(count), questionNumberManager(increment), displayQuestions(count));
