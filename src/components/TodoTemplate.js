import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
width: 500px;
height: 800px;
position: relative;
background: white;

margin: 0 auto;
margin-top: 96px;
margin-bottom:32px;
dispaly: flex;
flex-direction: column;
`;

function TodoTemplate({children}){
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;

