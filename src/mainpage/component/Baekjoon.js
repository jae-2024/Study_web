import React, { useState, useEffect } from 'react';
import './Baekjoon.css'; // 스타일 파일 연결

export default function Baekjoon() {
  const [input, setInput] = useState(''); // 계산기 입력 상태
  const [tasks, setTasks] = useState([]); // To-Do List 상태
  const [newTask, setNewTask] = useState(''); // 새 작업 입력 상태
  const [isCalculatorFocused, setIsCalculatorFocused] = useState(false); // 계산기 포커스 상태

  // 계산기 함수
  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput('');
  };

  const backspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const calculateResult = () => {
    if (input.trim() === '') return;
    try {
      const result = eval(input); // 계산
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleKeyDownCalculator = (event) => {
    if (!isCalculatorFocused) return; // 계산기에 포커스되지 않으면 동작하지 않음
    const key = event.key;
    if (!isNaN(key) || key === '.') {
      setInput((prev) => prev + key);
    } else if (['+', '-', '*', '/'].includes(key)) {
      setInput((prev) => prev + key);
    } else if (key === 'Enter') {
      event.preventDefault();
      calculateResult();
    } else if (key === 'Backspace') {
      backspace();
    } else if (key === 'Escape') {
      clearInput();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDownCalculator);
    return () => {
      window.removeEventListener('keydown', handleKeyDownCalculator);
    };
  }, [isCalculatorFocused]);

  // To-Do List 함수
  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks((prev) => [...prev, newTask.trim()]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    setTasks((prev) => prev.filter((_, i) => i !== index));
  };

  const handleKeyDownTodo = (event) => {
    if (event.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className="baekjoon-container">
      {/* 계산기 */}
      <div
        className="calculator"
        onFocus={() => setIsCalculatorFocused(true)}
        onBlur={() => setIsCalculatorFocused(false)}
      >
        <input
          type="text"
          value={input}
          readOnly
          className="calculator-display"
        />
        <div className="calculator-buttons">
          <button onClick={backspace}>BACK</button>
          <button onClick={clearInput}>CE</button>
          <button onClick={clearInput}>C</button>
          <button onClick={calculateResult}>=</button>

          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('/')}>/</button>

          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('*')}>*</button>

          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={() => handleClick('-')}>-</button>

          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={() => handleClick('.')}>.</button>
          <button onClick={() => handleClick('+')}>+</button>
        </div>
      </div>

      {/* To-Do List */}
      <div className="todo-list">
        <h2>To-Do List</h2>
        <div className="todo-input">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={handleKeyDownTodo} // Enter 키 처리
            placeholder="새 작업 추가"
          />
          <button onClick={handleAddTask}>추가</button>
        </div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => handleDeleteTask(index)}>삭제</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
