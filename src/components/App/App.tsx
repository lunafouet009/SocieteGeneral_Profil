import { Route, Routes } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Operations from '../Operations/Operations';
import './App.scss';
import Home from '../Home/Home';
import OpeAdd from '../Operations/OpeAdd/OpeAdd';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<Operations />} />
        <Route path="/operation" element={<OpeAdd />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
