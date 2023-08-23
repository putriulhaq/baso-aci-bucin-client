import "./App.css";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import Home from "./pages/home";
import About from "./pages/about";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  const style = {
    container: "flex flex-col min-h-screen",
    content: "flex-1"
  };
  return (
    <BrowserRouter>
      <div className={style.container}>
        <Navbar />
        <div className={style.content}>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}></Route>
            <Route path="team" element={<About />}></Route>
            <Route path="home" element={<Home />}></Route>
          </Route>
        </Routes>
        </div>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
