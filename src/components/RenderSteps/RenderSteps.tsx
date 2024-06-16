import React from 'react'
import Step from '../Step/Step';

export default function RenderSteps(props) {

  const { arrDate, delSteps } = props;
  

  let border = '';
  if (arrDate.length > 0) {
    border = '1px solid gray';
  }

  return (
    <div className = "render-steps">
      <div className = "render-info">
        <div className = "render-descr">
          Дата
        </div>
        <div className = "render-descr">
          Пройдено
        </div>
        <div className = "render-descr">
          Действия
        </div>
      </div>
      <div className = "steps-info" style = {{border: border}}>
        {arrDate.map(step => {
          return (
              <Step step = {step} delSteps = { delSteps }/>
          )
        })}
      </div>
    </div>
  )
}
