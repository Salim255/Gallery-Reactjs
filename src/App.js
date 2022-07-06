import './App.scss';
import { Header } from './components/Header';
import Footer from './components/Footer';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="container">
       
       <Header/>
       <Gallery/>
       <Footer/>

    </div>
  );
}

export default App;
