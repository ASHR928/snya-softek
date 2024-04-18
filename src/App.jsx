import styles from "./style";
import {
  Navbar,
  Footer,
  Home,
  Mission,
  Projects,
  Testimonials,
  Services,
} from "./components";
import bg from "./assets/home/bg.svg";
import PrevWork from "./components/PrevWork";

function App() {
  return (
    <div
      className="
     w-full overflow-hidden">
      <div style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>

        <div className={`${styles.flexStart} ${styles.paddingX} `}>
          <div id="home" className={`${styles.boxWidth}`}>
            <Home />
          </div>
        </div>
      </div>
      <div>
        <div className={` ${styles.boxWidth} bg-dimBlue`}>
          <Mission />
        </div>
      </div>

      <div className={`${styles.boxWidth}`}>
        <Services />
        <Projects />
        <div>
          <PrevWork />
        </div>
      </div>

      <Testimonials />
      <div className="md:mt-20 ">
        <Footer />
      </div>
    </div>
  );
}

export default App;
