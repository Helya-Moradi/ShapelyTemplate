import './App.css';
import Header from './components/header/Header';
import Section from './components/section/Section';
import ParallaxSection from './components/parallaxSection/ParallaxSection';
import Projects from './components/projects/projects';
import ClientSection from './components/clientsSection/ClientSection';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
       <Header/>
       <Section direction="ltr" title="SEO Friendly" imgSrc="./img/macbook-preview-flexible.png" />
       <Section direction="rtl" title="Portfolio Section" imgSrc="./img/flexible-portfolio.png"/>
       <ParallaxSection title="Small Parallax Section" type="withBtn"/>
       <Section direction="ttb" title="Limitless Options" imgSrc="./img/photo-1440557653082-e8e186733eeb-1.jpg"/>
       <Projects/>
       <ParallaxSection title="What Our Customers Say" type="withImg"/>
       <ClientSection/>
       <Footer/>
    </div>
  );
}

export default App;
