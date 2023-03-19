import React from 'react';
import { BrowserRouter as Router  ,Route , Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import DashboardPage from './pages/DashboardPage'
import PostsPage from './pages/PostsPage';
import SinglePostPage from './pages/SinglePostPage';

const App = () => {
  return (
   <Router>
    <Navbar />
    <Routes>
        <Route exact path ="/" element={ <DashboardPage/>}/> 
        <Route path ="/posts" element ={ <PostsPage/> } />
        <Route path="/posts/:id" element={<SinglePostPage/>} />
      
    </Routes>
   </Router>
  )
}

export default App
