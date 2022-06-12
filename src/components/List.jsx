import { useEffect, useState } from 'react';
import styled from 'styled-components';

const ListWrapper = styled.div`
  display: flex;
  ul {
    width: 100%;
    margin: 12px 0;
    li {
      user-select: none;
      &:not(:last-child) {
        margin-bottom: 4px;
      }

      .item-container {
        display: inline-block;
        position: relative;
        padding-left: 24px;
        margin-bottom: 4px;
        cursor: pointer;
        font-size: 14px;
        word-break: break-all;
        user-select: none;
        &.completed {
          text-decoration: line-through;
        }
      }

      .item-container input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
      }

      .checkmark {
        position: absolute;
        top: -1px;
        left: 0;
        height: 16px;
        width: 16px;
        background-color: #eee;
        border-radius: 3px;
      }

      .item-container:hover input ~ .checkmark {
        background-color: #ccc;
      }

      .item-container input:checked ~ .checkmark {
        background-color: #035687;
      }

      .checkmark:after {
        content: '';
        position: absolute;
        display: none;
      }

      .item-container input:checked ~ .checkmark:after {
        display: block;
      }

      .item-container .checkmark:after {
        left: 5px;
        top: 1px;
        width: 4px;
        height: 8px;
        border: solid white;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
      }
    }
  }
`;

const List = ({ allTodoItems, handleTaskStatusChange }) => {
  return (
    <ListWrapper>
      <ul>
        {allTodoItems.map((item, idx) => (
          <li key={idx}>
            <label
              className={`item-container ${item.completed ? 'completed' : ''}`}
            >
              {item.text}
              <input
                id={item.id}
                type="checkbox"
                placeholder="Write a task"
                checked={item.completed}
                onChange={(e) => handleTaskStatusChange(e)}
              />
              <span className="checkmark" />
            </label>
          </li>
        ))}
      </ul>
    </ListWrapper>
  );
};

export default List;
