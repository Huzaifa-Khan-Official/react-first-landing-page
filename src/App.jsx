import './App.css';
import Banner from './Components/Banner/Banner';
import Card from './Components/Card/Card';
import Navbar from './Components/Navbar/Navbar';
import cardImg1 from "./cardImg1.png";
import cardImg2 from "./cardImg2.png";
import cardImg3 from "./cardImg3.png";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <div className="row">
        <Card imgSrc={cardImg1} heading="Easy to Use" paragraph="Docusaurus was designed from the ground up to be easily installed and used to get your website up and running quickly." />
        <Card imgSrc={cardImg2} heading="Focus on What Matters" paragraph="Docusaurus lets you focus on your docs, and we'll do the chores. Go ahead and move your docs into the docs directory." />
        <Card imgSrc={cardImg3} heading="Powered by React" paragraph="Extend or customize your website layout by reusing React. Docusaurus can be extended while reusing the same header and footer." />
      </div>
    </div>
  );
}

export default App;
