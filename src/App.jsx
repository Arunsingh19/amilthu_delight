import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import DripDivider from './components/DripDivider.jsx';
import About from './components/About.jsx';
import MenuSection from './components/MenuSection.jsx';
import MeltSection from './components/MeltSection.jsx';
import BigText from './components/BigText.jsx';
import Order from './components/Order.jsx';
import Footer from './components/Footer.jsx';
import { useTheme } from './hooks/useTheme.js';

export default function App() {
  const { theme, toggle } = useTheme();
  return (
    <main>
      <Nav theme={theme} onToggleTheme={toggle} />
      <Hero />
      <DripDivider background="var(--bg)" />
      <About />
      <DripDivider background="var(--bg2)" />
      <MenuSection />
      <MeltSection />
      <BigText />
      <Order />
      <Footer />
    </main>
  );
}
