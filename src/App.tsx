import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Form from './components/Form';
import Header from './components/Header';
import List from './components/List';

const TodoContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Inter', sans-serif;
  background-color: #d8dff7;
  background: url('https://images.unsplash.com/photo-1632201717104-b7c59bc026ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80');
  background-size: cover;
`;

const ContentWrapper = styled.div`
  width: 450px;
  background: rgba(255, 255, 255, 0.25);
  padding: 30px;
  border-radius: 12px;
  backdrop-filter: blur(25px);
  .header {
    display: flex;
    justify-content: space-between;
    .btn {
      height: 32px;
      width: 130px;
      background: #035687;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      font-weight: 600;
      color: White;
      cursor: pointer;
      transition: 200ms;
    }
    .btn[disabled] {
      cursor: not-allowed;
    }
  }
`;

const EmptyWrapper = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const allTodoItems = [
  {
    id: 1,
    text: 'Learn React',
    completed: true,
  },
  {
    id: 2,
    text: 'Learn Redux',
    completed: true,
  },
  {
    id: 3,
    text: 'Learn React Native',
    completed: false,
  },
  {
    id: 4,
    text: 'Learn GraphQL',
    completed: false,
  },
  {
    id: 5,
    text: 'Learn TypeScript',
    completed: true,
  },
  {
    id: 6,
    text: 'Learn Node',
    completed: true,
  },
  {
    id: 7,
    text: 'Learn Express',
    completed: false,
  },
  {
    id: 8,
    text: 'Learn MongoDB',
    completed: false,
  },
  {
    id: 9,
    text: 'Learn PostgreSQL',
    completed: false,
  },
  {
    id: 10,
    text: 'Learn MySQL',
    completed: false,
  },
];

function App() {
  const [todoItems, setTodoItems] = useState(allTodoItems);
  const handleAddTodoItem = (todo: string) => {
    setTodoItems([
      ...todoItems,
      { id: todoItems.length + 1, text: todo, completed: false },
    ]);
  };

  const handleClearCompleted = () => {
    if (todoItems.length > 0) {
      setTodoItems(todoItems.filter((item) => !item.completed));
    }
  };

  const handleTaskStatusChange = (e: any) => {
    const { id } = e.target;
    const newTodoItems = todoItems.map((item) => {
      if (item.id === Number(id)) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setTodoItems(newTodoItems);
  };

  return (
    <div className="App">
      <TodoContainer>
        <ContentWrapper>
          <div className="header">
            <Header />
            <button
              className="btn"
              onClick={() => {
                handleClearCompleted();
              }}
              disabled={todoItems.filter((item) => item.completed).length === 0}
            >
              Clear Completed
            </button>
          </div>
          {todoItems.filter((f) => !f.completed).length > 0 ? (
            <List
              allTodoItems={todoItems}
              handleTaskStatusChange={handleTaskStatusChange}
            />
          ) : (
            <EmptyWrapper>No tasks in today, you are free 🥳</EmptyWrapper>
          )}
          <Form handleAddTodoItem={handleAddTodoItem} />
        </ContentWrapper>
      </TodoContainer>
    </div>
  );
}

export default App;
