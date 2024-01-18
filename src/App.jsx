import React from 'react'
import Onboarding from './pages/Onboarding'
import { PageProvider } from './components/PageStateContext'

const App = () => {
  return (
    <PageProvider>
      <Onboarding/>
    </PageProvider>
  )
}

export default App