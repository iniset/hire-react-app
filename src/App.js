import './App.css';
import Banner from "./components/Banner/Banner";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Speakers from './components/Speakers/Speakers';

function App() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Speakers></Speakers>
      <Footer></Footer>
    </div>
  );
}

export default App;
