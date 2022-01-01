export const ProgressBarFlexible = ({ value }) => {
    
  const fillerRelativePercentage = (100 / value) * 100;

  return (
    <div
      className="wrapper"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
    >
      <div className="barContainer">
        <div className="filler" style={{ width: `${value}%` }}>
          <div
            className="fillerBackground"
            style={{ width: `${fillerRelativePercentage}%` }}
          />
        </div>
      </div>
      <div className="textValue text-white">{`${value}%`}</div>
    </div>
  );
  };
  