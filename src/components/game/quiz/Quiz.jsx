import "./quiz.css"
export const QuizComponent = (props) => {
  const { question, options } = props;
  return (
    <div id="quiz-and-options">
      <div id="question">1. {question}</div>
      <div class="answer-list">
        <div id="pt0" class="option-quiz answer-quiz">
          <input id="quiz-0" name="quiz-element" type="radio" value="0" />
          <label class="answer" for="quiz-0"
          ><span class="suboption-quiz">A</span>
            <span class="text-answer">{options[0]}</span>
          </label>
        </div>
        <div id="pt1" class="option-quiz answer-quiz">
          <input id="quiz-1" name="quiz-element" type="radio" value="1" />
          <label class="answer" for="quiz-1"
          ><span class="suboption-quiz">B</span>
            <span class="text-answer">{options[1]}</span>
          </label>
        </div>
        <div id="pt2" class="option-quiz answer-quiz">
          <input id="quiz-2" name="quiz-element" type="radio" value="2" />
          <label class="answer" for="quiz-2"
          ><span class="suboption-quiz">C</span>
            <span class="text-answer">{options[2]}</span>
          </label>
        </div>
        <div id="pt3" class="option-quiz answer-quiz">
          <input id="quiz-3" name="quiz-element" type="radio" value="3" />
          <label class="answer" for="quiz-3"
          ><span class="suboption-quiz">D</span>
            <span class="text-answer">{options[3]}</span>
          </label>
        </div>
      </div>
    </div>
  )
}
