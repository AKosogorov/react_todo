import React, { useState, useRef } from 'react';

interface ITodoFormProps {
  onAdd(title: string): void
}

export const TodoForm: React.FC<ITodoFormProps> = props => {
  // const [title, setTitle] = useState<string>('')


  // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(event.target.value)
  // }

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      props.onAdd(ref.current!.value);
      ref.current!.value = ''
      
      // console.log(title);
      // setTitle('') 
    }
  }

  const ref = useRef<HTMLInputElement>(null)

  return (
    <div className='input-field'>
      <input 
        type="text" 
        id='title'
        ref={ref}
        // value={title}
        // onChange={changeHandler}
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className='active'>
        Введите название дела
      </label>
    </div>
  )
}