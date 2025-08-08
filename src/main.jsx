import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as BrowserRouter,Route, Routes } from 'react-router';
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Skills from './pages/Skills.jsx';
import Contact from './pages/Contact.jsx';
import { Provider } from 'react-redux';
import {store} from './store/store.js';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
      {/* this a child routing */}  
        <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
    </BrowserRouter>
      </Provider>
  </StrictMode>,
)
