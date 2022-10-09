import './App.css';
import Navbar from './Page/Shared/Navbar';
import Loader from './Page/Shared/Loader';
import About from './Page/About/About';
import Home from './Page/Home/Home';
import Project from './Page/Project/Project';
import ProjectDetails from './Page/Project/ProjectDetails';
import Contact from './Page/Contact/Contact';
import Blog from './Page/Blog/Blog';
import NotFound from './Page/Shared/NotFound';
import { Suspense } from 'react';
import ScrollToTop from './Component/ScrollToTop';
import Footer from './Page/Shared/Footer';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/project" element={<Project />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/loader" element={<Loader />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
