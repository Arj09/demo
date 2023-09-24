
import { Home } from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Human } from './Components/Human';
import { Theme } from './Components/Theme';
import { Main } from './Components/Project/Main';

function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route index element={<Main/>}    />
      <Route path='/path' > 
      <Route index element={<Human/>}    />
      <Route path='theme' element={<Theme/>}    />
      <Route path='home' element={<Home/>}    />
      </Route>
    </Routes>

    </BrowserRouter>
  );
}

export default App;
