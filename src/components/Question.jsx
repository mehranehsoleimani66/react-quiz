import Options from "./Options";

const Question = ({ question }) => {
  console.log(question, "q");
  return (
    <div>
      <ul>{question.question}</ul>
      <Options question={question} />
    </div>
  );
};

export default Question;
