
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import Home from './page/Home';
import Detail from './page/Detail';
import { AnimatePresence } from 'framer-motion'
import './App.css';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {

  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
