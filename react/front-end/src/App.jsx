import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
//import Contact from "./pages/Contact";
import Navbar from "./COMPONENT/Navbar";
import Page404 from "./pages/Page404";
import Functions from "./pages/Functions.";
import Todo from "./pages/Todo";
import ProjectList  from '../src/pages/ProjectList';
import Weather from "./COMPONENT/Weather";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Functions" element={<Functions />} />
            <Route path="/contact" element={<Weather />} />
            <Route path="/product" element={<ProjectList />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
