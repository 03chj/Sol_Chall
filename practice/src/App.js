import './App.css';
import Question4 from './Question4.js';
import Question5 from './Question5.js';
import Question6 from './Question6.js';
import Result from './ShowResult.js'

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Q4' element={<Question4/>}></Route>
        <Route path='/Q5' element={<Question5/>}></Route>
        <Route path='/Q6' element={<Question6/>}></Route>
        <Route path='/result' element={<Result/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
