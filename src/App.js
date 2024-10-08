import { Outlet } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
