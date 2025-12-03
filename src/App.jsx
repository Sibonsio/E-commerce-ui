import './App.css'
import SigninHero from './componets/LoginHero.jsx'
import SignLayout from './componets/SignLayout.jsx'
import { Route, Routes } from 'react-router'
import SignupHero from './componets/SignupHero.jsx'
import Shop from './pages/Shop.jsx'
import Women from './pages/Women.jsx'
import Men from './pages/Men.jsx'
import Combos from './pages/Combos.jsx'
import Joggers from './pages/Joggers.jsx'


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<SignLayout />}>
          <Route path='/' element={<Shop />} />
          <Route path='/women' element={<Women />} />
          <Route path='/men' element={<Men />} />
          <Route path='/combos' element={<Combos />} />
          <Route path='/joggers' element={<Joggers />} />
          <Route path='/signin' element={<SigninHero />} />
          <Route path='/signup' element={<SignupHero />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
