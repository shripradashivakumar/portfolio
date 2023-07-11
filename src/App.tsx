import AboutMe from "./sections/aboutMe";
import Banner from "./sections/banner";
import Header from "./sections/header";
import Portfolio from "./sections/portfolio";
import Contact from "./sections/contact";
import Footer from "./sections/footer";

function App() {
  return (
    <main className="h-auto w-screen bg-white">
      <Header />
      <Banner />
      <AboutMe />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
