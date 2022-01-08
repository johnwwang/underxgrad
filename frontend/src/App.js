import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// Styles
import { GlobalStyle } from './GlobalStyle';

// Components
import Header from './components/Header';
import Home from './webpages/Home'
import Undergrad from './webpages/Undergrad';
import Grad from './webpages/Grad';
import NotFound from './components/NotFound'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/undergrad' element={<Undergrad />} />
        <Route path='/grad' element={<Grad />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </Router>
  );
}

export default App;
