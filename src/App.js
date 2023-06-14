import React from 'react';
import ScrollableContainer from './ScrollableContainer';
import './App.css';
const App = () => {
  return (
    <div>
      <h1>overflow 버튼 스크롤 테스트</h1>
      <ScrollableContainer>
        <div className="boxWrap">
          <div className="box" style={{ background: 'red'}}></div>
          <div className="box" style={{ background: 'blue'}}></div>
          <div className="box" style={{ background: 'green'}}></div>
          <div className="box" style={{ background: 'yellow'}}></div>
          <div className="box" style={{ background: 'orange'}}></div>
          <div className="box" style={{ background: 'purple'}}></div>
        </div>
      </ScrollableContainer>
    </div>
  );
};

export default App;