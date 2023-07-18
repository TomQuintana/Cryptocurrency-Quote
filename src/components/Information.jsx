import { useEffect, useState } from "react"
import axios from "axios"
import ResultInfo from "./ResultInfo"

const Information = () => {

  const [cryptoValue, setCryptoValue] = useState([])
  const [result, setResult] = useState({})

  useEffect( () => {
    const cryptoInfo = async () => {
      const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
      const {data} = await axios.get(url)

      console.log(data)
      const cryptoArray = data.Data.map((crypto) => {
        const cryptoObj = {
          acronym: crypto.CoinInfo.Name,
          name: crypto.CoinInfo.FullName,
          img: crypto.RAW.USD.IMAGEURL,
          price: crypto.RAW.USD.PRICE
        }

        return cryptoObj
      })
      setResult(cryptoArray)
    }
    cryptoInfo()
  }, [])

  return (
    <>
      <div className="flex justify-center font-mono text-4xl mt-5">
        <h1> Price top ten Coins</h1>
      </div>
      < ResultInfo 
        result={result}
      />
    </>
  )
}

export default Information

