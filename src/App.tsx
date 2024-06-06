import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from '@/pages/Layout.tsx';
import Articles from '@/pages/Articles.tsx';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/articles" element={<Articles />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
