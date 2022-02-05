import './styles/App.css';
import About from './components/about';
import Speaker from './components/speakers';
import Landing from './components/landing';
import Nav from './components/nav';
import Workshop from './components/workshops';
import "./styles/App.css";
import Footer from './components/footer';

function App() {
  return (
    <>
      <section className='text-white'>
        <section>
          <Nav />
        </section>
        <section className='px-10 from-lightbgblue to-darkbgblue bg-gradient-to-t'
          id='Landing'>
          <Landing />
        </section>
        <div className="spacer layer1 bg-lightbgblue" />

        <section className='px-10 md:px-20 lg:px-48 from-lightbgblue to-darkbgblue bg-gradient-to-t'
          id='About'>
          <About />
        </section>
        <div className="spacer layer1 bg-lightbgblue" />

        <section className='px-10 from-lightbgblue to-darkbgblue bg-gradient-to-t'
          id='Speakers'>
          <Speaker />
        </section>
        <div className="spacer layer1 bg-lightbgblue" />

        <section className='text-gray-800 px-10 from-lightbgblue to-darkbgblue bg-gradient-to-t'
          id='Workshops'>
          <Workshop />
        </section>
        <div className="spacer layer2 bg-lightbgblue" />

        <Footer />
      </section>
    </>
  );
}

export default App;
