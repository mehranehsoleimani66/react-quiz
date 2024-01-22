const Options = ({ question }) => {
  return (
    <div className="options">
      {question.options.map((option) => (
        <button key={option}>{option}</button>
      ))}
    </div>
  );
};

export default Options;
