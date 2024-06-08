import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from '@/pages/Layout.tsx';
import { lazy, Suspense } from 'react';

const Articles = lazy(() => import('@/pages/Articles.tsx'));
const Projects = lazy(() => import('@/pages/Projects.tsx'));

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="articles"
            element={
              <Suspense fallback={<p>loading</p>}>
                <Articles />
              </Suspense>
            }
          />
          <Route
            path="projects"
            element={
              <Suspense fallback={<p>loading</p>}>
                <Projects />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
