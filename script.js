let questionsData = [
    {
      text: "When the first computer was created",
      answers: [
        {
          text: "1936",
          isCorrect: true
        },
        {
          text: "1999",
          isCorrect: false
        },
        {
          text: "1954",
          isCorrect: false
        }
      ]
    },
    {
      text: "Where is bryan ?",
      answers: [
        {
          text: "Kitchen",
          isCorrect: true
        },
        {
          text: "Garden",
          isCorrect: false
        },
        {
          text: "is Becoming an artist",
          isCorrect: false
        },
        {
          text: "Don't know",
          isCorrect: false
        }
      ]
    },
    {
      text: "Smile and....",
      answers: [
        {
          text: "laugh",
          isCorrect: false
        },
        {
          text: "run",
          isCorrect: false
        },
        {
          text: "learn code ",
          isCorrect: true
        }
      ]
    },
    {
      text: "In witch year was the first version of js released",
      answers: [
        {
          text: "1982",
          isCorrect: false
        },
        {
          text: "1995",
          isCorrect: true
        },
        {
          text: "1983",
          isCorrect: false
        },
        {
          text: "1985",
          isCorrect: false
        }
      ]
    },
    {
      text: "What is France capital",
      answers: [
        {
          text: "Lyon",
          isCorrect: true
        },
        {
          text: "Marseille",
          isCorrect: false
        },
        {
          text: "Paris",
          isCorrect: true
        },
        {
          text: "Lille",
          isCorrect: false
        }
      ]
    }
  ];
  
  // variables initialization
  let questions = [];
  let score = 0,
    answeredQuestions = 0;
  let appContainer = document.getElementById("questions-container");
  let scoreContainer = document.getElementById("score-container");
  scoreContainer.innerHTML = `Score: ${score}/${questionsData.length}`;
  
  /**
   * Shuffles array in place. ES6 version
   * @param {Array} arr items An array containing the items.
   */
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  
  shuffle(questionsData);
  
  // creating questions
  for (var i = 0; i < questionsData.length; i++) {
    let question = new Question({
      text: questionsData[i].text,
      answers: questionsData[i].answers
    });
  
    appContainer.appendChild(question.create());
    questions.push(question);
  }
  
  document.addEventListener("question-answered", ({ detail }) => {
    if (detail.answer.isCorrect) {
      score++;
    }
  
    answeredQuestions++;
    scoreContainer.innerHTML = `Score: ${score}/${questions.length}`;
    detail.question.disable();
  
    if (answeredQuestions == questions.length) {
      setTimeout(function () {
        alert(`Quiz completed! \nFinal score: ${score}/${questions.length}`);
      }, 100);
    }
  });
  
  console.log(questions, questionsData);
  