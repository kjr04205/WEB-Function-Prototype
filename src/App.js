import React from 'react';
import ScrollableContainer from './ScrollableContainer';

const App = () => {
  return (
    <div>
      <h1>overflow 버튼 스크롤 테스트</h1>
      <ScrollableContainer>
        <div style={{ display: 'flex' }}>
          {/* Your content goes here */}
          <div style={{ width: '200px', height: '100px', background: 'red', margin: '10px' }}></div>
          <div style={{ width: '200px', height: '100px', background: 'blue', margin: '10px' }}></div>
          <div style={{ width: '200px', height: '100px', background: 'green', margin: '10px' }}></div>
          <div style={{ width: '200px', height: '100px', background: 'yellow', margin: '10px' }}></div>
          <div style={{ width: '200px', height: '100px', background: 'orange', margin: '10px' }}></div>
          <div style={{ width: '200px', height: '100px', background: 'purple', margin: '10px' }}></div>
        </div>
      </ScrollableContainer>
    </div>
  );
};

export default App;