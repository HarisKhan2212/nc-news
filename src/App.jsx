import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import './App.css'
import Title from './components/Title';
import ArticleSingle from './components/ArticleSingle';

function App() {

  return (
    <div>
      <Title />
      <Link to="/">Home</Link>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/articles/:article_id" element={<ArticleSingle />} />
      </Routes>
    </div>
  )
}

export default App
