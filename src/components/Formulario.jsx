import { useEffect, useState } from "react"
import useSelectMonedas from "../hooks/useSelectMonedas"
import useSelectCryptocurrency from "../hooks/useSelectCryptocurrency"
import axios from "axios"
import Result from "./Result"
import Error from "./Error"

const Formulario = ({setCoins, result}) => {
  
  const monedas = [
    {id: 'ARS', nombre: 'Peso Argentino'},
    {id: 'USD', nombre: 'Dolar'},
    {id: 'MXN', nombre: 'Peso Mexicano'},
    {id: 'EUR', nombre: 'Euro'},
    {id: 'GBP', nombre: 'Libra Esterlina'},
  ]
  
  const [cryptos, setCriptos] = useState([])
  const [error, setError] = useState(false)

  const [moneda, SelectMonedas] = useSelectMonedas('Choose your Currency', monedas)
  const [criptocurrency, SelectCryptocurrency] = useSelectCryptocurrency('Choose your Cryptocurrency', cryptos)

  useEffect( () => {
    const cryptoInfo = async () => {
      const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"

      const cryptoInfoApi = await axios.get(url)

      const cryptoArray = cryptoInfoApi.data.Data.map((crypto) => {
        const cryptoObj = {
          acronym: crypto.CoinInfo.Name,
          name: crypto.CoinInfo.FullName,
        }

        return cryptoObj
      })

      setCriptos(cryptoArray)
    }

    cryptoInfo()
  }, [])

const handleSubmit = e => {
    e.preventDefault()

    if ([moneda, criptocurrency].includes('')) {
      setError(true)
      return
    }

    setCoins({
      moneda,
      criptocurrency
    })

    setError(false)
  }

  return (
    <>
      {error &&
        <Error>Todos los campos son obligatorios</Error>
      }
      <form
        onSubmit={handleSubmit}
      >
        <div className="md:grid grid-cols-2 ">
          <div>
            <SelectMonedas />
          </div>
          <div>
            <SelectCryptocurrency />
          </div>
        </div>
        <div className="flex justify-center">
          <input
            className="mt-14 bg-orange-400 w-1/5 text-white p-2 text-3xl shadow rounded-xl"
            type='submit' value='Quote' />
        </div>
      </form>
      {result.PRICE && <Result 
        result={result}
      /> }
    </> 
  )
}

export default Formulario
