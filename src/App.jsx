import './App.css'
import SigninHero from './componets/LoginHero.jsx'
import SignLayout from './componets/SignLayout.jsx'
import { Route, Routes } from 'react-router'
import SignupHero from './componets/SignupHero.jsx'


const App = () => {


  return (
    <>
      <Routes>
        <Route path='/' element={<SignLayout />}>
          <Route path='/signin' element={<SigninHero />} />
          <Route path='signup' element={<SignupHero />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
