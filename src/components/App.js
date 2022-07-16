import React, {Component, useState} from "react";
import '../styles/App.css';

const App = ({slides}) => {
  const [currentSlideNo, setCurrentSlideNo] = useState(0);
  function incrementSlide(){
    //if we are at last slide
    if(currentSlideNo === slides.length -1){
      return;
    }
    setCurrentSlideNo(currentSlideNo+1);
  }
  function decrementSlide(){
    //if we are at last slide
    if(currentSlideNo === 0){
      return;
    }
    setCurrentSlideNo(currentSlideNo -1);
  }
  function restart(){
    if(currentSlideNo ===0){
      return;
    }
    setCurrentSlideNo(0)
  }
  return (
    <div>
      <h1 data-testid="title">{slides[currentSlideNo].title}</h1>
      <p data-testid="text">{slides[currentSlideNo].text}</p>
      <button data-testid="button-restart" disabled={currentSlideNo===0} onClick={restart}>Restart</button>
      <button data-testid="button-prev" disabled={currentSlideNo== 0} 
      onClick={decrementSlide}>Prev</button>
      <button data-testid="button-next" disabled={currentSlideNo== slides.length -1} 
      onClick={incrementSlide}>Next</button>
    </div>
  )
}


export default App;
