import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import JumboTron from './components/JumboTron';
import NaviHeader from './components/NaviHeader';
import NewsCarousel from './components/NewsCarousel';
import TrendingStonks from './components/TrendingStonks';

function App() {
  return (
    <div className="App">
        <NaviHeader />
        <JumboTron />
        <NewsCarousel />
        <TrendingStonks/>
    </div>
  );
}

export default App;
