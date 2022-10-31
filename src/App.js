import { Footer } from './components/footer';
import Header from './components/header';
import { Link } from './components/link';
import { Socials } from './components/socials';

function App() {
  return (
    <div className='App container'>
      <Header />
      <Link />
      <Socials />
      <Footer />
    </div>
  );
}

export default App;
