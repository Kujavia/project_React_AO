import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Content from './components/ContentCardApi'
import Footer from './components/Footer'
import LoginPage from './components/LoginPage'
import WordСard from './components/wordCard'
import Missing from './components/Missing'
import News from './components/News'
import NewsPage from './components/NewsPage'
import TestForm from './components/FormButton'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'



function App() {
  const news = [
    {id:"1", text:"открыли библиотеку"},
    {id:"2", text:"вывели новую породу кошек"},
    {id:"3", text:"открыли библиотеку"},
    {id:"4", text:"вывели новую породу кошек"},
    {id:"5", text:"открыли библиотеку"},
    {id:"6", text:"вывели новую породу кошек"},
    {id:"7", text:"открыли библиотеку"},
    {id:"8", text:"вывели новую породу кошек"}
  ]

  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Content/>}/>
          <Route path="/game" element={<WordСard/>}/>
          <Route path="/form" element={<TestForm/>}/>
          <Route path="/news" element={<News news={news}/>}/>
          <Route path="/news/:id" element={<NewsPage news={news}/>}/>
          <Route path="*" element={<Missing/>}/>
        </Routes>
        {/* <WordСard/> */}
        <Footer/>
      </div>
    </Router>
  );
}

export default App
