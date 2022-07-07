import './App.scss';
import { Header } from './components/Header';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Welcome from './components/Welcome';

function App() {
  return (
    <>
        <div className="background">
        </div>
        <div className='container'>
            <Header/>
            <Welcome/>
            <Gallery/>
            <Footer/>
        </div>
    </>
  
  );
}

export default App;
