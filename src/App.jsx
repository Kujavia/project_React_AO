import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import LoginPage from './components/LoginPage'
import СardModal from './components/wordCardModal'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Missing from './components/Missing'
import News from './components/News'
import NewsPage from './components/NewsPage'





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
          <Route path="/game" element={<СardModal/>}/>
          <Route path="*" element={<Missing/>}/>
          <Route path="/news" element={<News news={news}/>}/>
          <Route path="/news/:id" element={<NewsPage news={news}/>}/>
        </Routes>
        <СardModal/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App
