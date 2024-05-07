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
import cbg from "./assets/cbg.svg";
import PrevWork from "./components/PrevWork";
import Certifications from "./components/Certifications";

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
        <div className={` ${styles.boxWidth}`}>
          <Mission />
        </div>
      </div>
      <div style={{ backgroundImage: `url(${cbg})`, backgroundSize: "cover" }}>
        <div className={` ${styles.boxWidth} `}>
          <Certifications />
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
      <div className="mt-20 ">
        <Footer />
      </div>
    </div>
  );
}

export default App;
