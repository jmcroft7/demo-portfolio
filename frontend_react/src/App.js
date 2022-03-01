import './App.scss';

import { About, Footer, Header, Skills, Work } from './container'
import { Navbar, SocialMedia } from './components'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
      <SocialMedia />
    </div>
  );
}

export default App;
