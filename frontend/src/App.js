import { Routes, Route } from "react-router-dom";
import TopBar from "./scenes/global/TopBar";
import Welcome from "./scenes/welcome";

function App() {
  return (
    <div className="app">
      <main className="content">
        <TopBar />
        <Routes>
          <Route path="/" element={<Welcome />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
