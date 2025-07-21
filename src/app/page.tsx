import Hero from './Home/hero';
import Trust from './Home/trust';
import Cases from './Home/cases';
import Services from './Home/services';
import Contact from './Home/contact';
import Footer from './Components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Trust />
      <Services />
      <Cases />
      <Contact />
      <Footer />
    </main>
  );
}