import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroPage from "./components/Hero/HeroPage";
import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";
import Work from "./components/Work/Work";
import Jawny from "./components/Work/WorkHistory/Jawny";
import Mereba from "./components/Work/WorkHistory/Mereba";
import KingKrule from "./components/Work/WorkHistory/KingKrule";
import FreddieGibbs from "./components/Work/WorkHistory/FreddieGibbs";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<HeroPage />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/jawny" element={<Jawny />} />
            <Route path="/mereba" element={<Mereba />} />
            <Route path="/kingkrule" element={<KingKrule />} />
            <Route path="/freddiegibbs" element={<FreddieGibbs />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
