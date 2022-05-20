import HomeHeader from "./components/HomeHeader";
import HomeSide from "./components/HomeSide";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>   
        <Routes>
          <Route exact path="/" element = {<>
            <div className="home">
              <HomeHeader />
              <HomeSide />
              <Footer />
           </div>
          </>}/>
          <Route exact path="/projects" element = {<Projects />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
