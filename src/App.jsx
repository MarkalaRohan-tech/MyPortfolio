import './App.css';
import Home from "./components/Home"
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile";
import {createBrowserRouter, RouterProvider} from "react-router"
import Navbar from './components/Navbar';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar className="fixed top-0 z-30"></Navbar>
        <Home />
      </div>
    ),
  },
  {
    path: "/About",
    element: (
      <div>
        <Navbar className="fixed top-0 z-30"></Navbar>
        <About />
      </div>
    ),
  },
  {
    path: "/Skills",
    element: (
      <div>
        <Navbar className="fixed top-0 z-30"></Navbar>
        <Skills />
      </div>
    ),
  },
  {
    path: "/Projects",
    element: (
      <div>
        <Navbar className="fixed top-0 z-30"></Navbar>
        <Projects />
      </div>
    ),
  },
  {
    path: "/Education",
    element: (
      <div>
        <Navbar className="fixed top-0 z-30"></Navbar>
        <Education />
      </div>
    ),
  },
  {
    path: "/Certifications",
    element: (
      <div>
        <Navbar className="fixed top-0 z-30"></Navbar>
        <Certifications />
      </div>
    ),
  },
  {
    path: "/Profile",
    element: (
      <div>
        <Navbar className="fixed top-0 z-30"></Navbar>
        <Profile />
      </div>
    ),
  },
  {
    path: "*",
    element: (
      <div>
        <Navbar className="fixed top-0 z-30"></Navbar>
        <NotFound />
      </div>
    ),
  },
]);
function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App
