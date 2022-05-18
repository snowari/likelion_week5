import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';



const TodoHeadBlock = styled.div`

padding-top: 30px;
padding-left: 25px;
padding-right: 25px;
padding-bottom: 20px;
border-bottom: 1px solid;

h1{
  margin: 0;
  font-size : 30px;
}
.day{
  margin-top: 3px;
  font-size: 20px;
  
}
.tasks-left{
  font-size: 16px;
  margin-top: 20px;
}
`;

function TodoHead() {
  const todos = useTodoState();
  const undoneTakes = todos.filter(todo=>!todo.done);
  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR',{
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const dayName = today.toLocaleDateString('ko-KR',{weekday: 'long'});
  
  
  console.log(todos);
  return (
    <TodoHeadBlock>
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
      <div className="tasks-left">{undoneTakes.length}개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;