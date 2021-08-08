import React from 'react';
import './TodoTemplate.scss';

//화면 가운데 정렬
const TodoTemplate = ({ children }) => {
  return (
    <div className='TodoTemplate'>
      <div className='app-title'>일정관리</div>
      <div className='content'>{children}</div>
      {/* 하위 컴포넌트를 받는다 */}
    </div>
  );
};

export default TodoTemplate;
