import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem text="할일1" done={true} />
      <TodoItem text="할일2" done={true} />
      <TodoItem text="할일3" done={false} />
      <TodoItem text="할일4" done={false} />
    </TodoListBlock>
  );
}

export default TodoList;