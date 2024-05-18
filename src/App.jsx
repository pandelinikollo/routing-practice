import { BrowserRouter, Routes, Route} from "react-router-dom"
import Component from "./Component/Component"



function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        
        <Route path= "/" element={ <Component />} />

        <Route path= "/:param/" element={ <Component />} />
        <Route path= "/:param/:textColor/:bgColor" element={ <Component />} />

      </Routes>
  
      </BrowserRouter>
    </>
  )
}

export default App
