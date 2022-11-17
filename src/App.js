import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SharedLayout, Home, About, Contact, Greetings } from './pages/Index';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="greetings" element={<Greetings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
