import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./Components/Blog";
import Header from "./Components/Header";
import Home from "./Components/Home/Home";
import ProjectDetail from "./Components/ProjectDetail";
import SocialIcon from "./Components/SocialIcon";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="home" element={<Home></Home>}></Route>
        <Route path="/project/:projectId" element={<ProjectDetail></ProjectDetail>}></Route>
        <Route path="blog" element={<Blog></Blog>}></Route>
      </Routes>

      <SocialIcon></SocialIcon>
    </div>
  );
}

export default App;
