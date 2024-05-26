import { Route, Routes } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Operations from '../Operations/Operations';
import './App.scss';
import Home from '../Home/Home';
import OpeAdd from '../Operations/OpeAdd/OpeAdd';
import Page404 from '../Page404/Page404';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/SocieteGeneral_Profil" element={<Home />} />
        <Route path="/SocieteGeneral_Profil/history" element={<Operations />} />
        <Route path="/SocieteGeneral_Profil/operation" element={<OpeAdd />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
