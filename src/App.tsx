import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from '@/pages/Layout.tsx';
import Posts from '@/pages/Posts.tsx';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/posts" element={<Posts />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
