
import { Suspense } from 'react'
import './App.css'
// import DaisyNav from './components/daisynav/daisynav'
import Links from './components/NavBar/Links'
import NavBar from './components/NavBar/NavBar'
import PricingOftions from './components/PricingOftions/PricingOftions'
import ResultCharts from './components/ResultCharts/ResultCharts'


const pricingPromise = fetch('PricingData.json').then(res => res.json())

function App() {
 

  return (
    <>
      <header>
        <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      <Links></Links>
      </header>
     <main>
      <Suspense fallback={<span className="loading loading-spinner text-neutral"></span>}>
        <PricingOftions pricingPromise={pricingPromise}> </PricingOftions>
      </Suspense>

      <ResultCharts></ResultCharts>
     </main>
    </>
  )
}

export default App
