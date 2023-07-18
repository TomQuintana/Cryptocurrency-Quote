
const Footer = () => {
  return (
    <div className=" bg-orange-200 relative bottom-0 h-32">
      <div className="flex justify-around mb-6">
        <div>
          <h1 className="font-bold text-xl">Pages Crypto</h1>
          <div>
            <a 
              className="font-mono"
              href="https://coinmarketcap.com">Coin Market Cap</a>
          </div>
          <div>
            <a 
              className="font-mono"
              href="https://www.blockchain.com/explorer/prices">Blockchain</a>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-xl">Pages Information</h1>
          <div>
            <a 
              className="font-mono"
              href="https://academy.binance.com/es/articles/what-is-blockchain-and-how-does-it-work">Whats is Blockchain ?</a>
          </div>
          <div>
            <a 
              className="font-mono"
              href="https://es.wikipedia.org/wiki/Satoshi_Nakamoto">Creator of Blockchain</a>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-xl">Api Information</h1>
          <div>
            <a 
              className="font-mono"
              href="https://min-api.cryptocompare.com/documentation">Cryptocompare</a>
          </div>
        </div>
      </div>
      <h1
        className="m-2 text-zinc-500 font-mono "
      >© 2023 Tomas Quintana</h1>
    </div>
  )
}

export default Footer
