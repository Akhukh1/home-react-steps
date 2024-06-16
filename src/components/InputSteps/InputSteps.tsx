import React from 'react'

export default function InputSteps(props) {

  const{ addSteps } = props;

  return (
    <form className = "form" onSubmit = { addSteps }>
      <div className = "date">
        <div className = "date-sub">
          Дата
        </div>
        <input className = "input-date" type = "date" name = "date"/>
      </div>

      <div className = "steps">
        <div className = "steps-sub">
          Пройдено
        </div>
        <input className = "input-steps" name = "steps"/>
      </div>

      <button className = "btn" type = "submit">
        ОК
      </button>
    </form>
  )
}
