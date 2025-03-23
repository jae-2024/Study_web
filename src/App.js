import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header1 from './mainpage/component/Header1';
import StudyPage from './mainpage/component/StudyPage';
import QuestionPage from './mainpage/mainLink/QuestionPage';
import Login from './mainpage/mainLink/Login';
import Baekjoon from './mainpage/component/Baekjoon';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // 로그인 페이지에서만 Header1을 숨김
  if (location.pathname === '/login') {
    return (
      <div>
        <Login />
      </div>
    );
  }

  return (
    <>
      <Header1 />
      <Routes>
        <Route path="/Q&A" element={<QuestionPage />} />
        <Route path="/StudyPage" element={<StudyPage/>} />
        <Route path="/Project" element={<div>Project Page</div>} />
        <Route path="/baekjoon" element={<Baekjoon />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;