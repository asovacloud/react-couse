import React from 'react';
import styled from '@emotion/styled';
import '@fortawesome/fontawesome-free';
import './App.css';

const Header = styled.header`
  margin: 0 0 16px;
`

const H1 = styled.h1`
  color: rgb(63, 64, 65);
  margin: 0;
`

const Section = styled.section`
  margin: 0 auto;
  max-width: 800px;
  padding: 40px;
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
`

function App() {
  return (
    <Section>
      <Header>
        <H1>React Todo List 👀</H1>
      </Header>
      <ul className="todo-list">
        <li className="todo-list__item">
          <button class="todo-list__check-box">
            <i class="fa fa-square"></i>
            <i class="fa fa-check-square"></i>
          </button>
          <strong className="todo-list__text">Item 1</strong>
          <button class="todo-list__delete">
            <i class="fa fa-trash"></i>
          </button>
        </li>
        <li className="todo-list__item">
          <button class="todo-list__check-box">
            <i class="fa fa-square"></i>
            <i class="fa fa-check-square"></i>
          </button>
          <strong className="todo-list__text">Item 2</strong>
          <button class="todo-list__delete">
            <i class="fa fa-trash"></i>
          </button>
        </li>
        <li className="todo-list__item">
          <button class="todo-list__check-box">
            <i class="fa fa-square"></i>
            <i class="fa fa-check-square"></i>
          </button>
          <strong className="todo-list__text">Item 3</strong>
          <button class="todo-list__delete">
            <i class="fa fa-trash"></i>
          </button>
        </li>
      </ul>

      <form class="add-item">
        <div class="row-input">
          <input type="text" placeholder="Add new element..." class="form-control" />
        </div>
        <button class="btn btn-sm btn-outline-success"><i class="fa fa-plus" aria-hidden="true"></i></button>
      </form>

    </Section>
    
  );
}

export default App;
