import { Routes, Route } from "react-router-dom";
import { TopBar } from "./components/topBar";
import { Article } from "./pages/article/article";
import { Auth } from "./pages/auth/auth";
import { GlobalFeed } from "./pages/globalFeed/globalFeed";

function App() {
  return (
    <div className="App">
      <TopBar/>
      <Routes>
        <Route path="/" element={<GlobalFeed />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Auth />} />
        <Route path="/articles/:slug" element={<Article />} />
      </Routes>
    </div>
  );
}

export default App;
