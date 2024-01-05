import React from "react";
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import ResumePage from "./page/ResumePage";
import HomePage from "./page/HomePage";
import ProjectPage from "./page/ProjectPage";
import AboutMe from "./page/AboutMe";
import ContactPage from "./page/ContactPage";
function App() {
  // const router = createHashRouter([
  //   {
  //     path: "/michaellaw_web",
  //     element: <HomePage />,
  //     children: [
  //       {
  //         path: "/michaellaw_web/project",
  //         element: <ProjectPage />,
  //       },
  //       {
  //         path: "/michaellaw_web/resume",
  //         element: <ResumePage />,
  //       },
  //       {
  //         path: "/michaellaw_web/AboutMe",
  //         element: <AboutMe />,
  //       },
  //       {
  //         path: "/michaellaw_web/Contact",
  //         element: <ContactPage />,
  //       },
  //     ],
  //   },
  // ]);
  return (
    <Router>
      <Routes>
        <Route path="/michaellaw_web" element={<HomePage />} />
        <Route path="/michaellaw_web/resume" element={<ResumePage />} />
        <Route path="/michaellaw_web/project" element={<ProjectPage />} />
        <Route path="/michaellaw_web/AboutMe" element={<AboutMe />} />
        <Route path="/michaellaw_web/Contact" element={<ContactPage />}/>
        
      </Routes>
    </Router>

    // <div>
    //   <>
    //     ReactDOM.createRoot(document.getElementById("root")).render(
    //       <RouterProvider router={router} />
    //     );
    //   </>
    // </div>
  );
}


export default App;