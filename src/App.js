
import './App.css';
import Header from './Component/Header';
import Content from './Component/Content';
import Poster from './Poster';
import poster1 from "./Component/image/poster1.jpg"
import poster2 from "./Component/image/poster2.jpg"
import poster3 from "./Component/image/poster3.jpg"
import poster4 from "./Component/image/poster4.jpg"
import Button from './Button';
import ThemeBtn from './Component/ThemeBtn';


function App() {
  return (
    <div className="main-body" id='change'>
        <div className="head-nav">
            <Header text="5+ Awesome" text1="New Demo Added"/>
            <Content textContent="Google Translate is a multilingual neural machine Google Translate is a multilingual neural machine" textContent1="What is typesettinge specimen book it has?"/>
            <ThemeBtn/>
        </div>
        <div className="poster-main">
            <div className="poster">
                <Poster src={poster1} />
                <Poster src={poster2}/>
                <Poster src={poster3}/>
                <Poster src={poster4}/>
                <Poster src={poster1}/>
                <Poster src={poster2}/>
                <Poster src={poster3}/>
                <Poster src={poster4}/>
                <Poster src={poster1}/>
            </div>
        </div>
        <div>
          <Button btntext="TryDo do Live All view"/>
        </div>
    </div>
  );
}

export default App;
