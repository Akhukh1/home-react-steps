import React from 'react';
import InputSteps from '../InputSteps/InputSteps';
import RenderSteps from '../RenderSteps/RenderSteps';
import { useState } from 'react';

export default function Steps() {

  const [arrDate, setArrDate] = useState([]);

  interface DateSteps {
    date: string;
    steps: number;
  }

  const addSteps = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    let array = arrDate;
    if ((e.target.steps.value !== '') && 
      (/[0-9]/.test(e.target.steps.value)) &&
      (e.target.date.value !== '')) {

        const date = new Date(e.target.date.value).toLocaleDateString('ru-RU')
        const indexStep = array.findIndex(array => array.date === date);

        if (indexStep < 0) {
          console.log(indexStep)
          const dateStep: DateSteps = {
            date: date,
            steps: Number(e.target.steps.value),
          };
          array.push(dateStep);
          array.sort((a, b) => new Date(a.date) > new Date(b.date) ? -1 : 1);
          setArrDate(array => [...array], array.sort((a, b) => a.date > b.date ? -1 : 1));
        } else {
          setArrDate(array => [...array], array[indexStep].steps = array[indexStep].steps + Number(e.target.steps.value));
        }

    }
  }

  const delSteps = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(e.target.id);
    setArrDate(array => array.filter(item => item.date !== e.target.id));
  }

  return (
    <div className = "container">
      <InputSteps addSteps = { addSteps }/>
      <RenderSteps arrDate = { arrDate } delSteps = { delSteps }/>
    </div>
  )
}
