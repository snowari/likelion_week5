import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoHead from "./components/TodoHead";
import TodoTemplate from "./components/TodoTemplate";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import TodoCreate from "./components/TodoCreate";
import { TodoProvider } from "./TodoContext";

const GlobalStyle = createGlobalStyle`
body{
  background: #fdf9e8;
}`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;