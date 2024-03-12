import { useState } from 'react'
import './App.css'
import Header from '../components/Header'
import ArticlesList from '../components/ArticlesList'
import Home from '../components/Home'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import { Routes, Route } from 'react-router-dom';
import SingleArticle from '../components/SingleArticle'

function App() {

  return (
    <>
      <Header/>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/articles/:id" element={<SingleArticle />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
