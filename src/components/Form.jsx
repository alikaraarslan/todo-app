import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
  display: flex;
  position: relative;
  margin-top: 12px;
  input {
    height: 40px;
    padding: 0 8px;
    margin: 0;
    border: 1px solid #d8dff7;
    border-right: none;
    width: 100%;
    padding-right: 64px;
    border-radius: 4px;
    background: #f9faff;
    font-weight: 500;
    &:focus {
      outline: none;
      box-shadow: none;
    }

    ::placeholder {
      color: #9da9d1;
      opacity: 1;
      font-weight: 500;
    }
  }
  .btn {
    height: 28px;
    width: 60px;
    background: #035687;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    position: absolute;
    right: 7px;
    top: 7px;
    font-weight: 600;
    color: White;
    cursor: pointer;
    transition: 200ms;
  }
  .btn[disabled] {
    cursor: not-allowed;
  }
`;

const Form = ({ handleAddTodoItem }) => {
  const [value, setValue] = useState('');
  const sendButtonRef = useRef(null);

  //enter event submit
  useEffect(() => {
    const listener = (e) => {
      if (e.keyCode === 13) {
        sendButtonRef.current.click();
        e.preventDefault();
      }
    };
    document.addEventListener('keydown', listener);
    return () => {
      document.removeEventListener('keydown', listener);
    };
  }, [value?.length > 0]);

  return (
    <FormWrapper>
      <input
        type="text"
        value={value}
        placeholder="Write a task"
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className="btn"
        ref={sendButtonRef}
        onClick={() => {
          handleAddTodoItem(value);
          setValue('');
        }}
        disabled={!value}
      >
        Add
      </button>
    </FormWrapper>
  );
};

export default Form;
