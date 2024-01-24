const FinishedScreen = ({ points, maxImpossiblePoints }) => {
  const percentageOfPoints = (points / maxImpossiblePoints) * 100;
  return (
    <div className="result">
      Your Score<strong>{points}</strong> out of{" "}
      <strong>{maxImpossiblePoints}</strong> {Math.ceil(percentageOfPoints)}%
    </div>
  );
};

export default FinishedScreen;
