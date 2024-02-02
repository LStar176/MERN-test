import {BrowserRouter, Routes, Route} from 'react-router-dom'
// Components
import Navbar from './assets/components/Navbar'

// Pages
import Home from './assets/pages/Home'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />  {/*Navbar appear on top of every page */}
        <div className='pages'>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
