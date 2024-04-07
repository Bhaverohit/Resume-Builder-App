import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Authentication from '../pages/Authentication';
import HomeScreen from '../pages/HomeScreen';

const App = () => {
  return <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path='/*' element={<HomeScreen />} />
      <Route path='/auth' element={<Authentication />} />
    </Routes>
  </Suspense >;
}

export default App
