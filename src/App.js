import './App.scss';
import { Header } from './components/Header';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Welcome from './components/Welcome';
import About from './components/About';
import ScrollUp from './components/ScrollUp';



function App() {
  return (
    <>
        <div className="background">
        </div>
        <div className='container'>
            <Header/>
            <Welcome/>
            <About/>
            <Gallery/>
            <ScrollUp/>
            <Footer/>
        </div>
    </>
  
  );
}

export default App;
