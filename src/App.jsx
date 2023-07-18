import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios"
import { MainPage } from "./components/MainPage"
import Books from "./components/Books";
import Quote from './components/Quote'
import Information from "./components/Information";

function App() {

  const [coins, setCoins] = useState({})
  const [result, setResult] = useState({})

  useEffect(() => {
    if(Object.keys(coins).length > 0) {

      const cotizarCripto = async () => {
        const {moneda, criptocurrency} = coins 
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptocurrency}&tsyms=${moneda}`
        const {data} = await axios.get(url)
        setResult(data.RAW[criptocurrency][moneda])
      }
      cotizarCripto()
    }
  }, [coins])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <MainPage
            setCoins={setCoins}
            result={result}
          /> }>
            <Route index element={<Information/>}/>
            <Route path='books' element={<Books/>} />
            <Route path='quote' element={<Quote
              setCoins={setCoins}
              result={result}
            />} />
          </Route>
        </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
