import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Timer from "./components/Timer";
import Start from "./components/Start";
import Quiz from "./components/Quiz"
function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of Harry Potter in the movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Which planet is known as the Red Planet?",
      answers: [
        {
          text: "Mars",
          correct: true,
        },
        {
          text: "Venus",
          correct: false,
        },
        {
          text: "Jupiter",
          correct: false,
        },
        {
          text: "Saturn",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "What is the capital of Japan?",
      answers: [
        {
          text: "Beijing",
          correct: false,
        },
        {
          text: "Seoul",
          correct: false,
        },
        {
          text: "Tokyo",
          correct: true,
        },
        {
          text: "Bangkok",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Which element is needed for combustion to occur?",
      answers: [
        {
          text: "Hydrogen",
          correct: false,
        },
        {
          text: "Oxygen",
          correct: true,
        },
        {
          text: "Nitrogen",
          correct: false,
        },
        {
          text: "Carbon",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Which Indian cricketer is known as 'The Wall'?",
      answers: [
        {
          text: "Sachin Tendulkar",
          correct: false,
        },
        {
          text: "Rahul Dravid",
          correct: true,
        },
        {
          text: "Virat Kohli",
          correct: false,
        },
        {
          text: "MS Dhoni",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Which programming language is primarily used for Android app development?",
      answers: [
        {
          text: "Python",
          correct: false,
        },
        {
          text: "Java",
          correct: true,
        },
        {
          text: "C++",
          correct: false,
        },
        {
          text: "Swift",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "What is the largest ocean on Earth?",
      answers: [
        {
          text: "Atlantic Ocean",
          correct: false,
        },
        {
          text: "Indian Ocean",
          correct: false,
        },
        {
          text: "Pacific Ocean",
          correct: true,
        },
        {
          text: "Arctic Ocean",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Who discovered penicillin?",
      answers: [
        {
          text: "Marie Curie",
          correct: false,
        },
        {
          text: "Isaac Newton",
          correct: false,
        },
        {
          text: "Alexander Fleming",
          correct: true,
        },
        {
          text: "Louis Pasteur",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "What is the smallest prime number?",
      answers: [
        {
          text: "1",
          correct: false,
        },
        {
          text: "2",
          correct: true,
        },
        {
          text: "3",
          correct: false,
        },
        {
          text: "5",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Which company was originally known as 'Blue Ribbon Sports'?",
      answers: [
        {
          text: "Adidas",
          correct: false,
        },
        {
          text: "Nike",
          correct: true,
        },
        {
          text: "Puma",
          correct: false,
        },
        {
          text: "Reebok",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "In which year did the Titanic sink?",
      answers: [
        {
          text: "1910",
          correct: false,
        },
        {
          text: "1912",
          correct: true,
        },
        {
          text: "1914",
          correct: false,
        },
        {
          text: "1916",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Which Nobel Prize did Malala Yousafzai win?",
      answers: [
        {
          text: "Peace",
          correct: true,
        },
        {
          text: "Literature",
          correct: false,
        },
        {
          text: "Physics",
          correct: false,
        },
        {
          text: "Chemistry",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "What is the hardest natural substance on Earth?",
      answers: [
        {
          text: "Gold",
          correct: false,
        },
        {
          text: "Diamond",
          correct: true,
        },
        {
          text: "Iron",
          correct: false,
        },
        {
          text: "Platinum",
          correct: false,
        },
      ],
    },
  ];
  

  const moneyPyramid = useMemo(
    () =>
      [
        {id:1, amount:"$ 100"},
    {id:2, amount:"$ 200"},
    {id:3, amount:"$ 300"},
    {id:4, amount:"$ 500"},
    {id:5, amount:"$ 1000"},
    {id:6, amount:"$ 2000"},
    {id:7, amount:"$ 4000"},
    {id:8, amount:"$ 8000"},
    {id:9, amount:"$ 10000"},
    {id:10, amount:"$ 16000"},
    {id:11, amount:"$ 32000"},
    {id:12, amount:"$ 64000"},
    {id:13, amount:"$ 125000"},
    {id:14, amount:"$ 250000"},
    {id:15, amount:"$ 500000"},
    {id:15, amount:"$ 1000000"},
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Quiz
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
