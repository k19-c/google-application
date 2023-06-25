import './App.css';
import SearchPage from './components/searchPage/SearchPage';
import Home from './pages/Home';
import { Route, Routes } from "react-router-dom";

const App = () =>  {
  return (
      <div className="App">
          <Routes>
            <Route path="/search" element={<SearchPage />} />
            <Route path="/"  element={<Home />} />
          </Routes>
      </div>
  );
}

export default App;
