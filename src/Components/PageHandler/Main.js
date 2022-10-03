import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import Homepage from '../../Pages/Homepage/Homepage';

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/Home' element={<Homepage/>}></Route>
    </Routes>
  );
}



export default Main;