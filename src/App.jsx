import { HashRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import CaseStudy from './pages/CaseStudy';
import Creative from './pages/Creative';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import NotFound from './pages/NotFound';

// HashRouter so deep links work on GitHub Pages without server rewrites.
export default function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="work/:slug" element={<CaseStudy />} />
            <Route path="creative" element={<Creative />} />
            <Route path="contact" element={<Contact />} />
            <Route path="resume" element={<Resume />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}
