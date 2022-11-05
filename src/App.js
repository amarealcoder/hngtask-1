import { Route, Routes } from 'react-router-dom';
import { Link } from './components/link';
import { Contact } from './components/contact';
import { Footer } from './components/footer';

function App() {
  return (
    <div className='App container'>
      <Routes>
        <Route path='/' element={<Link />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
