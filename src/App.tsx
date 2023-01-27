import { Header } from './components/Header/Header';
import { Home } from './views/Home';
import './App.css';

export const App = () => (
  <div className="content-wrapper">
    <Header />
    
    <main>
      <Home />
    </main>
  </div>
);
