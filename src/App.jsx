import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header';
import List from './Components/List/List.jsx';
import Map from './Components/Map/Map.jsx';
import PlaceDetails from './Components/PlaceDetails/PlaceDetails.jsx';



function App() {
  const [count, setCount] = useState(0)

  return (
   <>

      <Header/>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-2 w-full">
      <div className="col-span-12 md:col-span-4">
        <List/>
      </div>
      <div className="col-span-12 md:col-span-8">
        {/* <Map/> */}
      </div>
      </div>

   </>
  )
}

export default App
