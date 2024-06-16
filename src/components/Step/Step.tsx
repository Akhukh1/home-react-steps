import React from 'react'

export default function Step(props) {
  
  const { step, delSteps } = props;
  const { date, steps} = step;

  // const delSteps = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   console.log(e.target.id);
  // }

  return (
    <div className = "step-info" id = {date}>
      <div className = "date-step">
        {date}
      </div>
      <div className = "steps-distance">
        {steps}
      </div>
      <div className = "delete" id = {date} onClick = {delSteps}>
        &#x2715;
      </div>
    </div>
  )
}
