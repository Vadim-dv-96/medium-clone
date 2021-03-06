import { Routes, Route } from 'react-router-dom';
import { TopBar } from './components/topBar';
import { CurrentUserProvider } from './contexts/currentUser';
import { Article } from './pages/article/article';
import { Auth } from './pages/auth/auth';
import { GlobalFeed } from './pages/globalFeed/globalFeed';

function App() {
  return (
    <div className="App">
      <CurrentUserProvider>
        <TopBar />
        <Routes>
          <Route path="/" element={<GlobalFeed />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/register" element={<Auth />} />
          <Route path="/articles/:slug" element={<Article />} />
        </Routes>
      </CurrentUserProvider>
    </div>
  );
}

export default App;
