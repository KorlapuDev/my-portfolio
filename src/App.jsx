import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainHomeLayout from "./layout/MainHomeLayout";
import LandingPage from "./pages/LandingPage";
import ProjectsDisplay from "./pages/ProjectsDisplay";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainHomeLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="/projects" element={<ProjectsDisplay />} />
      </Route>
    </Routes>
  );
}

export default App;
