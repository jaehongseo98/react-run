import React from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = () => {
  return (
    <form className='TodoInsert'>
      <input placeholder='할일을 입력하세요'></input>
      <button type='submit'>
        <MdAdd></MdAdd>
      </button>
    </form>
  );
};

export default TodoInsert;
