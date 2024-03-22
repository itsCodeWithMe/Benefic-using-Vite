import "./App.css";
import Cards from "./components//latest_insights/Cards";
import Goals_About_Template from "./components/about_and_our_goals/Goals_About_Template";
import Client from "./components/clients/client";
import Services from "./components/services/services";
import AboutUsImg from "./favicons/AboutUsImg.png";
import OurGoalsImg from "./favicons/OurGoalsImg.png";

// import Slider from './components/Slider'
// import Tabcards from './components/Tabcards'
// import TabSection from './components/tabSection'

const contentPara1 = "Our vision is to build successful design solution";
const contentPara2 = "Consult our experts about your project free";
const MainPara = `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.`;
const heading1 = "About";
const heading2 = "Our Goals";

function App() {
  return (
    <>
      <Services></Services>
      <Goals_About_Template
        classe="about d-relative"
        image={AboutUsImg}
        heading={heading1}
        contentPara={contentPara1}
        MainPara={MainPara}
      />
      <Goals_About_Template
        classe="our_goals d-relative flex-row-reverse"
        image={OurGoalsImg}
        heading={heading2}
        contentPara={contentPara2}
        MainPara={MainPara}
      />

      <Cards></Cards>
      <Client></Client>
      {/* <TabSection />
    <Tabcards></Tabcards>
    <Slider></Slider> */}
    </>
  );
}

export default App;
