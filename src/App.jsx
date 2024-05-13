import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import './App.css'
import Title from './components/Title';
import ArticleSingle from './components/ArticleSingle';
import LoginForm from './components/LoginForm';

function App() {

  const [currentUser, setCurrentUser] = useState("")

  return (
    <div>
      <Title />
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/articles/:article_id" element={<ArticleSingle currentUser={currentUser}/>} />
        <Route path="/login" element={<LoginForm setCurrentUser={setCurrentUser}/>}/>
      </Routes>
    </div>
  )
}

export default App
