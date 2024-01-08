import logo from './logo.svg';
import './App.css';
import HeroBanner from './HeroBanner.js';
import HeroQuote from './HeroQuote.js';
import AboutUs from './AboutUs.js';
import CoFounders from './CoFounders.js';
import ActionTokens from './ActionTokens.js';
import BlogLinks from './BlogLinks.js';
import GoalsCard from './GoalsCard.js';
import PartnerNetwork from './PartnerNetwork.js';
import AboutCoFounder from './AboutCoFounder.js';
import WhyDonate from './WhyDonate.js';
import Wishlist from './Wishlist.js';
import ContactUs from './ContactUs.js';

function App() {
  return (
    <div className="App">
      <HeroBanner />
      <HeroQuote />
      <AboutUs />
      <CoFounders />
      <ActionTokens />
      <BlogLinks />
      <GoalsCard />
      <PartnerNetwork />
      <WhyDonate />
      <AboutCoFounder />
      <Wishlist />
      <ContactUs />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;
