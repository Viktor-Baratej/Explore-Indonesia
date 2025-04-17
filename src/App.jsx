
import Header from './components/Sections/Header.jsx';
import Hero from './components/Sections/Hero.jsx';
import Article from './components/Sections/Article.jsx';
import ExploreAndNumbers from './components/Sections/ExploreAndNumbers.jsx';
import Map from './components/Sections/Map.jsx';
import Video from './components/Sections/Video.jsx';
import PhotoGallery from './components/Sections/PhotoGallery.jsx';
import GettingThere from './components/Sections/GettingThere.jsx';
import Footer from './components/Sections/Footer.jsx';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton.jsx';
import FadeInSection from './components/FadeInSection/FadeInSection.jsx';

function App() {
  return (
    <>
   <div className='header-background-image'>
      <Header />
      <Hero/>
   </div>
    <FadeInSection><Article/></FadeInSection>
    <FadeInSection><ExploreAndNumbers/></FadeInSection>
    <FadeInSection><Map/></FadeInSection>
    <FadeInSection><Video/></FadeInSection>
    <FadeInSection><PhotoGallery/></FadeInSection>
    <FadeInSection><GettingThere/></FadeInSection>
    <Footer/>
    <ScrollToTopButton/>
    </>
  );
    
}

export default App;
