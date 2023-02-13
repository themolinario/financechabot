import { Routes, Route } from "react-router-dom";
import TopBar from "./scenes/global/TopBar";
import Welcome from "./scenes/welcome";
import CompileForm from "./scenes/form";

function App() {
  return (
    <div className="app">
      <main className="content">
        <TopBar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/form" element={<CompileForm />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
