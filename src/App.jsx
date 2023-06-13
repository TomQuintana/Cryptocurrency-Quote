import { useState, useEffect } from "react"
import axios from "axios"
import { MainPage } from "./components/MainPage"

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
      <MainPage
        setCoins={setCoins}
        result={result}
      />
    </>
  )
}

export default App
