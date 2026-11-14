import Header from './components/Header';
import Footer from './components/Footer';
import FloatingControls from './components/FloatingControls';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Footer />
      <FloatingControls />
    </div>
  );
}

export default App;
